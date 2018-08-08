<template>
  <div class="hello">
    <router-link to="/1">Project 1</router-link>
    <router-link to="/2">Project 2</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        name: '',
        email:"",
        msg: 'Welcome to Your Vue.js App',
        showInit:false
      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.doit{
  transition: transform .1s;
}
.doit:hover{
  transform: translate(0, 100px);
  transition: transform 1s;
}
</style>
