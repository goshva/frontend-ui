<template>
  <div class="filters" >
    <div class="head">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18.5231 4.226C14.188 3.74148 9.8123 3.74148 5.47713 4.226C5.23219 4.25324 4.9991 4.3459 4.80231 4.49426C4.60552 4.64262 4.4523 4.84121 4.35871 5.0692C4.26512 5.29718 4.23463 5.54615 4.27042 5.78999C4.30621 6.03382 4.40697 6.26353 4.56212 6.455L8.33113 11.114C9.41079 12.4487 9.99991 14.1133 10.0001 15.83V18.972C10 19.0898 10.0277 19.2059 10.0809 19.3111C10.134 19.4162 10.2112 19.5073 10.3061 19.577L13.0771 21.609C13.1636 21.6724 13.2659 21.7106 13.3728 21.7194C13.4796 21.7281 13.5868 21.7071 13.6824 21.6586C13.778 21.6101 13.8583 21.5361 13.9144 21.4447C13.9705 21.3533 14.0002 21.2482 14.0001 21.141V15.83C14.0004 14.1129 14.5899 12.4478 15.6701 11.113L19.4381 6.453C19.593 6.26152 19.6935 6.0319 19.7292 5.78821C19.7648 5.54452 19.7343 5.29573 19.6407 5.06791C19.5472 4.84009 19.394 4.64164 19.1974 4.49333C19.0008 4.34503 18.7679 4.25335 18.5231 4.226Z" fill="#1C1C1C"/>
      </svg>
      <h4>Фильтры:</h4>
      <div class="show" @click="filters.active=!filters.active">
        <span>{{filters.active?'Свернуть':'Развернуть'}}</span>
        <svg :class="{rt:filters.active}" xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.162718 0.159674C0.379676 -0.0532251 0.731434 -0.0532251 0.948392 0.159675L4.60716 3.75C4.82412 3.9629 5.17588 3.9629 5.39284 3.75L9.05161 0.159675C9.26857 -0.0532242 9.62032 -0.0532242 9.83728 0.159675C10.0542 0.372575 10.0542 0.717753 9.83728 0.930652L6.17851 4.52098C5.52764 5.15967 4.47236 5.15968 3.82149 4.52098L0.162718 0.930651C-0.0542403 0.717752 -0.0542403 0.372573 0.162718 0.159674Z" fill="#1C1C1C" fill-opacity="0.2"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.162718 0.159674C0.379676 -0.0532251 0.731434 -0.0532251 0.948392 0.159675L4.60716 3.75C4.82412 3.9629 5.17588 3.9629 5.39284 3.75L9.05161 0.159675C9.26857 -0.0532242 9.62032 -0.0532242 9.83728 0.159675C10.0542 0.372575 10.0542 0.717753 9.83728 0.930652L6.17851 4.52098C5.52764 5.15967 4.47236 5.15968 3.82149 4.52098L0.162718 0.930651C-0.0542403 0.717752 -0.0542403 0.372573 0.162718 0.159674Z" fill="#1890FF" fill-opacity="0.3"/>
        </svg>
      </div>
    </div>
    <div class="options" v-if="filters.active">
      <app-select :list="options" v-for="select of filters.list" :key="select" :label="select.label" :select="select.select"/>
    </div>
    <div class="row-btns" v-if="filters.active">
      <app-button :text="'Применить'" :type="2"></app-button>
      <app-button :text="'Очистить'" :type="3"></app-button>
    </div>

  </div>
</template>

<script>
import AppSelect from "@/components/UI/app-select.vue";
import AppButton from "@/components/UI/app-button.vue";

export default {
  components: {AppButton, AppSelect},
  data(){
    return{
      filters:{
        active:true,
        list:[
          {
            label:"Склад:",
            select:"Все склады"
          },
          {
            label:"Видимость:",
            select:"Все Товары"
          },
          {
            label:"Содержит в названии:",
            select:null
          },
          {
            label:"Артикул WB:",
            select:null
          },
          {
            label:"Артикул поставщика:",
            select:null
          },
          {
            label:"Бренд:",
            select:null
          },
          {
            label:"Категория:",
            select:null
          },
          {
            label:"Магазин:",
            select:null
          }
        ],
      },
      options:[
        {
          name:"Опция",
          ref:"#"
        },
        {
          name:"Опция",
          ref:"#"
        },
        {
          name:"Опция",
          ref:"#"
        },
        {
          name:"Опция",
          ref:"#"
        },
      ]
    }
  },
  methods: {

  },
};
</script>

<style scoped>
.filters{
  padding: 15px 22px;
  border-radius: 5px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  margin-top: 18px;
}
.head{
  display: flex;
  align-items: center;
}
.filters h4{
  margin-left: 8px;
}
.filters .show{
  margin-left: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
.filters span{
  color: #1890FF;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.filters svg{
  fill: linear-gradient(0deg, rgba(24, 144, 255, 0.30) 0%, rgba(24, 144, 255, 0.30) 100%), var(--black-20, rgba(28, 28, 28, 0.20));
}
.filters svg.rt{
  transform: rotate(180deg);
}

.filters  .options{
  margin-top: 34px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 12px;
}
.row-btns{
  display: flex;
  gap: 10px;
}
</style>