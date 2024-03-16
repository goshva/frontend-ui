<template>
  <div class="input-block">
    <label>{{label}}</label>
    <div class="row">
      <input :placeholder="placeholder" :type="type"  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
      <slot />
    </div>
  </div>

</template>

<script>
export default {
  props:{
    placeholder:{
      type:String,
      default: null
    },
    type:{
      type:String,
      default: "text"
    },
    label:{
      type:String,
      default: null
    },
    hint:{
      type:String,
      default:null
    },
    modelValue:String
  },
  data(){
    return{
      text:""
    }
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped>
label{
  color: rgba(0, 0, 0, 0.70);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: block;
  margin-bottom: 5px;
}
input{
  outline: none;
  box-shadow: 0px 0px 0px;
  padding: 16px 20px;
  width: 100%;
  border-radius: 15.892px;
  border: 0.795px solid rgba(0, 0, 0, 0.16);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(39.729862213134766px);
  color: #000;
  font-family: Inter;
  font-size: 14.303px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
input::placeholder{
  color: #000;
  font-family: Inter;
  font-size: 14.303px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  opacity: 0.3;
}
.input-block p{
  color: #000;
  margin-top: 5px;
  font-family: Inter;
  font-size: 14.303px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
}
</style>


<style  >

.input-block p{
  color: #000;
  margin-top: 5px;
  font-family: Inter;
  font-size: 14.303px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
  margin-bottom: 19px;
  max-width: 450px;
  display: block;
}
.input-block a{
  color: #1890FF;
}
</style>