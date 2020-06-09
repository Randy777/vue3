<template>
    <div>
      <h1>这是Second组件</h1>
      <router-link to="/">
        <button class="btn" @click="func">点击跳转</button>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "second.vue",
        methods:{
            func(){
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>
