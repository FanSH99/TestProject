<template>
  <div>
    <div class="row">
        <van-cell-group title="标题1">
            <van-cell title="左侧单元格" value="右侧内容" label="左侧副标题" size="18" icon="chat-o">

            </van-cell>
        </van-cell-group>
       
    </div>
    <div class="row">
        <p>以下为官网复制------------</p>
<van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
<p>卡片风格</p>
<van-cell-group inset>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>

    <p>单元格大小</p>
    <van-cell title="单元格" value="内容" size="large" />
    <van-cell title="单元格" value="内容" size="large" label="描述信息" />
    
    <van-cell title="单元格" icon="location-o" />
    <van-cell value="内容" />
    
    <p>展示箭头</p>
    <van-cell title="单元格" is-link />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    <p>页面导航</p>
    <van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
    <van-cell title="路由跳转" is-link to="index" />
    <p>分组标题</p>
    <van-cell-group title="分组1">
        <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <van-cell-group title="分组2">
        <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <p>使用插槽</p>
    <van-cell value="内容" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
            <span class="custom-title">单元格</span>
            <van-tag type="danger">标签</van-tag>
        </template>
    </van-cell>
    
    <van-cell title="单元格" icon="shop-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
            <van-icon name="search" class="search-icon" />
        </template>
    </van-cell>
    
    <p>垂直居中</p>
    <van-cell center title="单元格" value="内容" label="描述信息" />
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style>
.row{
    width:600px;
    margin:auto;
}

  .custom-title {
      margin-right: 4px;
      vertical-align: middle;
  }

  .search-icon {
      font-size: 16px;
      line-height: inherit;
  }
</style>