<template lang="html">
  <div class="">

    <h1 class="blogTitleView">{{title}}</h1>

    <a class="blogItemView" v-for="article in articles">
      <h2 class="blogItemTitleView"  @click="articleClick(article)">
        {{article.title }}
      </h2>
      <div class="blogItemContentView">
        {{article.content }}
      </div>
    </a>

  </div>
</template>

<script>
export default {
  data:function () {
    return {
      title:"文章列表1",
      articles:[
        // {"title":"开发者所需要知道的 iOS 11 SDK 新特性","content":"content1"},
        // {"title":"再看关于 Storyboard 的一些争论","content":"content2"}
      ]
    }
  },

  created:function () {
    // console.log("created");
    this.fetchData();
  },
  methods:{
    articleClick : function (article) {
      this.$router.push({ name: 'article', params: {"article": article}})
    },
    fetchData : function () {
      var xmlhttp;
      if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
      }
      else{// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }

      var that = this;
      xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
          // console.log(xmlhttp.responseText);
          var articles = JSON.parse(xmlhttp.responseText);
          console.log(articles);
          that.articles = articles;
        }
      }


      xmlhttp.open("GET","http://localhost:7999/articles",true);
      xmlhttp.send();
    }
  },

}
</script>

<style lang="css">


.blogTitleView{
  margin-top: 50px;
}

.blogItemTitleView{
  margin-top: 30px;
  cursor: pointer;

}


.blogItemContentView{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: 20px;
  margin-top: 5px;
}



</style>
