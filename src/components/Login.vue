<template>
  <div class="hello">
    <v-form >
      <v-text-field v-model="name"  :counter="10" label="Name" required></v-text-field>
      <v-text-field v-model="email"  label="E-mail" required></v-text-field>
      <v-btn color="green">Submit</v-btn>
    </v-form>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email:"",
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
