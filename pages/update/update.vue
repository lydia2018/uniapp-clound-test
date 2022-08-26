<template>
	<view>
		<uni-easyinput  v-model="item.name" placeholder="name" />
		<uni-easyinput  v-model="item.age" placeholder="age" />
		<uni-easyinput  v-model="item.address" placeholder="address" />
		<button type="default" @click="submit">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{
					name:"",
					age:"",
					address:""
				}
			}
		},
		onLoad(param) {
			this.item=JSON.parse(param.item);
		},
		methods: {
			submit(){
				let item={...this.item};
				delete item._id
				const db = uniCloud.database();
				db.collection('test').doc(this.item._id).update(item).then(e=>{
					uni.navigateTo({
						url: '../index/index',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				})
			}
		}
	}
</script>

<style>

</style>
