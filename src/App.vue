<template>
  <div id="app">
    <router-view>
    </router-view>

  </div>
</template>

<script>
export default {
  name: 'App'

}

</script>

<style lang="scss">

@mixin size($w, $h:$w){
  width: $w;
  height: $h;
}

html, body, #app{
  @include size(100%);
  background-color: #fff;
  margin: 0;
}
</style>
