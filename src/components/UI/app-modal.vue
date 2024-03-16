<template>
  <div class="modal">
    <div class="content">
      <svg @click="$emit('close')" class="close" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <line x1="1.70711" y1="1.29289" x2="18.6777" y2="18.2635" stroke="black" stroke-width="2"/>
          <line y1="-1" x2="24" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 19 2)" stroke="black" stroke-width="2"/>
        </g>
      </svg>
      <slot />
    </div>
    <div class="bg" @click="$emit('close')"></div>
  </div>
</template>

<script>
export default {
  name: "app-modal",
  data(){
    return{
    }
  },
}
</script>

<style  >
.modal{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal .shop-img{
  max-width: 185px;
  max-height: 21px;
}
.modal p{
  max-width: 450px;
}
.modal .content{
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 100%;
  max-width: 950px;
}
.modal .bg{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.20);
}
.modal .hint{
  color: #1C1C1C;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  max-width: 910px;
  margin-top: 27px;
}
.modal .close{
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
.modal a{
  color: #1890FF;
  font-family: Inter;
  font-size: 14.303px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
}
.modal .row{
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.modal p.full{
   max-width:  869px;
}

.modal  .columns{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: end;
}

.modal label{
  color: rgba(0, 0, 0, 0.70);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 18px;
  display: block;
  margin-bottom: 5px;
}
</style>