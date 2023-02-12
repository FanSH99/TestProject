<template>
	<view>
		详情页 {{id}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:""
			}
		},
		methods: {
			
		},
		onLoad(option){
			console.log(option)
			this.id  = option.id
		}
	}
</script>

<style>

</style>
