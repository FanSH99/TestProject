<template>
    <div>
        <div>
            <van-button text="百度一下" url="https://www.baidu.com">百度一下</van-button>&ensp;
            <van-button type="primary" size="small" text="自定义按钮1" color="#185555" icon="fire-o" to="/about"></van-button>&ensp;
            <van-button type="info" loading-size="20" text="自定义按钮2" color="#185555" icon="chat-o" loading="true" loading-text="加载中..."></van-button>&ensp;
            <van-button type="primary"  color="#996666" text="自定义按钮3" icon="fire-o" to="/about"  >
                <template #icon>
                    <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                </template>
                <span>用户登录</span>
            </van-button>&ensp;
        </div>

        <hr>
        <p>以下为官网复制------------</p>
        <p>
            <van-button type="primary">主要按钮</van-button>&ensp;
            <van-button type="info">信息按钮</van-button>&ensp;
            <van-button type="default">默认按钮</van-button>&ensp;
            <van-button type="warning">警告按钮</van-button>&ensp;
            <van-button type="danger">危险按钮</van-button>&ensp;
            <van-button plain type="primary">朴素按钮</van-button>&ensp;
            <van-button plain type="info">朴素按钮</van-button>&ensp;
            <van-button plain hairline type="primary">细边框按钮</van-button>&ensp;
            <van-button plain hairline type="info">细边框按钮</van-button>&ensp;
            <van-button disabled type="primary">禁用状态</van-button>&ensp;
            <van-button disabled type="info">禁用状态</van-button>&ensp;
        </p>
        <p>
            <van-button loading type="primary" />&ensp;
            <van-button loading type="primary" loading-type="spinner" />&ensp;
            <van-button loading type="info" loading-text="加载中..." />&ensp;
            <van-button square type="primary">方形按钮</van-button>&ensp;
            <van-button round type="info" text="llll">圆形按钮</van-button>&ensp;
            <van-button icon="plus" type="primary" />&ensp;
            <van-button icon="plus" type="primary">按钮</van-button>&ensp;
            <van-button icon="https://img01.yzcdn.cn/vant/user-active.png" type="info">
                按钮
            </van-button>&ensp;
        </p>
        <p>
            <van-button type="primary" size="large">大号按钮</van-button>&ensp;
        </p>
        <p>
            <van-button type="primary" size="normal">普通按钮</van-button>&ensp;
            <van-button type="primary" size="small">小型按钮</van-button>&ensp;
            <van-button type="primary" size="mini">迷你按钮</van-button>&ensp;
        </p>
        <van-button type="primary" block>块级元素</van-button>&ensp;
        <p>
            <van-button color="#7232dd">单色按钮</van-button>&ensp;
            <van-button color="#7232dd" plain>单色按钮</van-button>&ensp;
            <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
                渐变色按钮
            </van-button>&ensp;
        </p>
    </div>
</template>


<script>
// @ is an alias to /src


export default {
    name: 'ButtonView',
    components: {

    }
}
</script>
<style>

</style>

<!--
    1. 先引入vant,可采取全局引入，引入后Vue.use(Vant)注册使用
    2.<van-button></van-button>即可使用按钮 标签中可以用text="文字信息"来显示按钮名字，默认样式大小为normal,样式为朴素（plain) 图标展示在左边，文字默认居中，颜色为黑色，当设置了按钮颜色则文字为白色，设置了朴素按钮则文字为设置的颜色。
    3.type=""可以用来设置图标样式 default是默认
    type="primary"为主要按钮，背景颜色为#07c160，偏绿色的;文字颜色是白色 
    type="info"为信息按钮，背景颜色是偏蓝色的
    type="warning"为警告按钮，被禁颜色偏橙色。
    type="danger"为危险按钮，背景颜色偏红色。
    当设置了color后，type类型设置的颜色便不起作用。
    当设置了plugin后，便没有背景颜色，color只作用于边框颜色和文字颜色
    4.默认尺寸是高44px，normal 可以用large(占满一行),small(padding值为16),mini(padding为)，
    另外也可以用size="20"等数字来设置尺寸。
    如果设置了加载样式，需要在 loading-size=""里面设置尺寸。
    5.默认没有设置文字的，需要自设置文字，text=""里面便是设置的文字信息。
    如果设置了加载样式，需要在loading-text=""中设置文字信息。
    如果插槽里面也有文字信息，则会显示插槽里面的文字信息。
    6.图标icon可以直接复制图标里面的名字，例如 icon="fire-o",
    如果插槽中也有图标会显示插槽中的图标。
    但是当设置了加载中则设置的icon不起作用，若想改图标需要在插槽中添加自定义图标。
    插槽设置图标需要添加名字#incn如下
     <template #icon>
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
     </template>
     7.loading="ture"开启加载状态，默认关闭false loading-text设置加载文字 loading-type设置加载颜色类型 loading-size设置大小
     squart="true"设置为方形按钮，默认关闭
     disabled=”true"设置禁用，默认关闭
     round=“true"设置为圆形按钮，默认关闭。
     hairline="true"设置使用0.5px边框，默认关闭
     plain="true"设置为朴素按钮，默认关闭
     block="true"设置为块状元素，占满一行，默认关闭。
     注意加载中开启后原先的文字不管用，需要重新设置
     8、
     to="" 跳转到那个路由，例如to="/about"
     url=""跳转到那个页面，例如url="https://www.baidu.com"可以跳转到百度页面。



 -->