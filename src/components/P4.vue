<template>
<div class="p4_wrapper">
  <h3 class="mouseText">({{x}}, {{y}})</h3>
  <div class="mouseSymbol"></div>
  <div class="targets">
    <div class="t1" data-score="5" @click="hit(5)"></div>
    <div class="t2" data-score="4" @click="hit(4)"></div>
    <div class="t3" data-score="3" @click="hit(3)"></div>
    <div class="t4" data-score="2" @click="hit(2)"></div>
    <div class="t5" data-score="1" @click="hit(1)"></div>
  </div>
  <div class="score">Score: {{ total }}</div>
  <span>重新開始：R, 變換模式：K</span>
</div>
</template>
<script>
export default {
  data() {
    return {
      total: 0,
      x:0,
      y:0
    }
  },
  methods:{
    hit(score) {
      this.total += score
    },
    handleKeyup(e) {
      console.log('e:', e)
    },
    resetGame() {
      this.total = 0
    }
  },
  mounted() {
    window.addEventListener('keyup', (e) => {
      if (e.key.toLowerCase() === 'r') {
        this.resetGame()
      } else if (e.key.toLowerCase() === 'k') {
        console.log('is k')
      }
    })
    window.addEventListener('mousemove', (e) => {
      this.x = e.clientX
      this.y = e.clientY
    })
  }
}
</script>

<style lang="scss" scoped>
@mixin size($w, $h:$w, $bdrs: none){
  width: $w;
  height: $h;
  border-radius: $bdrs;
}
@mixin poaCenter(){
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.p4_wrapper{
  @include size(100%);  
  .targets{
    position: relative;
    @include size(300px);
    z-index: 0;
  }
  .t1{
    @include size(20px);
    border-radius: 50%;
    @include poaCenter();
    z-index: 5;
    background-color: red;
  }
  .t2{
    @include size(70px);
    border-radius: 50%;
    @include poaCenter();
    z-index: 4;
    background-color: white;
  }
  .t3{
    @include size(120px);
    border-radius: 50%;
    @include poaCenter();
    z-index: 3;
    background-color: red;
  }
  .t4{
    @include size(170px);
    border-radius: 50%;
    @include poaCenter();
    z-index: 2;
    background-color:white;
  }
  .t5{
    @include size(220px);
    border-radius: 50%;
    @include poaCenter();
    z-index: 1;
    background-color:red;
  }
  [class^='t']{
    &:active{
      background-color: #fff;
      // filter: brightness(50%);
    }
    &:before{
      content: attr(data-score);
      position: absolute;
      left: 50%;
      top:3px;
    }
  }
  .score{
    font-size: 30px;
    font-weight: 500;
  }
  .mouseSymbol{
    width: 30px;
    height: 3px;
    background-color: black;
    &:before{
      content:'';
      width: 30px;
      height: 3px;
      display: inline-block;
      background-color: black;
      transform: rotate(90deg) translateX(-13px);
      
    }
  }
}
</style>
