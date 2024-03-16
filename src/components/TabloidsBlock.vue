<template>
  <section class="tabloids">
    <div class="tabloid" v-for="tabloid of tabloids" :key="tabloid">
      <div class="head">
         <h3>{{tabloid.title}}</h3>
        <span class="now" :class="{active:tabloid.active==0}" @click="tabloid.active=0">Сейчас</span>
        <span class="earlier" :class="{active:tabloid.active==1}" @click="tabloid.active=1">Ранее</span>
      </div>

      <div class="tabloids-grid">
        <div class="tablo" v-for="tablo of tabloid.blocks" :key="tablo">
          <span class="title">{{tablo.title}}</span>
          <h4>{{tablo.numb}}</h4>
          <h5>{{tablo.blue}}</h5>
          <div class="total" :class="{red:tablo.total.color==0}">
            <span class="value">{{tablo.total.value}}</span>
            <svg v-if="tablo.total.color==0" xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.45488 6.39223L13 8L11.6198 2.3939L9.89804 4.0468L7.12069 1.15373C7.02641 1.05552 6.89615 1 6.76 1C6.62385 1 6.49359 1.05552 6.39931 1.15373L4.36 3.27801L1.36069 0.153734C1.16946 -0.0454712 0.85294 -0.0519314 0.653735 0.139307C0.454529 0.330544 0.44807 0.64706 0.639307 0.846266L3.99931 4.34627C4.09359 4.44448 4.22385 4.5 4.36 4.5C4.49615 4.5 4.62641 4.44448 4.72069 4.34627L6.76 2.22199L9.17665 4.73933L7.45488 6.39223Z" fill="#1C1C1C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.45488 6.39223L13 8L11.6198 2.3939L9.89804 4.0468L7.12069 1.15373C7.02641 1.05552 6.89615 1 6.76 1C6.62385 1 6.49359 1.05552 6.39931 1.15373L4.36 3.27801L1.36069 0.153734C1.16946 -0.0454712 0.85294 -0.0519314 0.653735 0.139307C0.454529 0.330544 0.44807 0.64706 0.639307 0.846266L3.99931 4.34627C4.09359 4.44448 4.22385 4.5 4.36 4.5C4.49615 4.5 4.62641 4.44448 4.72069 4.34627L6.76 2.22199L9.17665 4.73933L7.45488 6.39223Z" fill="#FF4141"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.95488 1.60777L12.5 0L11.1198 5.6061L9.39804 3.9532L6.62069 6.84627C6.52641 6.94448 6.39615 7 6.26 7C6.12385 7 5.99359 6.94448 5.89931 6.84627L3.86 4.72199L0.860694 7.84627C0.669457 8.04547 0.35294 8.05193 0.153735 7.86069C-0.0454709 7.66946 -0.0519304 7.35294 0.139307 7.15373L3.49931 3.65373C3.59359 3.55552 3.72385 3.5 3.86 3.5C3.99615 3.5 4.12641 3.55552 4.22069 3.65373L6.26 5.77801L8.67665 3.26067L6.95488 1.60777Z" fill="#1C1C1C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.95488 1.60777L12.5 0L11.1198 5.6061L9.39804 3.9532L6.62069 6.84627C6.52641 6.94448 6.39615 7 6.26 7C6.12385 7 5.99359 6.94448 5.89931 6.84627L3.86 4.72199L0.860694 7.84627C0.669457 8.04547 0.35294 8.05193 0.153735 7.86069C-0.0454709 7.66946 -0.0519304 7.35294 0.139307 7.15373L3.49931 3.65373C3.59359 3.55552 3.72385 3.5 3.86 3.5C3.99615 3.5 4.12641 3.55552 4.22069 3.65373L6.26 5.77801L8.67665 3.26067L6.95488 1.60777Z" fill="#15C906"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      tabloids:[
        {
          title:"Заказы",
          active:1,
          blocks:[
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"2,2%",
                color:1 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },

          ]
        },
        {
          title:"Продажи",
          active:1,
          blocks:[
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"2,2%",
                color:1 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },

          ]
        },
        {
          title:"Расходы маркетплейса",
          active:1,
          blocks:[
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"2,2%",
                color:1 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
          ]
        },
        {
          title:"Моржа",
          active:1,
          blocks:[
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"2,2%",
                color:1 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
            {
              title:"Заказы, ₽",
              numb:"6 039 946",
              blue:"6 174 375",
              total:{
                value:"-2,2%",
                color:0 // 0 - красный | 1 - зеленый
              }
            },
          ]
        }
      ]
    }
  },
  methods: {

  },
};
</script>

<style scoped>
.tabloids{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.tabloid{
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  padding: 22px;
}
.tabloid .head{
  display: flex;
  gap: 30px;
  align-items: center;
}

.tabloid .head span{
  position: relative;
  color: #1C1C1C;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
}
.tabloid .head span::before{
  content: "";
  border-radius: 50%;
  width: 6px;
  height: 6px;
  background: #1C1C1C;
  position: absolute;
  left: -11px;
  top: calc(50% - 3px);
}
.tabloid .head span.active{
  color: #1890FF;
}
.tabloid .head span.active::before{
  content: "";
  background: #1890FF;
}

.tabloids-grid{
  display: grid;
  grid-template-columns: repeat(6,1fr);
  gap: 20px;
  margin-top: 20px;
}

.tablo{
  border-radius: 10px;
  border: 1px solid #BEBEBE;
  background: #FFF;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.tablo .title{
  display: block;
  margin-bottom: 7px;
}
.tablo h4 , .tablo h5{
  position: relative;
  padding-left: 19px;
}
.tablo h4{
  color: #1C1C1C;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
}
.tablo h5{
  color:  #1890FF;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}
.tablo h4::before  {
  content: "";
  border-radius: 50%;
  width: 6px;
  height: 6px;
  background: #1C1C1C;
  position: absolute;
  left: 1px;
  top: calc(50% - 3px);
}
.tablo h5::before{
  content: "";
  border-radius: 50%;
  width: 6px;
  height: 6px;
  background: #1890FF;
  position: absolute;
  left: 1px;
  top: calc(50% - 3px);
}

.tablo .total{
  margin-top: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: rgba(21, 201, 6, 1);
  display: flex;
  gap: 5px;
  align-items: center;
}
.tablo .total.red{
  color: rgba(255, 65, 65, 1);
}
</style>