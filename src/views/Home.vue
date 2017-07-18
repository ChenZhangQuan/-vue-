<template>
  <!-- <div>homeViewController+{{name}}</div> -->
  <div class="homeView">

      <zqmenu class="menuView"></zqmenu>

      <router-view class="routerView"></router-view>

  </div>
</template>

<script>

import zqmenu from "../components/menu.vue"
import zqblog from "../components/blog.vue"

  export default{
    data(){
      return{
        name:"viewController"
      }
    },
    components:{
      zqmenu,
      zqblog
    },
    methods:{

    },
    created:function () {
      // this.$router.push({ name: 'blog'})
    },
    mounted:function(){
      // this.$router.push({ name: 'blog'})
    }
  }


</script>

<style media="screen">
.homeView{
  width: 100%;
  position: absolute; left: 0; top: 0; right: 0; bottom: 0;
  margin: auto;    /* 有了这个就自动居中了 */
  display: flex;
  flex-direction: row;
  justify-content : center;
  /*align-items: center;*/
}
.menuView{
  width: 30%;
  /*flex-grow :2;*/

}

.routerView{
  width: 70%;
  margin-left: 10px;
  margin-right: 20px;

  /*flex-grow :2;*/

}

</style>
