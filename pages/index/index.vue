<template>
	<view class="container">
		<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" collection="test">
			<view v-if="error">{{error.message}}</view>
			<uni-list v-else>
				<uni-list-item showArrow v-for="(item,index) in data" @longpress.native="remove(item._id)" :key="_id" :title="item.name" :note="'今年'+item.age+'岁,来自'+item.address">
					<template v-slot:footer>
						<button type="default" @click.native="update(item)">修改</button>
					</template>
				</uni-list-item>
			</uni-list>
		</unicloud-db>
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<button @click="callcol">点击按钮</button>
		<uni-link :href="href" :text="href"></uni-link>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			//云对象是异步的
			async callcol(){
				const co1 = uniCloud.importObject("col")
				let res=await co1.say()
				uni.showModal({
					content: res.data,
					showCancel: false
				});
			},
			// 长按删除
			remove(id){
				this.$refs.udb.remove(id)
			},
			// 编辑
			update(it){
				uni.navigateTo({
					url: '../update/update?item='+JSON.stringify(it),
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
