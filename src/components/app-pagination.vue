

<template>
   <div class="pagination-row">
     <button>
       <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M4.84033 0.109523C5.05323 0.255201 5.05323 0.491392 4.84033 0.63707L1.25 3.09378C1.0371 3.23946 1.0371 3.47565 1.25 3.62133L4.84032 6.07804C5.05322 6.22372 5.05322 6.45991 4.84032 6.60559C4.62743 6.75126 4.28225 6.75126 4.06935 6.60559L0.479023 4.14887C-0.159674 3.71184 -0.159675 3.00327 0.479023 2.56623L4.06935 0.109523C4.28225 -0.0361548 4.62743 -0.0361548 4.84033 0.109523Z" fill="#1C1C1C" fill-opacity="0.2"/>
       </svg>
     </button>
     <button
         v-for="(btn,index) in count"
         :key="index"
         :class="{active:index+1==activeBtn}"
         @click="activeBtn=index+1"
     >
       {{index+1}}</button>
     <button>
       <svg xmlns="http://www.w3.org/2000/svg" width="5" height="7" viewBox="0 0 5 7" fill="none">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M0.159674 0.109523C-0.053226 0.255201 -0.0532259 0.491392 0.159674 0.63707L3.75 3.09378C3.9629 3.23946 3.9629 3.47565 3.75 3.62133L0.159675 6.07804C-0.0532243 6.22372 -0.0532242 6.45991 0.159675 6.60559C0.372575 6.75126 0.717753 6.75126 0.930652 6.60559L4.52098 4.14887C5.15967 3.71184 5.15968 3.00327 4.52098 2.56623L0.93065 0.109523C0.717751 -0.0361553 0.372573 -0.0361552 0.159674 0.109523Z" fill="#1C1C1C" fill-opacity="0.2"/>
       </svg>
     </button>
   </div>
</template>

<script>
export default {
  name: "app-pagination",
  props:{
    count:{
      type:Number
    },
    active:{
      type:Number
    },
  },
  data(){
    return{
      activeBtn:this.active
    }
  }
}
</script>

<style scoped>
.pagination-row{
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
}
.pagination-row button{
  border-radius: 5px;
  border: 1px solid #D9D9D9;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  width: 34px;
  height: 34px;
  background: transparent;
  cursor: pointer;
}
.pagination-row button.active{
  border: 1px solid #1890FF;
  color: #1890FF;
}
</style>