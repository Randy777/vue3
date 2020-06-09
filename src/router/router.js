import Vue from 'vue' //导入App组件
import Router from 'vue-router' //导入vue-router包
import HelloWorld from '@/components/HelloWorld'
import First from '@/first/first'
import Second from '@/first/second'

//导入first的两个子组件
import login from "../sub/login";
import register from "../sub/register";

Vue.use(Router) //手动安装VueRouter
//创建路由对象
export default new Router({
  routes: [ //路由匹配规则
    {
      path: '/', //监听那个路由链接地址
      name: 'HelloWorld',
      component: HelloWorld,//表示如果路由是前面匹配的path，则展示component属性对应的那个组件
    }, {
      path: '/first',
      component: First,
      children: [
        {path: 'login' , component: login},
        {path: 'register' , component: register}
      ]
    },{
      path: '/second',
      component: Second
    }
  ]
})


