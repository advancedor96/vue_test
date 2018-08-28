<template>
<div class="p5_wrapper">
  <div class="allRains">
    <div class="rain1"></div>
    <div class="rain2"></div>
    <div class="rain3"></div>
    <div class="rain4"></div>
    <div class="rain5"></div>
    <div class="rain6"></div>
    <div class="rain7"></div>
    <div class="rain8"></div>
    <div class="rain9"></div>
    <div class="rain10"></div>
    <div class="rain11"></div>
    <div class="rain12"></div>
    <div class="rain13"></div>
    <div class="rain14"></div>
    <div class="rain15"></div>
    <div class="rain16"></div>
    <div class="rain17"></div>
    <div class="rain18"></div>
    <div class="rain19"></div>
    <div class="rain20"></div>
    <div class="rain21"></div>
    <div class="rain22"></div>
    <div class="rain23"></div>
    <div class="rain24"></div>
    <div class="rain25"></div>
    <div class="rain26"></div>
    <div class="rain27"></div>
    <div class="rain28"></div>
    <div class="rain29"></div>
    <div class="rain30"></div>
    <div class="rain31"></div>
    <div class="rain32"></div>
    <div class="rain33"></div>
    <div class="rain34"></div>
    <div class="rain35"></div>
    <div class="rain36"></div>
    <div class="rain37"></div>
    <div class="rain38"></div>
    <div class="rain39"></div>
    <div class="rain40"></div>
    <div class="rain41"></div>
    <div class="rain42"></div>
    <div class="rain43"></div>
    <div class="rain44"></div>
    <div class="rain45"></div>
    <div class="rain46"></div>
    <div class="rain47"></div>
    <div class="rain48"></div>
    <div class="rain49"></div>
    <div class="rain50"></div>
    <div class="rain51"></div>
    <div class="rain52"></div>
    <div class="rain53"></div>
    <div class="rain54"></div>
    <div class="rain55"></div>
    <div class="rain56"></div>
    <div class="rain57"></div>
    <div class="rain58"></div>
    <div class="rain59"></div>
    <div class="rain60"></div>
    <div class="rain61"></div>
    <div class="rain62"></div>
    <div class="rain63"></div>
    <div class="rain64"></div>
    <div class="rain65"></div>
    <div class="rain66"></div>
    <div class="rain67"></div>
    <div class="rain68"></div>
    <div class="rain69"></div>
    <div class="rain70"></div>
    <div class="rain71"></div>
    <div class="rain72"></div>
    <div class="rain73"></div>
    <div class="rain74"></div>
    <div class="rain75"></div>
    <div class="rain76"></div>
    <div class="rain77"></div>
    <div class="rain78"></div>
    <div class="rain79"></div>
    <div class="rain80"></div>
    <div class="rain81"></div>
    <div class="rain82"></div>
    <div class="rain83"></div>
    <div class="rain84"></div>
    <div class="rain85"></div>
    <div class="rain86"></div>
    <div class="rain87"></div>
    <div class="rain88"></div>
    <div class="rain89"></div>
    <div class="rain90"></div>
    <div class="rain91"></div>
    <div class="rain92"></div>
    <div class="rain93"></div>
    <div class="rain94"></div>
    <div class="rain95"></div>
    <div class="rain96"></div>
    <div class="rain97"></div>
    <div class="rain98"></div>
    <div class="rain99"></div>
    <div class="rain100"></div>
  </div>
  <div class="ocean">
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods:{

  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@mixin size($w, $h:$w, $bdrs: 0){
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
.p5_wrapper{
  @include size(100%);
  overflow: hidden;
  .ocean{
    @include size(100%, 40%);
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, #1743d8 1%,#0a0506 100%);
    z-index: 0;
  }
}
@keyframes moving{
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(700px);
  }
}
.allRains{
  position: absolute;
  @include size(100%);
  left: 0;
  top: 0;
}
[class^='rain']{

  @include size(2px, 2px, 50%);
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  animation: moving 1s cubic-bezier(0.47, 0, 0.745, 0.715) infinite ;
  z-index: 1;

}
@for $i from 1 through 100{
  $little : $i %10;
  .rain#{$i}{
    left: random(99)+%;
    top: random(20)+%;
    animation-delay: -#{$i * 0.1}s;
  }
}


</style>
