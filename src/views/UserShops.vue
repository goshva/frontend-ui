<template>
  <main>
    <div class="container">
      <main-head />
      <!--Хлебные крошки-->
      <bread-crumbs :bread-crumbs="[{name:'Главная',ref:'#'} ]"/>
      <div class="title-row">
        <app-title
            size="S"
            tag="h3"
        >
          Ваши магазины
        </app-title>
        <a class="instruction " href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6.46307 8.3267V8.28409C6.4678 7.83191 6.51515 7.47206 6.60511 7.20455C6.69508 6.93703 6.82292 6.72041 6.98864 6.55469C7.15436 6.38897 7.35322 6.23627 7.58523 6.09659C7.72491 6.01136 7.85038 5.91075 7.96165 5.79474C8.07292 5.67637 8.16051 5.54025 8.22443 5.38636C8.29072 5.23248 8.32386 5.06203 8.32386 4.875C8.32386 4.64299 8.26941 4.44176 8.16051 4.27131C8.05161 4.10085 7.90601 3.96946 7.72372 3.87713C7.54143 3.7848 7.33902 3.73864 7.11648 3.73864C6.92235 3.73864 6.73532 3.77888 6.5554 3.85938C6.37547 3.93987 6.22514 4.06652 6.1044 4.23935C5.98366 4.41217 5.91383 4.63826 5.89489 4.91761H5C5.01894 4.51515 5.12311 4.17069 5.3125 3.88423C5.50426 3.59777 5.75639 3.37879 6.06889 3.22727C6.38376 3.07576 6.73295 3 7.11648 3C7.53314 3 7.89536 3.08286 8.20313 3.24858C8.51326 3.4143 8.75237 3.64157 8.92045 3.9304C9.09091 4.21922 9.17614 4.5483 9.17614 4.91761C9.17614 5.17803 9.13589 5.41359 9.0554 5.62429C8.97727 5.83499 8.86364 6.0232 8.71449 6.18892C8.56771 6.35464 8.39015 6.50142 8.18182 6.62926C7.97348 6.75947 7.80658 6.89678 7.68111 7.04119C7.55563 7.18324 7.46449 7.35251 7.40767 7.54901C7.35085 7.7455 7.32008 7.99053 7.31534 8.28409V8.3267H6.46307ZM6.91761 10.429C6.74242 10.429 6.59209 10.3662 6.46662 10.2408C6.34115 10.1153 6.27841 9.96496 6.27841 9.78977C6.27841 9.61458 6.34115 9.46425 6.46662 9.33878C6.59209 9.21331 6.74242 9.15057 6.91761 9.15057C7.0928 9.15057 7.24313 9.21331 7.36861 9.33878C7.49408 9.46425 7.55682 9.61458 7.55682 9.78977C7.55682 9.90578 7.52723 10.0123 7.46804 10.1094C7.41122 10.2064 7.33428 10.2846 7.23722 10.3438C7.14252 10.4006 7.03598 10.429 6.91761 10.429Z" fill="#1890FF"/>
            <circle cx="7" cy="7" r="6.5" stroke="#1890FF"/>
          </svg>
          Инструкция
        </a>
      </div>

      <div class="block-setting">
        <app-title
            size="S"
            tag="h5"
        >
          У вас пока нет активных подключённых магазинов
        </app-title>
        <p>Для начала работы с сервисом необходимо подключить магазин</p>
        <app-select
            :list="options"
            v-for="select of filters.list"
            :key="select"
            :label="select.label"
            :select="select.select"
            @choose="filters.list[0].select=$event"
        />
        <app-button v-if="filters.list[0].select!='Выбрать магазин'" :align="'left'" :text="'Подключить'" :type="2"/>
      </div>

    </div>
  </main>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import AppTitle from "@/components/UI/app-title.vue";
import MainHead from "@/components/MainHead.vue";
import AppButton from "@/components/UI/app-button.vue";
import AppSelect from "@/components/UI/app-select.vue";
export default {
  data(){
     return{
       filters:{
         active:true,
         list:[
           {
             label:"",
             select:"Выбрать магазин"
           },
         ],
       },
       options:[
         {
           name:"Магащин 1",
           ref:"#"
         },
         {
           name:"Магащин 2",
           ref:"#"
         },
         {
           name:"Магащин 3",
           ref:"#"
         },
         {
           name:"Магащин 4",
           ref:"#"
         },
       ]
     }
  },
  components: {AppSelect, AppButton , AppTitle, BreadCrumbs , MainHead},
};
</script>


<style scoped>
main{
  min-height: 100vh;
  background: #FAFAFA;
  padding-bottom: 60px;
  padding-top: 12px;
}
.container{
  max-width: 1440px;
  margin: 0 auto;
}
.row-switch{
  margin-top: 24px;
  display: flex;
  gap: 11px;
}
.title-row{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.instruction{
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1890FF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  gap: 6px;
  text-decoration: none;
}
.periods{
  display: flex;
  margin-top: 25px;
  gap: 35px;
}
.periods .row  {
  display: flex;
  gap: 11px;
  margin-top: 8px;
}


.block-setting{
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin-top: 30px;
}
.block-setting p {
  color: rgba(28, 28, 28, 0.50);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 5px;
  margin-bottom: 33px;
}
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 30px 0px;
}
.password-requirements{
  display: flex;
  align-items: flex-end;
}
.password-requirements p{
  color: rgba(0, 0, 0, 0.70);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 127.074%;
  max-width: 342px;
  margin-top: 13px;
  margin-bottom: 20px;
}
.password-requirements ul{
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 15px;
}
.password-requirements ul li{
  color: rgba(0, 0, 0, 0.70);
  font-family: Inter;
  font-size: 14.3px;
  font-style: normal;
  font-weight: 300;
  line-height: 127.074%;
}
button{
  margin-top: 20px;
}
</style>
