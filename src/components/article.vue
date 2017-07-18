<template lang="html">
    <div class="markdown-body">
      <div class="articleContentView" v-html="compiledMarkdown"></div>
    </div>
</template>

<script>

var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});


var markdown = require('markdown-js');

export default {

  data:function () {
    return {
    }
  },
  created: function () {
    console.log(this.$route.params.article)
  },
  mounted: function () {
  },

  computed: {
    compiledMarkdown: function () {
      return marked(this.$route.params.article.content)
    }
  },

}
</script>
