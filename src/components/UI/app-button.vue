<template>
   <button
       :class="{
         black:type==1 ,
         blue:type==2,
         red:type==3,
         tra:type==4,
         [align]:align
       }"
   >
     {{text}}
   </button>
</template>

<script>
export default {
   props:{
     text:{
       type:String,
       default:null
     },
     type:{
       type:Number,
       default: 0   // 1 - черная | 2 - голубая | 3 - красная | 4 - прозрачная
     },
     align:{
       type:String,
       default:null
     }
   }
};
</script>

<style scoped>
button{
  border: 0px ;
  border-radius: 16px;
  cursor: pointer;
  color: #FFF;
  width: fit-content;
  height: fit-content;
}
.black{
  background: #0E191D;
  padding: 16px;
  display: block;
  text-align: center;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.blue{
  border-radius: 5px;
  border: 1px solid #1890FF;
  background: #1890FF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  padding: 12px 16px;
}
.red{
  border-radius: 5px;
  background: #FF4D4F;
  border: 1px solid #FF4D4F;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  padding: 12px 16px;
}
.tra{
  border-radius: 5px;
  padding: 12px 16px;
  border: 1px solid #D9D9D9;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  background: transparent;
  color: #1C1C1C;
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.left{
  margin-left: 0;
  display: flex;
}
.right{
  margin-left: auto;
  display: flex;
}
</style>