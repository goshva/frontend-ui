<template>
  <div class="checkbox-row" @click="active=!active">
    <div class="checkbox" :class="{ 'blue active': type === 1 && active }">
      <svg v-if="active" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2786 17.7083C10.1438 17.7085 10.0103 17.682 9.88581 17.6304C9.76128 17.5788 9.64818 17.5031 9.553 17.4076L5.6118 13.4664C5.51377 13.3717 5.43558 13.2585 5.38179 13.1333C5.328 13.008 5.29968 12.8734 5.2985 12.7371C5.29732 12.6008 5.32328 12.4657 5.37489 12.3395C5.4265 12.2134 5.50271 12.0988 5.59907 12.0024C5.69544 11.9061 5.81004 11.8298 5.93617 11.7782C6.06231 11.7266 6.19746 11.7007 6.33374 11.7018C6.47001 11.703 6.60469 11.7313 6.72991 11.7851C6.85513 11.8389 6.96838 11.9171 7.06306 12.0151L10.2786 15.2307L17.9281 7.58129C18.1216 7.39433 18.3809 7.29088 18.65 7.29322C18.9191 7.29556 19.1765 7.4035 19.3668 7.5938C19.5571 7.78409 19.6651 8.04151 19.6674 8.31062C19.6697 8.57973 19.5663 8.83899 19.3793 9.03256L11.0043 17.4076C10.9091 17.5031 10.796 17.5788 10.6715 17.6304C10.5469 17.682 10.4134 17.7085 10.2786 17.7083Z"
              :fill="type == 1 ? 'white' : 'black'"
        />
      </svg>
    </div>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
   props:{
     text:{
       type:String,
       default:null
     },
     link:{
       type:String,
       default: null
     },
     linlText:{
       type:String,
       default: null
     },
     type:{
       type:Number,
       default:0
     }
   },
   data(){
     return{
       active:false
     }
   }
};
</script>

<style scoped>
.checkbox-row{
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
}
.checkbox-row .checkbox{
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 30px;
}
.text{
  color: rgba(0, 0, 0, 0.70);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
.checkbox-row .checkbox.blue{
  background: #1890FF;
}
</style>