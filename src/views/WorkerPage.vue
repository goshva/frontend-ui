<template>
  <main>
    <div class="container">
      <main-head />
      <!--Хлебные крошки-->
      <bread-crumbs
          :bread-crumbs="[
              {name:'Главная',ref:'#'},
              {name:'Настройки',ref:'#'},
              {name:'Сотрудники',ref:'#'},
          ]"
      />
      <div class="title-row">
        <app-title
            size="S"
            tag="h3"
        >
          Сотрудники
        </app-title>
      </div>
      <div class="block-setting">
        <app-title
            size="S"
            tag="h5"
        >
          Список сотрудников
        </app-title>
        <p>
          Активных сотрудников: 0 Доступных к добавлению: 0
        </p>
        <div class="worker-list">
          <div class="head">
            <span>Имя</span>
            <span>Email</span>
            <span>Телефон</span>
            <span>Статус</span>
          </div>
          <div class="body">
            <div class="worker-user" v-if="userList.length<=0" :class="{full:userList.length<=0}" >
              <p>Сотрудники не найдены</p>
            </div>
            <template v-if="userList.length>0">
              <div class="worker-user"  v-for="user of userList" :key="user">
                <span>{{user.name}}</span>
                <span>{{user.email}}</span>
                <span>{{user.phone}}</span>
                <span>{{user.status}}</span>
                <div class="tools">
                  <a href="/worker/editing/125">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9247 2.19154C13.5967 1.53292 14.5016 1.16615 15.4425 1.17094C16.3835 1.17574 17.2846 1.55171 17.9499 2.21715C18.6152 2.88258 18.991 3.78371 18.9956 4.72468C19.0003 5.66566 18.6333 6.57043 17.9746 7.24237L11.0134 14.2035C10.6211 14.5959 10.3809 14.836 10.1151 15.0441C9.80029 15.2894 9.45973 15.4996 9.09941 15.6711C8.79325 15.8169 8.4715 15.9241 7.94533 16.0992L5.49599 16.916L4.90749 17.1121C4.64932 17.1984 4.37222 17.211 4.10727 17.1485C3.84233 17.0861 3.60003 16.951 3.40756 16.7586C3.21508 16.5661 3.08004 16.3238 3.01759 16.0588C2.95514 15.7939 2.96774 15.5168 3.05399 15.2586L4.06691 12.2208C4.24199 11.6946 4.34924 11.3729 4.49499 11.0667C4.66681 10.7066 4.87736 10.3664 5.12291 10.052C5.331 9.78521 5.57025 9.54504 5.96258 9.15362L12.9247 2.19154ZM5.46299 15.4777L4.68933 14.7022L5.35666 12.6993C5.55099 12.1163 5.63166 11.8789 5.73616 11.6589C5.86449 11.3885 6.02308 11.1336 6.20641 10.898C6.35674 10.7055 6.53274 10.5277 6.96725 10.0923L12.3673 4.69312C12.6479 5.39414 13.0687 6.03047 13.6039 6.56312C14.1366 7.09799 14.773 7.51847 15.4739 7.79879L10.0738 13.198C9.63841 13.6334 9.4615 13.8094 9.269 13.9588C9.033 14.1427 8.77792 14.3006 8.50816 14.43C8.28816 14.5345 8.04983 14.6151 7.46683 14.8095L5.46299 15.4777ZM16.5693 6.70246C16.4281 6.67125 16.2888 6.63176 16.1522 6.58421C15.5583 6.37655 15.0192 6.03679 14.5756 5.59054C14.1295 5.14682 13.7897 4.60776 13.5819 4.01387C13.5341 3.8773 13.4943 3.73803 13.4627 3.59679L13.8963 3.16412C14.3104 2.76338 14.8655 2.54144 15.4417 2.54617C16.0179 2.55089 16.5693 2.7819 16.9767 3.18938C17.3842 3.59687 17.6152 4.14817 17.62 4.72442C17.6247 5.30066 17.4027 5.85568 17.002 6.26979L16.5693 6.70246ZM2.97883 20.1665C2.97883 19.9841 3.05126 19.8093 3.18019 19.6803C3.30912 19.5514 3.48399 19.479 3.66633 19.479H18.333V20.854H3.66633C3.48399 20.854 3.30912 20.7815 3.18019 20.6526C3.05126 20.5237 2.97883 20.3488 2.97883 20.1665Z" fill="#1C1C1C"/>
                    </svg>
                  </a>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M18.5625 4.125H15.125V3.4375C15.125 2.89049 14.9077 2.36589 14.5209 1.97909C14.1341 1.5923 13.6095 1.375 13.0625 1.375H8.9375C8.39049 1.375 7.86589 1.5923 7.47909 1.97909C7.0923 2.36589 6.875 2.89049 6.875 3.4375V4.125H3.4375C3.25516 4.125 3.0803 4.19743 2.95136 4.32636C2.82243 4.4553 2.75 4.63016 2.75 4.8125C2.75 4.99484 2.82243 5.1697 2.95136 5.29864C3.0803 5.42757 3.25516 5.5 3.4375 5.5H4.125V17.875C4.125 18.2397 4.26987 18.5894 4.52773 18.8473C4.78559 19.1051 5.13533 19.25 5.5 19.25H16.5C16.8647 19.25 17.2144 19.1051 17.4723 18.8473C17.7301 18.5894 17.875 18.2397 17.875 17.875V5.5H18.5625C18.7448 5.5 18.9197 5.42757 19.0486 5.29864C19.1776 5.1697 19.25 4.99484 19.25 4.8125C19.25 4.63016 19.1776 4.4553 19.0486 4.32636C18.9197 4.19743 18.7448 4.125 18.5625 4.125ZM8.25 3.4375C8.25 3.25516 8.32243 3.0803 8.45136 2.95136C8.5803 2.82243 8.75516 2.75 8.9375 2.75H13.0625C13.2448 2.75 13.4197 2.82243 13.5486 2.95136C13.6776 3.0803 13.75 3.25516 13.75 3.4375V4.125H8.25V3.4375ZM16.5 17.875H5.5V5.5H16.5V17.875ZM9.625 8.9375V14.4375C9.625 14.6198 9.55257 14.7947 9.42364 14.9236C9.2947 15.0526 9.11984 15.125 8.9375 15.125C8.75516 15.125 8.5803 15.0526 8.45136 14.9236C8.32243 14.7947 8.25 14.6198 8.25 14.4375V8.9375C8.25 8.75516 8.32243 8.5803 8.45136 8.45136C8.5803 8.32243 8.75516 8.25 8.9375 8.25C9.11984 8.25 9.2947 8.32243 9.42364 8.45136C9.55257 8.5803 9.625 8.75516 9.625 8.9375ZM13.75 8.9375V14.4375C13.75 14.6198 13.6776 14.7947 13.5486 14.9236C13.4197 15.0526 13.2448 15.125 13.0625 15.125C12.8802 15.125 12.7053 15.0526 12.5764 14.9236C12.4474 14.7947 12.375 14.6198 12.375 14.4375V8.9375C12.375 8.75516 12.4474 8.5803 12.5764 8.45136C12.7053 8.32243 12.8802 8.25 13.0625 8.25C13.2448 8.25 13.4197 8.32243 13.5486 8.45136C13.6776 8.5803 13.75 8.75516 13.75 8.9375Z" fill="#1C1C1C"/>
                    </svg>
                  </button>
                </div>
              </div>
            </template>
          </div>
        </div>
        <app-button @click="addUser=!addUser" :align="'left'" :text="'Пригласить сотрудника'" :type="2"/>

        <app-modal  v-if="addUser" @close="addUser=!addUser" >
          <template v-slot>
            <app-title
                size="S"
                tag="h5"
            >
              Добавление магазина
            </app-title>
            <app-title
                size="S"
                tag="h5"
            >
              Ваш сотрудник получит письмо с уведомлением и ссылкой для подтверждения аккаунта
            </app-title>
            <app-input
                :placeholder="'Email'"
                :label="'Email'"
                :type="'email'"
            >
              <label>Выбор роли</label>
              <app-select
                  :list="roles"
                  :label="''"
                  :select="roles[0].name"
              />
            </app-input>
            <p class="full">Передавая персональные данные третьего лица для добавления сотрудника, я заверяю о наличии согласия такого лица на передачу вам персональныз данных, а так же последующую обработку вами персональных данных</p>
            <app-button  :align="'left'" :text="'Пригласить'" :type="2"/>
          </template>
        </app-modal>
      </div>
    </div>
  </main>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import AppTitle from "@/components/UI/app-title.vue";
