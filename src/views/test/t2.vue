<template>
  <div id="t2">
    <h1>{{value}}</h1>
    <h1>{{$store.state.st2.cc}}</h1>
    <h1>{{$store.state.st2.cname}}</h1>
    <h1>{{$store.state.st2.cvalue}}</h1>
    <div>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 't2',
    data(){
      return{
        value: 'T2ksnvs蓝色短裤佛山路上看到附魔书'

      }
    },

    computed:{
      count(){
        return this.$store.state.st2.add;
      }
    }
  }
</script>

<style scoped>

</style>
