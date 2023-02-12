<template>
  <div class="select">
    <div>
        <div class="title">
            配送方式
        </div>
        <div>
            <div class="song_name" v-for="(item,index) in songList" :key="index" @click="selectModel(item)" :style="{color:!item.is_solid?'#'+item.color:''}"><van-icon :name="item.is_solid?'eye-o':'success'" /> {{item.text}}</div>
        </div>
        <div class="attr_title">
                商家属性（可以多选）
        </div>
        <div class="attr_list">
            <div v-for="(item,index) in arrtList" :key="index" :class="{active:item.isSelect}" @click="changeAttr(index)">
                <van-icon name="success" v-show='item.isSelect'/>
                <van-tag plain :color="'#'+item.icon_color" v-show="!item.isSelect">{{item.icon_name}}</van-tag> {{item.name}}
            </div>
        </div>
    </div>
    <div class="btn">
        <div class="clear" @click="clear">
            清空
        </div>
        <div class="confirm" @click="confirm">
            确定 <span v-show="getSum!=0">({{getSum}})</span>
        </div>
    </div>
  </div>
</template>
<script>
import { getSongType,getShopAttr} from '@/api/cate';
export default {
  props:['latitude','longitude'],
  data(){
    return {
       songList:[],
       arrtList:[],
    //    用来存放当前选中配送方式
       modeList:[],
    //    用来存放当前选中的商家属性
       shopList:[],
       isRemove:false
    }
  },
  async created(){
    let data ={latitude:this.latitude,longitude:this.longitude};
    // 获取配送方式
    let res = await getSongType(data);
    this.songList = res.data
    // 获取商家属性列表
    let resAttr = await getShopAttr(data);
    this.arrtList = resAttr.data;
    this.arrtList.forEach(item=>{
        item.isSelect = false
    })
    console.log(this.arrtList)
  },
  methods:{
    changeAttr(index){
         
         this.arrtList[index].isSelect = !this.arrtList[index].isSelect
         this.arrtList = this.arrtList.concat([])
        //  判断当前点击的属性是否为选中状态
         if(this.arrtList[index].isSelect){
             this.shopList.push(this.arrtList[index])
         }else{
            let i = this.shopList.findIndex(item=>{
                return item.id === this.arrtList[index].id
            })
            if(i!==-1){
                this.shopList.splice(i,1)
            }
         }
    },
    selectModel(item){
        item.is_solid = !item.is_solid
        console.log(item.is_solid)
        // 判断当前配送模式是否为选中状态如为选中状态则添加到modeList
        if(!item.is_solid){
            this.modeList.push(item)
        }else{
            // 若未选中状态则需要将modeList中当前这一项删除
            let index = this.modeList.findIndex(value=>{
                return value.id ===item.id
            })
            if(index!=-1){
                this.modeList.splice(index,1)
            }
        }
    },
    clear(){
        this.modeList = [];
        this.shopList = []
        this.songList.forEach(item=>{
            item.is_solid = true
        })
        this.arrtList.forEach(item=>{
            item.isSelect = false;
        })
    },
    confirm(){
        this.$emit("sendidlist",this.modeList,this.shopList)
    }
  },
  computed:{
    getSum(){
        return this.modeList.length + this.shopList.length
    }
  }
}
</script>
<style lang="less" scoped>
.select{
    padding: 10px;
    .title{
        margin-bottom: 10px;
        color: #555;
        font-size: 14px;
    }
    .song_name{
        width: 100px;
            height: 32px;
            line-height: 32px;
        padding: 0px 5px;
        border: 1px solid #e4e4e4;
        font-size: 13px;
        color: #666;
    }
    .attr_title{
        font-size: 14px;
        color: #555;
        margin: 10px 0;
    }
    .attr_list{
        display: flex;
        flex-wrap: wrap;
        div{
            width: 100px;
            height: 32px;
            line-height: 32px;
            padding: 0px 7px;
            border: 1px solid #e4e4e4;
            margin-bottom: 10px;
            margin-right: 10px;
            font-size: 13px;
            color: #666;
        }
    }
}
.btn{
    display: flex;
    justify-content: space-between;
   margin-top: 5px;
    div{
        width: 48%;
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        text-align: center;
    }
    .clear{
        border: 1px solid #e4e4e4;
    }
    .confirm{
        background: #07c160;
        color: #fff;
    }
}
.active{
    color: #3190e8 !important;
}
</style>