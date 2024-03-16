<template>
  <main>
    <div class="container">
      <main-head />
      <!--Хлебные крошки-->
      <bread-crumbs
          :bread-crumbs="[
              {name:'Главная',ref:'#'},
              {name:'Новости',ref:'#'},
              {name:'Название новости',ref:null},
          ]"
      />
      <div class="title-row">
        <app-title
            size="S"
            tag="h3"
        >
          Название новости
        </app-title>
      </div>

      <div class="news-info">
        <p class="date">18.01.24</p>
        <p class="description">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <img src="../assets/img/news-img.png">
      </div>

      <app-title
          size="S"
          tag="h3"
      >
        Другие новости
      </app-title>
      <div class="news-grid">
        <app-news-block v-for="news in 3" :key="news">
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

    </div>
  </main>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import AppTitle from "@/components/UI/app-title.vue";
import MainHead from "@/components/MainHead.vue";
import AppNewsBlock from "@/components/news/app-news-block.vue";
export default {
  data(){
     return{

     }
  },
  components: {AppNewsBlock, AppTitle, BreadCrumbs   , MainHead },
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
.news-info{
  padding: 20px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 50px;
  margin-top: 33px;
}
.news-info p.description{
  color:  #1C1C1C;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 25px;
}
</style>
