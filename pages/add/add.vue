<template>
	<view>
		<uni-easyinput  v-model="item.name" placeholder="name" />
		<uni-easyinput  v-model="item.age" placeholder="age" />
		<uni-easyinput  v-model="item.address" placeholder="address" />
		<button type="default" @click="add">新增</button>
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
		methods: {
			add(){
				const db = uniCloud.database();
				db.collection('test').add(this.item).then(e=>{console.log(e)})
			}
		}
	}
</script>

<style>

</style>
