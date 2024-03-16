<template>
  <main>
    <div class="container">
      <main-head />
      <!--Хлебные крошки-->
      <bread-crumbs
          :bread-crumbs="[
              {name:'Главная',ref:'#'},
              {name:'Полезные материалы',ref:null},
          ]"
      />
      <div class="title-row">
        <app-title
            size="S"
            tag="h3"
        >
          Полезные материалы
        </app-title>
      </div>
      <div class="navigation">
        <span :class="{active:navActive==0}" @click="navActive=0">Обзор функций</span>
        <span :class="{active:navActive==1}" @click="navActive=1">Примеры использования</span>
        <span :class="{active:navActive==2}" @click="navActive=2">Отчёт по релизам</span>
      </div>
      <div class="UsefulMaterials-grid">
        <div class="block" v-for="block in 10" :key="block">
          <app-title
              size="S"
              tag="h5"
          >
            Анализ конкурентов
          </app-title>
          <img src="../assets/img/news-img.png">
          <p class="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
          </p>
        </div>
      </div>
      <app-pagination :count="16" :active="1"/>

    </div>
  </main>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import AppTitle from "@/components/UI/app-title.vue";
import MainHead from "@/components/MainHead.vue";
import AppPagination from "@/components/app-pagination.vue";
export default {
  data(){
     return{
       navActive:0
     }
  },
  components: {AppPagination, AppTitle, BreadCrumbs   , MainHead },
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
.title-row{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.UsefulMaterials-grid{
  display: grid;
  grid-template-columns: 1fr  1fr;
  gap: 25px;
  margin-top: 30px;
}
.UsefulMaterials-grid .block{
  padding: 20px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
}
.UsefulMaterials-grid .block img{
  max-width: 670px;
  height: 382px;
  margin: 14px 0px;
}
.UsefulMaterials-grid .block p.description{
  color: rgba(28, 28, 28, 0.50);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.navigation{
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
.navigation span{
  color: #1C1C1C;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
}
.navigation span.active{
  color: #1890FF;
  text-decoration: underline;
}
</style>
