<template>
  <main>
    <div class="container">
      <main-head />
      <!--Хлебные крошки-->
      <bread-crumbs :bread-crumbs="[{name:'Главная',ref:'#'},{name:'Партнерская программа',ref:null}]"/>
      <div class="title-row">
        <app-title
            size="S"
            tag="h3"
        >
          Партнерская программа
        </app-title>
      </div>


      <div class="AffiliateProgram-info">
        <div class="block balance">
          <app-title
              size="S"
              tag="h5"
          >
            Ваш баланс
          </app-title>
          <div class="columns">
            <div class="row">
              <span>Всего заработано:</span>
              <span>234 234 ₽</span>
            </div>
            <div class="row">
              <span>Всего заработано:</span>
              <span>234 234 ₽</span>
            </div>
            <div class="row">
              <span>Всего заработано:</span>
              <span>234 234 ₽</span>
            </div>
            <div class="row">
              <span>Всего заработано:</span>
              <span>234 234 ₽</span>
            </div>
            <div class="row">
              <span>Всего заработано:</span>
              <span>234 234 ₽</span>
            </div>
          </div>
          <app-button :text="'Вывести'" :type="2"/>
        </div>
        <div class="block referrals">
          <app-title
              size="S"
              tag="h5"
          >
            Рефералы
          </app-title>
          <div class="columns">
            <div class="row">
              <span>Всего заработано:</span>
              <span>234 234 ₽</span>
            </div>
            <div class="row">
              <span>Всего заработано:</span>
              <span>234 234 ₽</span>
            </div>
            <div class="row">
              <span>Всего заработано:</span>
              <span>234 234 ₽</span>
            </div>
          </div>
        </div>
        <div class="block link-invitation">
          <app-title
              size="S"
              tag="h5"
          >
            Ссылка для приглашения
          </app-title>
          <div class="clone-link">
            <span>https://miro.com/app/board/o9J_kjnm2Lo=/</span>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_371_1245)">
                  <path d="M0 10.125C0 8.676 1.176 7.5 2.625 7.5H4.875C5.17337 7.5 5.45952 7.61853 5.6705 7.8295C5.88147 8.04048 6 8.32663 6 8.625C6 8.92337 5.88147 9.20952 5.6705 9.4205C5.45952 9.63147 5.17337 9.75 4.875 9.75H2.625C2.52554 9.75 2.43016 9.78951 2.35984 9.85983C2.28951 9.93016 2.25 10.0255 2.25 10.125V21.375C2.25 21.582 2.418 21.75 2.625 21.75H13.875C13.9745 21.75 14.0698 21.7105 14.1402 21.6402C14.2105 21.5698 14.25 21.4745 14.25 21.375V19.125C14.25 18.8266 14.3685 18.5405 14.5795 18.3295C14.7905 18.1185 15.0766 18 15.375 18C15.6734 18 15.9595 18.1185 16.1705 18.3295C16.3815 18.5405 16.5 18.8266 16.5 19.125V21.375C16.5 22.0712 16.2234 22.7389 15.7312 23.2312C15.2389 23.7234 14.5712 24 13.875 24H2.625C1.92881 24 1.26113 23.7234 0.768845 23.2312C0.276562 22.7389 0 22.0712 0 21.375L0 10.125Z" fill="#1890FF"/>
                  <path d="M7.5 2.625C7.5 1.176 8.676 0 10.125 0H21.375C22.824 0 24 1.176 24 2.625V13.875C24 14.5712 23.7234 15.2389 23.2312 15.7312C22.7389 16.2234 22.0712 16.5 21.375 16.5H10.125C9.42881 16.5 8.76113 16.2234 8.26884 15.7312C7.77656 15.2389 7.5 14.5712 7.5 13.875V2.625ZM10.125 2.25C10.0255 2.25 9.93016 2.28951 9.85983 2.35984C9.78951 2.43016 9.75 2.52554 9.75 2.625V13.875C9.75 14.082 9.918 14.25 10.125 14.25H21.375C21.4745 14.25 21.5698 14.2105 21.6402 14.1402C21.7105 14.0698 21.75 13.9745 21.75 13.875V2.625C21.75 2.52554 21.7105 2.43016 21.6402 2.35984C21.5698 2.28951 21.4745 2.25 21.375 2.25H10.125Z" fill="#1890FF"/>
                </g>
                <defs>
                  <clipPath id="clip0_371_1245">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <p>
            <strong>Отправьте ссылку для приглашения зарегистрироваться</strong>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="terms-program">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18H15M15 17C15 14 19 12 19 8C19 4 16 1 12 1C8 1 5 4 5 8C5 12 9 14 9 17V20C9 22 10 23 12 23C14 23 15 22 15 20V17Z" stroke="black" stroke-width="2"/>
        </svg>
        <app-title
            size="S"
            tag="h5"
        >
          Условия партнерской программа
        </app-title>
        <button>
          <span>Развернуть</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.162718 0.159674C0.379676 -0.0532251 0.731434 -0.0532251 0.948392 0.159675L4.60716 3.75C4.82412 3.9629 5.17588 3.9629 5.39284 3.75L9.05161 0.159675C9.26857 -0.0532242 9.62032 -0.0532242 9.83728 0.159675C10.0542 0.372575 10.0542 0.717753 9.83728 0.930652L6.17851 4.52098C5.52764 5.15967 4.47236 5.15968 3.82149 4.52098L0.162718 0.930651C-0.0542403 0.717752 -0.0542403 0.372573 0.162718 0.159674Z" fill="#1C1C1C" fill-opacity="0.2"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.162718 0.159674C0.379676 -0.0532251 0.731434 -0.0532251 0.948392 0.159675L4.60716 3.75C4.82412 3.9629 5.17588 3.9629 5.39284 3.75L9.05161 0.159675C9.26857 -0.0532242 9.62032 -0.0532242 9.83728 0.159675C10.0542 0.372575 10.0542 0.717753 9.83728 0.930652L6.17851 4.52098C5.52764 5.15967 4.47236 5.15968 3.82149 4.52098L0.162718 0.930651C-0.0542403 0.717752 -0.0542403 0.372573 0.162718 0.159674Z" fill="#1890FF" fill-opacity="0.3"/>
          </svg>
        </button>
      </div>

      <div class="worker-list">
        <div class="head">
          <span>Промокод</span>
          <span>Цель промокода</span>
          <span>Дата выдачи</span>
          <span>Дата начала</span>
          <span>Дата окончания</span>
          <span>Условия для продавца</span>
          <span>Условия для клиента</span>
          <span>Лимит</span>
        </div>
        <div class="body">
            <div class="worker-user"   >
              <span>Промокод</span>
              <span>Цель промокода</span>
              <span>Дата выдачи</span>
              <span>Дата начала</span>
              <span>Дата окончания</span>
              <span>Условия для продавца</span>
              <span>Условия для клиента</span>
              <span>Лимит</span>
            </div>
            <div class="worker-user"   >
              <span>Промокод</span>
              <span>Цель промокода</span>
              <span>Дата выдачи</span>
              <span>Дата начала</span>
              <span>Дата окончания</span>
              <span>Условия для продавца</span>
              <span>Условия для клиента</span>
              <span>Лимит</span>
            </div>
        </div>
      </div>


    </div>
  </main>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import AppTitle from "@/components/UI/app-title.vue";
