<template>
  <div id="app">
    <h1>这是First组件</h1>
    <router-link to="/first/login">login</router-link>
    <router-link to="/first/register">register</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "First",
        data() {
          return{
              ttt : '返回首页'
          }
        },
        methods: {
            func() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>
