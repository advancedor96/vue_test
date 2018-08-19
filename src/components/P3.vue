<template>
  <div class="p3_wrapper">
    <router-link to="/" class="goHome">回首頁</router-link>
    <div class="pageLoading" :class="{complete: isCompleted}" :style="disapear">
      <div class="monster">
        <div class="eye">
          <div class="eyeball"></div>
        </div>
        <div class="mouth"></div>
      </div>
      <div class="progressBar">
        <div class="bar" :style="{width: bar_width + '%'}"></div>
      </div>
    </div>


    <div>
      <h2 class="monsterText">你好啊</h2>
      <h3 class="opText">準備來吃你</h3>
    </div>
    <div class="monster">
      <div class="eye">
        <div class="eyeball"></div>
      </div>
      <div class="mouth"></div>
    </div>

  </div>
</template>
<script>
export default {
  mounted() {
    this.timer = setInterval(this.goUp, 30)
  },
  data () {
    return {
      bar_width: 0,
      isCompleted: false,
      timer: null,
      disapear: {}
    }
  },
  methods:{
    goUp() {
      this.bar_width += 1
      if (this.bar_width > 100) {
        this.isCompleted = true
        clearInterval(this.timer)
        setTimeout(() => {
          this.disapear = {display: 'none'}
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$colorOrange: #E55A54;
$colorBlue: #0C4475;
@mixin size($w, $h:$w){
  width: $w;
  height: $h;
}
@mixin flexCenter(){
  display: flex;
  justify-content: center;
  align-items: center;
}
h2, h3{
  margin: 0;
}
.p3_wrapper>.pageLoading{
  position: fixed;
  top:0;
  left:0;
  @include size(100%);
  background-color: $colorBlue;
  z-index: 1;
}
.pageLoading{
  @include flexCenter();
  flex-direction: column;
  .progressBar{
    @include size(200px, 20px);
    background-color: #fff;
    border-radius: 20px;
    margin-top: 50px;
    overflow: hidden;
    .bar{
      background-color: $colorOrange;
      @include size(0%, 100%);
    }
  }
  &.complete{
    .monster{
      transform: rotate(360deg) scale(0.01);
      transition: .5s;
    }
    opacity: 0;
    transition: .5s .5s;
  }
}

.p3_wrapper{
  @include size(100%);
  @include flexCenter();
  background-color: $colorOrange;
  .monsterText{
    margin-right: 80px;
  }
  .monster{
    @include size(110px);
    background-color: $colorOrange;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(black, 0.2);
    @include flexCenter();
    flex-direction: column;
    position: relative;
    cursor: pointer;

    @keyframes jumping{
      0%,50%{
        top: 0;
        box-shadow: 0 10px 30px rgba(black, 0.2);
      }

      100%{
        top: -50px;
        box-shadow: 0 120px 60px rgba(black, 0.2);
      }
    }
    animation: jumping 0.8s infinite alternate;
  }
  .eye{
    @include size(40%);
    background-color: #fff;
    border-radius: 50%;
    @include flexCenter();
    .eyeball{
      @include size(60%);
      border-radius: 50%;
      background-color: black;

      @keyframes eyemove {
        0%, 10%{
          transform: translateX(30%)
        }
        90%, 100%{
          transform: translateX(-30%)
        }
      }
      animation: eyemove 1s infinite alternate;
      
    }
  }
  .mouth{
    @include size(40%, 20px);
    background-color: #fff;
    border-radius: 20px;
    margin-top: 14px;
  }
}


</style>
