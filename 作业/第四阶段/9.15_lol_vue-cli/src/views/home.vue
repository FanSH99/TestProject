<template id="home">
    <div>
        <div class="nav">
            <div class="navItem">
                <div v-for="(item,index) in navList" :key="index" :class="{active:active===index}"
                    @click="goNav(index)">
                    <span ref="navitem">{{item}}</span>
                </div>
            </div>
            <div class="line" :style="style" ref="line"></div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    data() {
        return {
            navList: ["首页", "购物车", "分类", "我的"],
            active: 0,
            style: {
                width: "",
                left: "",
            },
            navwidth: "",
        }
    },
    methods: {
        show() {
            let nav = document.querySelector(".nav");
            if (nav) {
                this.navwidth = nav.offsetWidth;
                let divshow = document.querySelector(".nav div.active span");
                let l = divshow.offsetLeft;
                let w = divshow.offsetWidth;
                this.style.left = l + 'px';
                this.style.width = w + 'px';
            }

        },

        goNav(index) {
            this.active = index;
            console.log(index);
            switch (index) {
                case 0:
                    this.$router.push({
                        path: "/"
                    });
                    break;
                case 1:
                    this.$router.push({
                        path: "/films/shoppingcar"
                    });
                    break;
                case 2:
                    this.$router.push({
                        path: "/films/classlist"
                    });
                    break;
                case 3:
                    this.$router.push({
                        path: "/films/mine"
                    });
                    break;
            }
        }
    },

    mounted() {
        this.show();
    },
    updated() {
        this.show();
    },
}
</script>
<style>
.nav {
             position: relative;
         }
    
         .nav .navItem {
             width: 100%;
             display: flex;
             justify-content: space-around;
             position: relative;
             padding: 5px 0;
             cursor: pointer;
             color: #666;
         }
    
         .nav .navItem div {
             width: 25%;
             text-align: center;
         }
    
         .nav .navItem.active {
             color: #777;
             font-weight: bold;
         }
    
         .line {
             position: absolute;
             width: 16px;
             height: 2px;
             bottom: 0;
             background: red;
             transition: left ease-in-out 0.3s;
         }
</style>