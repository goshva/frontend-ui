<template>
  <div class="shop-block">
    <div class="row">
      <app-title
          size="S"
          tag="h5"
      >
        {{data.title}}  магазин
      </app-title>
      <app-switch :is-single="true" :label="null"  :bg="'transparent'"/>
    </div>
    <ul>
      <li
          v-for="point of data.status"
          :key="point"
          :class="{
            green:point.type==1,
            orange:point.type==0
          }"
      >
        {{point.text}}
      </li>
    </ul>
    <img  class="shop-img" src="../../assets/img/wildberries-logo.svg">

    <button>
       <span>Редактировать</span>
      <img src="../../assets/img/pen.svg">
    </button>

  </div>
</template>


<script>
import AppTitle from "@/components/UI/app-title.vue";
import AppSwitch from "@/components/UI/app-switch.vue";

export default {
  name: "shop-block",
  components: {AppSwitch, AppTitle},
  props:{
    data:{
      type:Object,
      default:null
    }
  }
}
</script>

<style scoped>
.shop-block{
  padding: 20px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
}
ul{
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 10px;
}
ul li{
  list-style: none;
  position: relative;
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
ul li.green{
  color: #11A00E;
}
ul li.orange{
  color: #F9A629;
}
ul li.green::before{
  content: "";
  background-image: url("../../assets/img/green.svg");
  position: absolute;
  left: -23px;
  top: calc(50% - 7.5px);
  display: block;
  width: 15px;
  height: 15px;
}
ul li.orange::before{
  content: "";
  background-image: url("../../assets/img/orange.svg");
  position: absolute;
  left: -23px;
  top: calc(50% - 7.5px);
  display: block;
  width: 15px;
  height: 15px;
}
.row{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shop-img{
  margin: 25px 0px;
}

button{
  display: flex;
  background: white;
  padding: 0px 0px 0px 15px;
  border-radius: 5px;
  border: 1px solid #D9D9D9;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  align-items: center;
  gap: 15px;
  cursor: pointer;
}
button span{
  color:  #1C1C1C ;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
button img{
  padding: 11px;
  border-left: 1px solid #D9D9D9 ;
}
</style>