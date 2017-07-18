<template lang="html">
  <div class="menuBackgroundView">
    <div class="menuContentView">

      <!-- <img class="menuAvatarView" src="../images/avatar.jpg"> -->
      <h1 class="menuTitleLabel">SillyGe'Blog</h1>
      <span class="menuSubtitleLabel"></span>
      <div class='menuIntroduce'>iOS博客</div>
      <br>
      <div class='menuIntroduce'>一个记录点滴的空间</div>
      <br>
      <router-link to="/blog">/文章列表</router-link>
    </div>
  </div>

</template>
<script type="text/javascript">

  module.exports = {
    data:function () {
      return{
        greeting:'menu'
      }
    },
    methods : {

    }
  }

</script>

<style>
  body,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div,dl,dt,dd,input{
    margin: 0;
    padding: 0;
    text-decoration:none;
    color: black;
  }

  .menuBackgroundView{
    /*background:url("../images/background.jpg") no-repeat bottom;*/
    /*background-size:cover;*/
    /*width:1080px*/
    display: flex;
    flex-direction: row;
    justify-content :center;
    align-items:center;
  }

  .menuContentView{
    /*width:474px;*/
    display: flex;
    flex-direction: column;
    align-items:center;
    /*align-self:center;*/
    margin-left: 15px;
    margin-right: 15px;
    /*color: white;*/
  }

  .menuAvatarView{
    width: 80px;
    height: 80px;
    /*border: 2px solid red;*/
    border-radius: 50%;
  }

  .menuTitleLabel{
    margin-top: 20px;
    font-size: 50px;
    text-align: center;
  }

  .menuSubtitleLabel{
    font-size: 16px;
  }

  .menuIntroduce{
    margin-top: 10px;
    text-align: center;
    width: 100%;
  }

</style>
