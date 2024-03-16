<template>
  <main>
    <div class="container">
      <main-head />
      <!--Хлебные крошки-->
      <bread-crumbs :bread-crumbs="[{name:'Главная',ref:'#'},{name:'Новости',ref:null}]"/>
      <div class="title-row">
        <app-title
            size="S"
            tag="h3"
        >
          Новости и обновления
        </app-title>
      </div>

      <div class="news-grid">
        <app-news-block v-for="news in 24" :key="news">
          <app-title
              size="S"
              tag="h5"
          >
            Название новости
          </app-title>
          <p class="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
          </p>
          <p class="date">18.01.24</p>
        </app-news-block>
      </div>
      <app-pagination :count="16" :active="1"/>

    </div>
  </main>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import AppTitle from "@/components/UI/app-title.vue";
import MainHead from "@/components/MainHead.vue";
import AppNewsBlock from "@/components/news/app-news-block.vue";
import AppPagination from "@/components/app-pagination.vue";
export default {
  data(){
     return{

     }
  },
  components: {AppPagination, AppNewsBlock, AppTitle, BreadCrumbs   , MainHead },
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
.news-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin-top: 30px;
}
</style>
