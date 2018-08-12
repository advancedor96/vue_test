<template>
   <div class="wrapper">
      <label for="switch">
         <div class="remind">Click to Switch Day/Night</div>
         <input type="checkbox" id='switch'>
         <div class="scene">
            <div class="sun"></div>
            <div class="moon"></div>
            <div class="allstars">
               <div class="star1"></div>
               <div class="star2"></div>
               <div class="star3"></div>
               <div class="star4"></div>
               <div class="star5"></div>
               <div class="star6"></div>
               <div class="star7"></div>
               <div class="star8"></div>
               <div class="star9"></div>
               <div class="star10"></div>
               <div class="star11"></div>
               <div class="star12"></div>
               <div class="star13"></div>
               <div class="star14"></div>
               <div class="star15"></div>
               <div class="star16"></div>
               <div class="star17"></div>
               <div class="star18"></div>
               <div class="star19"></div>
               <div class="star20"></div>
               <div class="star21"></div>
               <div class="star22"></div>
               <div class="star23"></div>
               <div class="star24"></div>
               <div class="star25"></div>
               <div class="star26"></div>
               <div class="star27"></div>
               <div class="star28"></div>
               <div class="star29"></div>
               <div class="star30"></div>
            </div>
            <div class="leftTopText">
               <div class="blueBlock"></div>
               <h5>A day <br />ON THE ISLAND</h5>
               <h1>AEGEAN SEA<br/>
                  <span class="nightText"> NIGHT SKY</span>
                  <span class="dayText"> Day SKY</span>
                 
               </h1>
               <p>動態互動<br />網頁特效入門</p>
            </div>

            <div class="building">
               <div class="house1">
                  <div class="window">
                     <div class="circle"></div>
                     <div class="circle"></div>
                     <div class="circle"></div>
                  </div>
               </div>
               <div class="house2">
                  <div class="door"></div>
               </div>
               <div class="house3">
                  <div class="wall">
                     <div class="window"></div>
                  </div>
                  <div class="wall">
                     <div class="window"></div>
                  </div>
                  <div class="wall">
                     <div class="window"></div>
                  </div>
                  <div class="roof">
                     <div class="roofTop">
                        <div class="cross"></div>
                     </div>
                  </div>
               </div>

            </div>
         </div>


      </label>
      
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');
   *, *::before, *::after{ //筆記：如果此專案使用大量的before, after，那就在這裡設
      font-family: 'Playfair Display', '微軟正黑體';
      position: relative;  //筆記：因為這個專案太多要定位了，所以設全部都relative，讓每個absolute定位都會尋找上一層來做相對定位
      // border: 1px solid black;
   }
   
   //指定顏色變數
   $colorBlueRoofLight: #6fc5ff;
   $colorBlueRoofDark: #0058ff;

   $colorGreyLight: #fafaf5;
   $colorGreyNormal: #e3e2cf;
   $colorGreyDark: #bebdaf;
   $colorBackground: #2C2F36;

   $colorShadowBlue: #7cb1ff;
   $colorShadowBlueLight: #8dc9fc;

   $colorWindowGrey: #534d4d;

   $roofGradient: linear-gradient(150deg , $colorBlueRoofLight, $colorBlueRoofDark);
   $sceneGradient: linear-gradient(#1D2B49, #1A45A0, #91cdff, #fff);

   @mixin size($w, $h:$w, $bdrs:0){
      width: $w;
      height: $h;
      border-radius: $bdrs;
   }
   @mixin flex($j: center, $a: center){
      display: flex;
      justify-content: $j;
      align-items: $a;
   }

   @mixin abpos($l: initial, $t: initial){
      position: absolute;
      left: $l;
      top: $t;
   }

   @mixin halfCir($r){
      @include size($r*2, $r, $r $r 0 0)
   }
   
   .wrapper{
      @include size(100%);
      @include flex();
      background-color: $colorBackground;
      color: white;
   }




   input:checked +.block{
      transform: translate(300px);
   }
   .allstars{
      @include abpos(0, 0);
      @include size(100%);

      [class^='star']{
         @include size(3px, 3px, 50%);
         background-color: white;
         animation: falling 2s infinite;
      }

      @keyframes falling {
         0%, 100%{
            opacity: 0;
         }
         70%{
            opacity: 1;
         }
         0%{
            transform: translate(100px, 0);
         }
         100%{
            transform: translate(0, 200px);
         }

      }
      @for $i from 1 through 30{
         $posX : random(100)*1%;
         $posY : random(80)*(-1%) + 50%;
         .star#{$i}{
            left: $posX;
            top:$posY;
            animation-delay: $i*(-0.1s)
         }

      }
   }
   .scene{
      @include size(700px, 500px, 15px);
      cursor: pointer;
      background: $sceneGradient;
      background-size: 100% 200%;
      box-shadow: 0 0 30px rgba(black, 0.3); //筆記：卡片陰影技巧 00 暈開30px
      overflow: hidden;
      .moon{
         @include size(50px, 50px, 50%);
         @include abpos(300px, 100px);
         // background-color: white;

         box-shadow: inset 10px -10px rgba(255,255,255,0.9);
      }
      .sun{
         @include size(50px, 50px, 50%);
         @include abpos(300px, 400px);
         background-color: yellow;
         opacity: 0;
         
      }
      .leftTopText{

         margin-left: 30px;
         margin-top: 30px;
         h1{
            font-size: 36px;
            letter-spacing: 3px;
            margin-top: 0;
            font-weight: 300;
         }
         h5{
            font-size: 14px;
            opacity: 0.6;
            letter-spacing: 1px;
            margin-bottom: 0;
            font-weight: 300; //筆記：因為白色的字會有擴張效應，所以字粗先設為細一點。
         }
         p{
            font-size: 14px;
            line-height: 24px;
         }
         .blueBlock{
            @include size(20px, 25px);
            background-color: $colorShadowBlue;
         }
         .nightText{
            display: block;
         }
         .dayText{
            display: none;
         }
      }

      .building{
         position: absolute;
         right: 0;
         bottom: 0;
         transform: scale(0.95);
      }
      [class^="house"]{ //筆記：選擇「class屬性的是house開頭」的所有元素。 
         // background-color: pink;
         position: absolute;
         bottom: 0;
         right: 0;
      }
      .house1{
         @include size(180px, 200px);
         background-color:$colorGreyLight;
         z-index: 2;
         box-shadow: inset -50px 0 $colorGreyNormal;

         .window{
            @include size(40px, 100px, 20px);
            margin-top: 40px;
            margin-left: 70px;
            @include flex();
            flex-direction: column;
            background-color: $colorGreyNormal;
            box-shadow: inset 8px 5px $colorGreyDark;
            .circle{
               @include size(20px, 20px, 50%);
               margin: 4px;
               margin-left: 10px;
               background-color: $colorWindowGrey;
            }
         }
      }

      .house2{
         z-index: 3;
         @include size(240px, 170px);
         right: 130px;
         background-color: $colorGreyLight;
         box-shadow: inset 0 15px $colorShadowBlueLight, inset -72px 0px $colorGreyNormal;
         .door{
            @include size(40px, 80px, 20px 20px 0 0 ); //筆記：border-radius 若要指定4個角的順序，則為：左上、右上、右下、左下。
            position: absolute;
            bottom: 0;
            left: 45px;
            background-color: $colorWindowGrey;
            box-shadow: inset 10px 2px $colorShadowBlue;
         }
      }

      .house3{
         @include size(320px, 300px);
         @include flex();
         z-index: 1;
         background-color: $colorGreyLight;
         .wall{
            flex:1;
            height: 100%;
            @include flex(center, flex-start);

            .window{
               @include size(24px, 50px, 12px 12px 0 0);
               margin-top: 30px;
               background-color: $colorBackground;
            }

            &::before{
               content:'';
               display: block;
               position: absolute;
               width: 105%;
               height: 20px;
               background-color: inherit;
               box-shadow: 0px 0px 10px rgba(#000,0.1);
               top: -20px;
               left:50%;
               transform: translate(-50%);
            }
            &:nth-child(1){ //選擇第1個wall
               background-color: $colorGreyLight;
               flex: 10;
               .window{
                  box-shadow: inset 8px 0 $colorShadowBlue;
               }
            }
            &:nth-child(2){ //選擇第1個wall
               background-color: $colorGreyNormal;
               flex: 14;
               .window{
                  box-shadow: inset 0px 0 $colorShadowBlue;
               }
            }
            &:nth-child(3){ //選擇第1個wall
               background-color: $colorGreyDark;
               flex: 10;
               .window{
                  box-shadow: inset -8px 0 $colorShadowBlue;
               }
            }
         }

         .roof{
            @include halfCir(150px);
            position: absolute;
            top: -170px;
             background: $roofGradient;
            .roofTop{
               @include halfCir(14px);
               @include abpos(50%, -14px);
               transform: translateX(-50%);
               background-color: #fff;
            }
         }

         .cross{
            @include size(4px , 30px);
            position: absolute;
            left:50%;
            transform: translateX(-50%);
            bottom: 10px;
            background-color: #fff;
            &::before{
               content:'';
               background-color: #fff;
               display: block;
               @include size(30px , 4px);
               position: absolute;
               left:50%;
               transform: translateX(-50%);
               bottom: 13px; // 筆記 before 和after使用絕對定位時，都是相對於.cross裡。因為它是在.cross 裡面

            }
         }
      }
   }


.remind{
  opacity: 0.2;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.scene, .moon, .sun, .building, .leftTopText>*{
   transition: 1s;
}
input:checked+.scene{
   background-position: 0 100%;
   .allstars{
      opacity: 0;
   }
   .leftTopText{
      color: #222;
   }
   .blueBlock{
      background-color: white;
   }
   .moon{
      top: -100px;
      opacity: 0;
   }
   .sun{
      top: 100px;
      opacity: 1;
   }
   .nightText{
      display: none;
   }
   .dayText{
      display: block;
   }
   .building{
      filter: brightness(110%)
   }
}
#switch{
   display: none
}
</style>
