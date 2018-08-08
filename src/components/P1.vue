<template>
<div class="container">
   <div class="scene">
         <h1 class="title">Where is My Cake!!
         <br>
         <span class="question">Did you see it?</span>
         </h1>
         <div class="person">
         <div class="message">Un..I Didn't eat it...</div>
         <div class="hairs">
            <div class="hair1"></div>
            <div class="hair2"></div>
            <div class="hair3"></div>
         </div>
         <div class="body">
            <div class="eyes">
               <div class="eye">
               <div class="eyeball"></div>
               </div>
               <div class="eye">
               <div class="eyeball"></div>
               </div>
            </div>
            <div class="mouth">
               <div class="food"></div>
            </div>
         </div>
         </div>
      </div>  
</div>
 

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$colorBlue: #307BE1;
$colorDeepBlue: #2F4A6E;
$colorYellow: #FFC12C;
$colorOrange: #F38A0C;
$colorShadow: rgba(black, 0.1);
$shadowInset: inset -10px -10px 0px $colorShadow;

*{
  position: relative;
}
@mixin flexCenter{
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin size($w, $h:$w){
  width: $w;
  height: $h;
}
@mixin bdrsRect($w, $h, $bdrs:$h/2){
  @include size($w, $h);
  border-radius: $bdrs;
}
@mixin abPos($left, $top){
  position: absolute;
  left:$left;
  top: $top;
}

.container{
   @include size(100%);
   @include flexCenter();
}
.scene{
  @include size(600px, 500px);
  @include flexCenter();
  cursor: pointer;
  background-color: $colorBlue;

  .title{
    @include abPos(20px, 20px);

    font-size: 50px;
    margin: 0;
    color: white;
    opacity: 0;
    .question{
      font-size: 30px;
      color:orange;
      display: none;
    }
  }
}
.person{
  .hairs{
    position: relative;
    z-index: 5;
    .hair1{
      @include bdrsRect(150px ,80px);
      background-color: white;
      box-shadow: $shadowInset;
      z-index: 1;
      margin-left: 10px;
    }
    .hair2{
      @include bdrsRect(150px ,60px);
      background-color: white;
      box-shadow: $shadowInset;
      z-index: 1;
      margin-left: 50px;
      margin-top: -45px;
    }
    .hair3{
      @include bdrsRect(150px ,70px);
      background-color: white;
      box-shadow: $shadowInset;
      z-index: 1;
      margin-left: 5px;
      margin-top: -45px;
    }
  }; //hairs

  .body{
    @include bdrsRect(210px, 120px,40px);
    margin-top: -40px;
    padding-top: 50px;
    background-color: $colorYellow;
    box-shadow: $shadowInset;
  }
  .eyes{
    .eye{
      display: inline-block;
      @include bdrsRect(50px, 25px );
      background-color: #fff;
      margin-right: 5px;
      margin-left: 15px;
    }
    .eyeball{
      @include bdrsRect(25px, 25px);
      background-color: $colorDeepBlue;
    }
  }

  .mouth{
      @include bdrsRect(70px, 25px);
      background-color: $colorOrange;
      margin-top: 15px;
      margin-left: 70px;
    .food{
      @include bdrsRect(12px, 12px);
      background-color: $colorOrange;
      transform: translateX(-40px);
    }
  }
  .message{
    font-size: 20px;
    color:white;
    @include abPos(-200px, 50px);
    opacity: 0;
  }
}
.scene{
  .title{
    transition: 0.5s;
  }
}
.person{
  transition: .5s;
  .message{
    transition: opacity .5s 1s;
  }
  .body{
    transition: .5s, background-color 2s 1s;

  }
  *{
    transition: .5s;

  }
}

.scene:hover{
  .person{
    margin-top: 50px;
    .body{
      box-shadow: $shadowInset, 30px 10px $colorShadow;
    }
    &:hover{
      .body{
        box-shadow: $shadowInset,-30px 10px $colorShadow;
      }
      .body{
        background-color: orangered;
      }
      .message{
        opacity: 1;
      }
      transform: translateX(40px);
      .hairs{
        .hair3{
          margin-left: 0;
        }
        // transform: translateX(10px);
      }
      .eye{
        transform: translateX(20px);
        .eyeball{
          transform: translateX(25px);

        }
      }
      .mouth{
        transform: translateX(20px);
      }
    }
  }

  .title{
    opacity: 1;
  }
}

.scene:active{
  .question{
    display: block;
  }
  .person{
    transform: scale(0.9);
    .hairs{
      transform: translateY(-100px);
    }
  }
}
</style>
