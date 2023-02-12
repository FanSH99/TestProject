<template>
	<view class="content">
		<view class="msg" v-color='"red"'>
			<!-- 数据绑定 -->
			{{msg|getStr(1234)}}
		</view>
		<!-- 指令 -->
		<view v-text="text"></view>
		<view class="" v-html='html'></view>
		<!-- v-bind(:) 绑定属性 -->
		<image :src="src" mode="widthFix"></image>
		<button @click="clickMe">绑定事件</button>
		<input type="text" placeholder="请输入内容" v-model='msg' />
		<view>
			{{num}}
		</view>
		<button @click="add(5)">add</button>
		<!-- key 表示当前节点中的唯一表示 -->
		<view v-for="(item,index) in list" :key="index">
			{{item}}
		</view>
		<view>
			<view v-for="(item,index) in user" :key="index">
				{{item.name}} ------ {{item.age}}
			</view>
		</view>
		<view v-color='"blue"'>
			获取总价：{{getSum}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: "vue2基础语法",
				text: "哈哈哈哈",
				html: "<h1>嘿嘿嘿</h1>",
				src: "https://api.java.crmeb.net/crmebimage/public/content/2022/08/04/0f78716213f64bfa83f191d51a832cbf73f6axavoy.jpg",
				num: 0,
				list: [0, 1, 2, 3, 45, 3],
				user: [{
					name: "张三",
					age: 18
				}, {
					name: "李四",
					age: 20
				}],
				peple:{
					name:"小红",
					age:18
				},
				price:10
			}
		},
		onLoad() {

		},
		methods: {
			clickMe() {
				console.log("你点我了")
			},
			add(n) {
				console.log(this)
				this.num += n
				this.peple.age ++
			}
		},
		watch:{
			num(newval,oldVal){
				console.log(newval,oldVal)
			},
			peple:{
				handler(newVal){
					console.log("我发生改变了",newVal)
				},
				// 是否立即之行函数
				immediate:true,
				// 是否开启深度监听可以用来监听对象
				deep:true
			}
		},
		computed:{
			// 1.必须要有return值 2. 当前依赖的属性发生改变时会自动调用 3.使用方式与data中属性使用方式一样
			getSum(){
					return this.price * this.num
			}
		},
		filters:{
			getStr(text,num){
					return text+num
			}
		},
		//自定义指令
		directives:{
			color:{
				inserted(el,data){
					el.style.color = data.value
				}
			}
		}
	}
</script>

<style>
	image {
		width: 100%;
	}
</style>


<!-- 
什么是跨域？
受浏览器同源策略的影响域名协议端口三者只要又一个不一样那么就会存在跨域？
1. jsop get
2. script 脚本跨域
3. 反向代理跨域
4. 后端corse 跨域
 -->