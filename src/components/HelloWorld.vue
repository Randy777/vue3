<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
<!--    将值与定义的属性进行绑定-->
    <input v-if="visible" :value="inputData"/>
    <p v-if="!visible">{{ inputData }}</p>
    <div>
    <button @click="clickBtn">{{TestBtn}}</button>
      <router-link to="/first">
        <button class="btn" @click="func">点击跳转</button>
      </router-link>
  </div>
    <div>
      <li v-for="item in list" :key="item.id">{{ item.value }} + 1</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome Zhang yi',
      inputData: 'This is a input',
      visible: true,
      TestBtn: '测试',
      list: [{
            id: '001',
            value: 'item-1'
        }, {
            id: '002',
            value: 'item-2'
        }, {
            id: '003',
            value: 'item-3'
        }, {
            id: '004',
            value: 'item-4'
        }, {
            id: '005',
            value: 'item-5'
      }]
    }
  },
    methods: {
      clickBtn(){
          this.visible = !this.visible;
          // alert('Hello,world')
      },
      func(){
          this.$router.push('/first');
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
