<template>
  <div class="switch-block" :class="{shadovNot:bg=='transparent'}" :style="{background:bg}" >
    <div class="switch" :class="{active:active}" @click="active=!active"></div>
    <span v-if="!isSingle">{{label}}</span>
  </div>
</template>
<script>
export default {
  props:{
    label:{
      type:String,
      default:""
    },
    isSingle:{
      type:Boolean,
      default:true
    },
    bg:{
      type:String,
      default:""
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
.switch-block{
  padding: 18px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 13px;
}
.switch-block span{
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
}
.switch-block .switch{
  border-radius: 100px;
  background: #BFBFBF;
  width: 41px;
  height: 23px;
  position: relative;
  cursor: pointer;
}
.switch-block .switch::before{
  content: "";
  position: absolute;
  left: 2px ;
  top: 2px;
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #FFF;
}

.switch-block .switch.active{
  background: #1890FF;
}
.switch-block  .switch.active::before{
  content: "";
  right: 2px ;
  left: auto;
}

.switch-block.shadovNot{
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
  padding: 0;
}
</style>