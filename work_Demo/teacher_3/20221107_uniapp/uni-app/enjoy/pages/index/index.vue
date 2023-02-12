<template>
    <view class="">
        <view class="skeleton" v-if="loading">
            <skeleton />     
        </view>
        <view class="content" v-else>
        	<view class="bg">
                <view class="search">
                    <input type="text" name="" id=""  placeholder="搜索">
                </view>
        	    
                <myswiper :bannerList="bannerList"></myswiper>
        	</view>
            <view class="menus">
                  <u-grid
                                :border="false"
                                col="5"
                        >
                            <u-grid-item
                                    v-for="(item,index) in bannerList.menus"
                                    :key="index"
                                    class="menusItem"
                            >
                               <u--image :showLoading="true" :src="item.pic" width="40px" height="40px" ></u--image>
                                <text class="grid-text">{{item.name}}</text>
                            </u-grid-item>
                        </u-grid>
            </view>
            <view class="goodsList">
                <goods v-for="(item,index) in topList" :key="index" :item="item"></goods>
            </view>
        </view>
    </view>
	
</template>

<script>
import myswiper from '../../components/home/myswiper.vue';
import goods from '../../components/home/goods.vue';
import skeleton from '../../components/home/skeleton.vue';
import {getBannerList,getTopList} from '../../api/home.js'
	export default {
		data() {
			return {
				bannerList:[],
                topList:[],
                loading:true,
			}
		},
		async onLoad() {
            let res=await getBannerList();
            // console.log(res);
            this.bannerList=res.data.data;
            let res2=await getTopList();
            // console.log(res2)
            this.topList=res2.data.data;
            this.loading=false;
            
		},
		methods: {

		},
        components:{
            myswiper,
            goods,
            skeleton,
        }
	}
</script>

<style scoped>

	.content{
        width:100%;
       
    }
    .bg{
        width:100%;
       height:400rpx;
        background: -webkit-linear-gradient(270deg,#e93323,#f5f5f5);
         padding:10rpx 0;
    }
    .search{
        width:95%;
        margin: 10rpx auto;
        height:60rpx;
        border-radius: 30rpx;
        background-color: #fff;
        text-align: center;
        font-size: 30rpx;
        color:#919191;
        line-height: 60rpx;
    }
    
    .menus{
        padding:0 10rpx;
        font-size: 13px;
    }
   .u-grid-item{
       margin:10rpx 0;
   }
    .goodsList{
        width:95%;
        margin:20rpx auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
