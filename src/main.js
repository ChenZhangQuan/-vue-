// const Vue = require('vue');
// const VueRouter = require('vue-router');
// const App = require('./app.vue');
// Vue.use(VueRouter);
// const router = new VueRouter(require('./router'))
// new Vue({
//     el: '#app',
//     router: router,
//     render: h => h(App)
//     // render :function (createElement){
//     //   return createElement(app);
//     // }
// })


// import Vue from 'vue'
// import routes from './router'
//
// const app = new Vue({
//   el: '#app',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       console.log("this.currentRoute:" +this.currentRoute);
//       const matchingView = routes[this.currentRoute]
//       return matchingView
//         ? require('./views/' + matchingView + '.vue')
//         : require('./views/404.vue')
//     }
//   },
//   render (h) {
//     return h(this.ViewComponent)
//     // return h(require('./views/Home.vue'))
//   }
// })
//
//
//
// window.addEventListener('popstate', () => {
//   app.currentRoute = window.location.pathname
// })

import Vue from 'vue'
import VueRouter from 'vue-router'

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 也可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
const home = require('./views/Home.vue')
const article = require('./components/article.vue')
const blog = require('./components/blog.vue')
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。


const routes = [
    { path: '/article', name:'article', component: article},
    { path: '/blog', name:'blog', component: blog }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})


// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,

  render (h) {
    return h(home)
  }
}).$mount('#app')

// var marked = require('marked');
// marked.setOptions({
//   renderer: new marked.Renderer(),
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   sanitize: true,
//   smartLists: true,
//   smartypants: false
// });
// console.log(marked('I am using __markdown__.'));

// new Vue({
//   el: '#editor',
//   data: {
//     input: '# hello'
//   },
//   computed: {
//     compiledMarkdown: function () {
//       console.log(marked(this.input));
//       return marked(this.input)
//     }
//   },
//   methods: {
//     update: function (e) {
//       this.input = e.target.value
//     },
//     submit:function (e) {
//       console.log(this.input);
//     }
//   }
// })
