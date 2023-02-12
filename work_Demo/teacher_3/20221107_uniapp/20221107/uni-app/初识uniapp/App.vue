<script>
	export default {
        // onLaunch 初始化触发
		onLaunch: function() {
			console.log('App Launch')
		},
        //onShow启动或者从后台进入前台显示
		onShow: function() {
			console.log('App Show')
		},
        // 从前台进入后台显示
		onHide: function() {
			console.log('App Hide')
		},
        // onError出错时触发
        onError:function(){
            console.log("App error")
        },
        // 对nvue页面发送的数据进行监听
        onUniNViewMessage(){
            
        },
        // 对未处理的Promise拒绝事件监听函数
        onUnhandledRejection(){
            
        },
        // 监听主体变化
        onThemeChange(){
            
        },
        // 页面不存在即找不到时触发
        onPageNotFound(){
            
        }
	}
</script>

<style>
	/*每个页面公共css */
</style>

<!-- 
uniapp中的app.vue中不能写template模板
 可以写应用声明周期，
 onLaunch,onShow
 -->