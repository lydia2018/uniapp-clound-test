<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validate-trigger="submit" err-show-type="toast">
      <uni-forms-item name="username" label="姓名1" required>
        <uni-easyinput placeholder="姓名2" v-model="formData.username" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="gender" label="性别">
        <uni-data-checkbox v-model="formData.gender" :localdata="formOptions.gender_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="mobile" label="电话" required>
        <uni-easyinput placeholder="电话" v-model="formData.mobile" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="email" label="邮箱">
        <uni-easyinput placeholder="邮箱地址" v-model="formData.email" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="comment" label="备注">
        <textarea placeholder="备注" @input="binddata('comment', $event.detail.value)" class="uni-textarea-border" v-model="formData.comment" trim="both"></textarea>
      </uni-forms-item>
      <uni-forms-item name="city_id" label="地址">
        <uni-data-picker self-field="code" parent-field="parent_code" v-model="formData.city_id" collection="opendb-city-china" orderby="value asc" field="code as value, name as text, eq(type, 2) as isleaf"></uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="nation_china" label="名族">
        <uni-data-picker placeholder="请选择名族" v-model="formData.nation_china" collection="opendb-nation-china" field="_id as value, name as text"></uni-data-picker>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" @click="submit">提交</button>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/opendb-contacts.js';

  const db = uniCloud.database();
  const dbCollectionName = 'opendb-contacts';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.indexOf(key) > -1) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
    data() {
      let formData = {
        "username": "",
        "gender": 0,
        "mobile": "",
        "email": "",
        "comment": "",
        "city_id": "",
        "nation_china": ""
      }
      return {
        formData,
        formOptions: {
          "gender_localdata": [
            {
              "text": "未知",
              "value": 0
            },
            {
              "text": "男",
              "value": 1
            },
            {
              "text": "女",
              "value": 2
            }
          ]
        },
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            icon: 'none',
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      }
    }
  }
</script>

<style>
  .uni-container {
    padding: 15px;
  }

  .uni-input-border,
  .uni-textarea-border {
    width: 100%;
    font-size: 14px;
    color: #666;
    border: 1px #e5e5e5 solid;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .uni-input-border {
    padding: 0 10px;
    height: 35px;

  }

  .uni-textarea-border {
    padding: 10px;
    height: 80px;
  }

  .uni-button-group {
    margin-top: 50px;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
  }

  .uni-button {
    width: 184px;
  }
</style>
