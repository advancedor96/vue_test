<template>
<div class="p4_wrapper">
  <h3 class="mouseText">({{x}}, {{y}})</h3>
  <div class="mouseSymbol" :style="{left: x + 'px', top: y + 'px'}"></div>
  <div class="mytargets" :class="{moving: isMoving}">
    <div class="t1" data-score="5" @click="hit(5)"></div>
    <div class="t2" data-score="4" @click="hit(4)"></div>
    <div class="t3" data-score="3" @click="hit(3)"></div>
    <div class="t4" data-score="2" @click="hit(2)"></div>
    <div class="t5" data-score="1" @click="hit(1)"></div>
  </div>
  <div class="infos">
    <div class="score">Score: {{ total }}</div>
    <span class="hint">重新開始：R, 變換模式：K</span>
  </div>
  <span class="spot" v-for="(spot, i) in spots" :key="i" :style="{left: spot.left + 'px', top: spot.top + 'px'}"></span>
</div>
</template>
<script>
export default {
  data() {
    return {
      total: 0,
      x:0,
      y:0,
      isMoving: false,
      spots:[]
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
    window.addEventListener('keyup', (e) => {
      if (e.key.toLowerCase() === 'k') {
        this.isMoving = !this.isMoving
      } 
    })
    window.addEventListener('mousemove', (e) => {
      this.x = e.clientX
      this.y = e.clientY
    })
    window.addEventListener('click', (e) => {
      this.spots.push({
        left: e.clientX,
        top: e.clientY
      })
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
  display: flex;
  align-items: center;
  justify-content: center;
  .spot{
    position: fixed;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(black, 0.3);
  }
  .mouseText{
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .mytargets{
    position: relative;
    @include size(500px);
    z-index: 0;

    @keyframes moving{
      0%{
        transform: translate(-200px);
      }
      100%{
        transform: translate(200px);
      }
    }
    &.moving{
      animation: moving 2s infinite alternate;
    }
  }
  .t1{
    @include size(100px);
    border-radius: 50%;
    @include poaCenter();
    z-index: 5;
    background-color: red;
  }
  .t2{
    @include size(200px);
    border-radius: 50%;
    @include poaCenter();
    z-index: 4;
    background-color: white;
  }
  .t3{
    @include size(300px);
    border-radius: 50%;
    @include poaCenter();
    z-index: 3;
    background-color: red;
  }
  .t4{
    @include size(400px);
    border-radius: 50%;
    @include poaCenter();
    z-index: 2;
    background-color:white;
  }
  .t5{
    @include size(500px);
    border-radius: 50%;
    @include poaCenter();
    z-index: 1;
    background-color:red;
    border: 20px solid white;
    box-shadow: 0 0 30px rgba(black, 0.4);
  }
  [class^='t']{
    transition: 0.3s;
    &:active{
      background-color: rgba(black, 0.5);
      // filter: brightness(50%);
      transition: 0s;
    }
    &:before{
      content: attr(data-score);
      // position: absolute;
      @include poaCenter();
      // left: 50%;
      top:15px;
    }
  }
  .infos{
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
  .score{
    font-size: 30px;
    font-weight: 500;
  }
  .mouseSymbol{
    position: fixed;
    width: 40px;
    height: 4px;
    background-color: black;
    transform: translate(-50%, -50%);
    z-index: 10;
    pointer-events: none;

    &:after{
      content:'';
      position: absolute;
      width: 40px;
      height: 4px;
      display: inline-block;
      background-color: black;
      z-index: 1;
      transform: rotate(90deg);
      
    }
  }
}
</style>