import MainHead from "@/components/MainHead.vue";
import AppButton from "@/components/UI/app-button.vue";
import AppModal from "@/components/UI/app-modal.vue";
import AppInput from "@/components/UI/app-input.vue";
import AppSelect from "@/components/UI/app-select.vue";
export default {
  data(){
     return{
       addUser:false,
        userList:[
          {
            name:"Аркадий",
            email:"sauyfas@gmail.com",
            phone:"+7 (453) 353-43-23",
            status:"Менеджер"
          },
          {
            name:"Аркадий",
            email:"sauyfas@gmail.com",
            phone:"+7 (453) 353-43-23",
            status:"Менеджер"
          }
        ],
        roles:[
          {
            name:"Роль ",
          },
         {
           name:"Роль сотрудника",
         },
         {
           name:"Роль сотрудника",
         }
       ]
     }
  },
  components: {AppSelect, AppInput,AppModal, AppButton, AppTitle, BreadCrumbs , MainHead},
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

.worker-list{
  margin-bottom: 30px;
}
.worker-list .head{
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 69px;
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
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
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
.worker-user.full{
  display: block;
}
.tools{
  display: flex;
  gap: 25px;
}
.tools button{
  background: transparent;
  cursor: pointer;
  border: 0;
}
.input-block .row{
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>
