<template>
   <div class="wrapper">
      <div class="scene">
         <div class="leftTopText">
            <div class="blueBlock"></div>
            <h5>A day <br />ON THE ISLAND</h5>
            <H1>AEGEAN SEA<br/>NIGHT SKY</H1>
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
      border: 1px solid black;
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

   .scene{
      @include size(700px, 500px, 15px);

      background: $sceneGradient;
      background-size: 100% 200%;
      box-shadow: 0 0 30px rgba(black, 0.3); //筆記：卡片陰影技巧 00 暈開30px
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

         .window{
            @include size(40px, 100px, 20px);
            margin-top: 40px;
            margin-left: 70px;
            @include flex();
            flex-direction: column;
            .circle{
               @include size(20px, 20px, 50%);
               margin: 4px;
               margin-left: 10px;
            }
         }
      }

      .house2{
         @include size(240px, 170px);
         right: 130px;
         .door{
            @include size(40px, 80px, 20px 20px 0 0 ); //筆記：border-radius 若要指定4個角的順序，則為：左上、右上、右下、左下。
            position: absolute;
            bottom: 0;
            left: 45px;
         }
      }

      .house3{
         @include size(320px, 300px);
         @include flex();

         .wall{
            flex:1;
            height: 100%;
            @include flex(center, flex-start);

            .window{
               @include size(24px, 50px, 12px 12px 0 0);
               margin-top: 30px;
            }

            &::before{
               content:'';
               display: block;
               position: absolute;
               width: 105%;
               height: 20px;
               background-color: pink;
               top: -20px;
               left:50%;
               transform: translate(-50%);
            }
            &:nth-child(1){ //選擇第1個wall
               background-color: red;
               flex: 10;
            }
            &:nth-child(2){ //選擇第1個wall
               background-color: rgb(225, 0, 255);
               flex: 14;
            }
            &:nth-child(3){ //選擇第1個wall
               background-color: rgb(0, 255, 21);
               flex: 10;
            }
         }

         .roof{
            @include halfCir(150px);
            position: absolute;
            top: -170px;
            .roofTop{
               @include halfCir(14px);
               @include abpos(50%, -14px);
               transform: translateX(-50%);
            }
         }

         .cross{
            @include size(4px , 30px);
            position: absolute;
            left:50%;
            transform: translateX(-50%);
            bottom: 10px;
            &::before{
               content:'';
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
</style>