import MainHead from "@/components/MainHead.vue";
import AppButton from "@/components/UI/app-button.vue";
export default {
  data(){
     return{

     }
  },
  components: {AppButton, AppTitle, BreadCrumbs , MainHead },
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
.AffiliateProgram-info{
  display: grid;
  grid-template-columns: 1fr 1fr 1.8fr;
  margin-top: 30px;
  gap: 20px;
}
.AffiliateProgram-info .block{
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  gap: 24px;
  flex-direction: column;
}
.AffiliateProgram-info .block .columns{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.AffiliateProgram-info .block .columns .row{
  display: flex;
  justify-content: space-between;
}
.AffiliateProgram-info .block .columns .row span:first-child{
  color: rgba(0, 0, 0, 0.50);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.AffiliateProgram-info .block .columns .row span:last-child{
  color: #000;
  text-align: right;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.clone-link{
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid #D9D9D9;
  background: rgba(0, 0, 0, 0.03);
  padding: 13px 20px;
  align-items: center;
}
.clone-link span{
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
.clone-link button{
  background: transparent;
  border: 0;
}
.AffiliateProgram-info .block  p{
  color: rgba(28, 28, 28, 0.50);
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.AffiliateProgram-info .block strong{
  display: block;
  margin-bottom: 30px;
}

.terms-program{
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  padding: 15px 20px;
  margin-top: 30px;
}
.terms-program h5{
  margin-bottom: 0;
}
.terms-program button{
  margin-left: auto;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #1890FF;
}


.worker-list{
  margin-bottom: 30px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  padding: 25px;
  margin-top: 30px;
}
.worker-list .head{
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(8,1fr);
  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
}
.worker-list .head span{
  color: rgba(28, 28, 28, 0.50);
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 181.818% */
  text-transform: uppercase;
}

.worker-user{
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(8,1fr);
  border-bottom: 1px solid #D9D9D9;
}
.worker-user span{
  color: #1C1C1C;
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.worker-user p{
  color: rgba(28, 28, 28, 0.30);
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin: 22px 0px;
  width: 100%;
}
</style>
