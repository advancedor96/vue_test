<template>
   <div class="wrapper">
      P3
      
   </div>
</template>

<script>
export default {
  mounted() {
    let str = `<ul>
      <li>
        <h3>吳先生</h3>
        <p>我覺得不好用
          <span>2017/11/12</span>
        </p>
      </li>
    </ul>`

    let str2 = str.replace(/[\n\s]/g, '')
    console.log('移除n', str2);
    
    let result = str2.match(/<li><h3>(.*?)<\/h3><p>([^\s]*)<span>(.*?)<\/span><\/p><\/li>/g)
    console.log('r:', result)
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
