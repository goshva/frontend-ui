<template>
  <div class="client-table">
    <div class="tools">
      <app-input v-if="!isABC" :placeholder="'Поиск'" :label="''" :type="'text'" v-model="search" />
      <div v-else></div>
      <div class="buttons">
        <app-select :list="options"  :label="''" :select="options[0].name"/>
        <button @click="modalSettings=!modalSettings">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.5">
              <path d="M12 7.49956C11.11 7.49956 10.24 7.76348 9.49998 8.25794C8.75996 8.75241 8.18318 9.45521 7.84259 10.2775C7.50199 11.0997 7.41288 12.0045 7.58651 12.8775C7.76014 13.7504 8.18873 14.5522 8.81806 15.1815C9.4474 15.8109 10.2492 16.2395 11.1221 16.4131C11.9951 16.5867 12.8999 16.4976 13.7221 16.157C14.5444 15.8164 15.2472 15.2396 15.7417 14.4996C16.2361 13.7596 16.5 12.8896 16.5 11.9996C16.4988 10.8065 16.0243 9.66259 15.1807 8.81895C14.337 7.9753 13.1931 7.5008 12 7.49956ZM12 14.9996C11.4067 14.9996 10.8267 14.8236 10.3333 14.494C9.83999 14.1643 9.45547 13.6958 9.2284 13.1476C9.00134 12.5994 8.94193 11.9962 9.05769 11.4143C9.17344 10.8323 9.45917 10.2978 9.87872 9.87823C10.2983 9.45868 10.8328 9.17295 11.4148 9.0572C11.9967 8.94144 12.5999 9.00085 13.1481 9.22792C13.6963 9.45498 14.1648 9.8395 14.4945 10.3328C14.8241 10.8262 15 11.4062 15 11.9996C15 12.7952 14.684 13.5583 14.1214 14.1209C13.5588 14.6835 12.7957 14.9996 12 14.9996ZM20.25 12.2021C20.2538 12.0671 20.2538 11.9321 20.25 11.7971L21.6488 10.0496C21.7221 9.9578 21.7729 9.85011 21.797 9.73514C21.8211 9.62018 21.8179 9.50116 21.7875 9.38768C21.5582 8.52574 21.2152 7.69816 20.7675 6.92674C20.7089 6.82579 20.6276 6.73992 20.5299 6.67595C20.4322 6.61199 20.321 6.5717 20.205 6.5583L17.9813 6.3108C17.8888 6.2133 17.795 6.11955 17.7 6.02955L17.4375 3.80018C17.424 3.68413 17.3836 3.57284 17.3195 3.47518C17.2554 3.37752 17.1693 3.29619 17.0682 3.23768C16.2965 2.79082 15.4689 2.44815 14.6072 2.21862C14.4937 2.18843 14.3746 2.18534 14.2597 2.2096C14.1447 2.23387 14.037 2.2848 13.9454 2.3583L12.2025 3.74955H11.7975L10.05 2.35362C9.95829 2.28027 9.8506 2.22951 9.73563 2.20541C9.62067 2.18131 9.50165 2.18455 9.38817 2.21487C8.52637 2.44458 7.69884 2.78757 6.92723 3.23487C6.82628 3.29349 6.7404 3.37486 6.67644 3.47251C6.61248 3.57017 6.57219 3.6814 6.55879 3.79737L6.31129 6.02487C6.21379 6.11799 6.12004 6.21174 6.03004 6.30612L3.80067 6.56206C3.68462 6.57556 3.57333 6.61598 3.47567 6.68011C3.37801 6.74424 3.29668 6.8303 3.23817 6.93143C2.79131 7.70315 2.44864 8.53066 2.21911 9.39237C2.18891 9.50592 2.18583 9.62498 2.21009 9.73995C2.23435 9.85491 2.28529 9.96257 2.35879 10.0542L3.75004 11.7971V12.2021L2.35411 13.9496C2.28076 14.0413 2.23 14.149 2.2059 14.264C2.1818 14.3789 2.18504 14.4979 2.21536 14.6114C2.44466 15.4734 2.78767 16.3009 3.23536 17.0724C3.29397 17.1733 3.37535 17.2592 3.473 17.3232C3.57065 17.3871 3.68189 17.4274 3.79786 17.4408L6.02161 17.6883C6.11473 17.7858 6.20848 17.8796 6.30286 17.9696L6.56254 20.1989C6.57605 20.315 6.61647 20.4263 6.6806 20.5239C6.74473 20.6216 6.83079 20.7029 6.93192 20.7614C7.70363 21.2083 8.53114 21.551 9.39286 21.7805C9.50641 21.8107 9.62547 21.8138 9.74044 21.7895C9.8554 21.7652 9.96306 21.7143 10.0547 21.6408L11.7975 20.2496C11.9325 20.2533 12.0675 20.2533 12.2025 20.2496L13.95 21.6483C14.0418 21.7216 14.1495 21.7724 14.2645 21.7965C14.3794 21.8206 14.4984 21.8174 14.6119 21.7871C15.4739 21.5578 16.3014 21.2147 17.0729 20.7671C17.1738 20.7084 17.2597 20.6271 17.3236 20.5294C17.3876 20.4318 17.4279 20.3205 17.4413 20.2046L17.6888 17.9808C17.7863 17.8883 17.88 17.7946 17.97 17.6996L20.1994 17.4371C20.3155 17.4236 20.4268 17.3831 20.5244 17.319C20.6221 17.2549 20.7034 17.1688 20.7619 17.0677C21.2088 16.296 21.5515 15.4685 21.781 14.6067C21.8112 14.4932 21.8143 14.3741 21.79 14.2592C21.7657 14.1442 21.7148 14.0365 21.6413 13.9449L20.25 12.2021ZM18.7407 11.5927C18.7566 11.8637 18.7566 12.1354 18.7407 12.4064C18.7295 12.592 18.7876 12.7751 18.9038 12.9202L20.2341 14.5824C20.0815 15.0675 19.886 15.5381 19.65 15.9886L17.5313 16.2286C17.3468 16.2491 17.1764 16.3373 17.0532 16.4761C16.8727 16.6791 16.6805 16.8713 16.4775 17.0517C16.3387 17.175 16.2505 17.3454 16.23 17.5299L15.9947 19.6467C15.5443 19.8828 15.0736 20.0783 14.5885 20.2308L12.9254 18.9005C12.7923 18.7942 12.627 18.7363 12.4566 18.7364H12.4116C12.1406 18.7524 11.8689 18.7524 11.5979 18.7364C11.4123 18.7253 11.2292 18.7834 11.0841 18.8996L9.41723 20.2308C8.93211 20.0782 8.4615 19.8827 8.01098 19.6467L7.77098 17.5308C7.7505 17.3463 7.66231 17.1759 7.52348 17.0527C7.32052 16.8722 7.12832 16.68 6.94786 16.4771C6.82461 16.3382 6.65424 16.25 6.46973 16.2296L4.35286 15.9933C4.11679 15.5428 3.92132 15.0722 3.76879 14.5871L5.09911 12.9239C5.21527 12.7788 5.2734 12.5957 5.26223 12.4102C5.24629 12.1392 5.24629 11.8674 5.26223 11.5964C5.2734 11.4109 5.21527 11.2278 5.09911 11.0827L3.76879 9.41674C3.92144 8.93162 4.1169 8.46102 4.35286 8.01049L6.46879 7.77049C6.65331 7.75001 6.82367 7.66182 6.94692 7.52299C7.12738 7.32003 7.31958 7.12783 7.52254 6.94737C7.66193 6.82404 7.75048 6.65329 7.77098 6.46831L8.00629 4.35237C8.45677 4.1163 8.92738 3.92084 9.41254 3.7683L11.0757 5.09862C11.2208 5.21478 11.4039 5.27291 11.5894 5.26174C11.8604 5.24581 12.1322 5.24581 12.4032 5.26174C12.5887 5.27291 12.7718 5.21478 12.9169 5.09862L14.5829 3.7683C15.068 3.92095 15.5386 4.11641 15.9891 4.35237L16.2291 6.46831C16.2496 6.65282 16.3378 6.82318 16.4766 6.94643C16.6796 7.12689 16.8718 7.31909 17.0522 7.52205C17.1755 7.66089 17.3458 7.74907 17.5304 7.76955L19.6472 8.00487C19.8833 8.45534 20.0788 8.92595 20.2313 9.41112L18.901 11.0742C18.7837 11.2206 18.7255 11.4056 18.7379 11.5927H18.7407Z" fill="#999999"/>
            </g>
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5858 3.30392H13.9882V1.51367L1.5 3.44117V20.3364L13.9882 22.4874V19.8339H21.5858C21.8158 19.8456 22.0412 19.7656 22.2125 19.6116C22.3839 19.4576 22.4872 19.242 22.5 19.0119V4.12517C22.487 3.89527 22.3836 3.67985 22.2123 3.52597C22.041 3.37209 21.8157 3.29226 21.5858 3.30392ZM21.7057 19.1484H13.9628L13.95 17.7317H15.8153V16.0817H13.9357L13.9268 15.1067H15.8153V13.4567H13.9125L13.9035 12.4817H15.8153V10.8317H13.8975V9.85667H15.8153V8.20667H13.8975V7.23167H15.8153V5.58167H13.8975V4.08167H21.7057V19.1484Z" fill="#1890FF"/>
            <path d="M16.8652 5.5791H20.1075V7.2291H16.8652V5.5791ZM16.8652 8.20485H20.1075V9.85485H16.8652V8.20485ZM16.8652 10.8306H20.1075V12.4806H16.8652V10.8306ZM16.8652 13.4564H20.1075V15.1064H16.8652V13.4564ZM16.8652 16.0821H20.1075V17.7321H16.8652V16.0821Z" fill="#1890FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.76007 8.00433L6.36957 7.91208L7.38132 10.6938L8.57682 7.79733L10.1863 7.70508L8.23182 11.6546L10.1863 15.6138L8.48457 15.4991L7.33557 12.4811L6.18582 15.3843L4.62207 15.2463L6.43857 11.7491L4.76007 8.00433Z" fill="white"/>
          </svg>
        </button>
        <button @click="modalSettings=!modalSettings">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
            <rect x="0.5" y="0.5" width="45" height="45" rx="4.5" stroke="#D9D9D9"/>
            <rect x="14" y="16" width="6" height="6" rx="2" stroke="#D9D9D9" stroke-width="2"/>
            <path d="M20 19H31.25" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round"/>
            <rect width="6" height="6" rx="2" transform="matrix(-1 0 0 1 31.25 25)" stroke="#D9D9D9" stroke-width="2"/>
            <path d="M25.25 28H14" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="abc-title" v-if="isABC">
      ABC анализ
    </div>
    <a-table :columns="columns" :data-source="dataSource" row-key="key" :scroll="{ x: 1500 }">
      <template #expanded-row="{ record }">
        <p>{{ record.description }}</p>
      </template>
    </a-table>
    <app-modal  v-if="modalSettings" @close="modalSettings=!modalSettings" >
      <template v-slot>
        <app-title
            size="S"
            tag="h5"
        >
          Настройка столбцов
        </app-title>
        <app-checbox :type="1">
          Выбрать всё
        </app-checbox>
        <hr>
        <div class="grid">
          <app-checbox :type="1" v-for="chec in 16" :key="chec">
            Артикул поставщика
          </app-checbox>
        </div>
        <div class="row-btns"  >
          <app-button :text="'Применить'" :type="2"></app-button>
          <app-button :text="'Отменить'" :type="3"></app-button>
        </div>

      </template>
    </app-modal>
  </div>
</template>

<script lang="jsx">
import { defineComponent } from 'vue';
import AppInput from "@/components/UI/app-input.vue";
import AppSelect from "@/components/UI/app-select.vue";
import AppModal from "@/components/UI/app-modal.vue";
import AppTitle from "@/components/UI/app-title.vue";
import AppChecbox from "@/components/UI/app-checbox.vue";
import AppButton from "@/components/UI/app-button.vue";

export default defineComponent({
  components: {AppButton, AppChecbox, AppTitle, AppModal, AppSelect, AppInput},
  props:{
    isABC:{
      type:Boolean,
      delete:false
    }
  },
  data() {
    return {
      search:null,
      modalSettings:false,
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
      ],
      columns: [
        {
          title: 'Название (арт.)',
          key: 'name',
          customRender: () => {
            return {
              children: (
                  <div class="art">
                    <div style="width: 35px; height: 35px; flex-shrink: 0; border-radius: 5px; background: #EEE;"></div>
                    <div>
                      <p>Платье женское чёрное 48-50</p>
                      <span>ji-lounge01-black</span>
                    </div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <g clip-path="url(#clip0_371_1927)">
                          <path d="M9.83078 2.42774C10.727 1.52774 12.0383 1.50899 12.7639 2.23774C13.4914 2.96774 13.472 4.28774 12.5745 5.18774L11.0601 6.70836C10.9749 6.79689 10.9278 6.91537 10.929 7.03827C10.9303 7.16118 10.9797 7.27869 11.0668 7.36548C11.1538 7.45227 11.2715 7.5014 11.3944 7.50229C11.5173 7.50318 11.6356 7.45576 11.7239 7.37024L13.2389 5.84961C14.4333 4.65024 14.5833 2.73586 13.4283 1.57586C12.272 0.415239 10.3614 0.566489 9.16578 1.76586L6.13703 4.80774C4.94265 6.00711 4.79265 7.92149 5.94765 9.08086C5.99079 9.12572 6.04243 9.16155 6.09956 9.18624C6.15668 9.21093 6.21816 9.224 6.28039 9.22468C6.34262 9.22536 6.40437 9.21365 6.46203 9.19021C6.51968 9.16678 6.57209 9.1321 6.6162 9.0882C6.66032 9.04429 6.69524 8.99204 6.71895 8.9345C6.74265 8.87695 6.75466 8.81526 6.75427 8.75303C6.75388 8.69079 6.7411 8.62926 6.71668 8.57201C6.69226 8.51477 6.65668 8.46296 6.61203 8.41961C5.88453 7.68961 5.90453 6.36961 6.8014 5.46961L9.83078 2.42774Z" fill="#1890FF"/>
                          <path d="M9.05292 5.91912C8.96507 5.83102 8.84582 5.78143 8.7214 5.78125C8.59698 5.78107 8.47759 5.83033 8.38949 5.91818C8.30138 6.00604 8.25179 6.12529 8.25162 6.24971C8.25144 6.37413 8.3007 6.49352 8.38855 6.58162C9.11605 7.31162 9.09667 8.631 8.19917 9.53162L5.1698 12.5729C4.27292 13.4729 2.96167 13.4916 2.23605 12.7629C1.50855 12.0329 1.52855 10.7129 2.42542 9.81287L3.94042 8.29225C3.98388 8.24862 4.01832 8.19687 4.04178 8.13993C4.06524 8.083 4.07725 8.022 4.07714 7.96043C4.07702 7.89885 4.06478 7.8379 4.04111 7.78105C4.01743 7.72421 3.9828 7.67258 3.93917 7.62912C3.89555 7.58566 3.84379 7.55122 3.78686 7.52776C3.72993 7.50431 3.66893 7.49229 3.60735 7.49241C3.54578 7.49253 3.48482 7.50477 3.42798 7.52844C3.37113 7.55211 3.31951 7.58675 3.27605 7.63037L1.76105 9.151C0.566674 10.351 0.416674 12.2647 1.57167 13.4247C2.72792 14.586 4.63855 14.4341 5.83417 13.2347L8.86355 10.1929C10.0579 8.99412 10.2079 7.0785 9.05292 5.91912Z" fill="#1890FF"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_371_1927">
                            <rect width="15" height="15" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
              ),
            };
          },
        },
        {
          title: 'По выручке',
          dataIndex: 'revenue',
          key: 'revenue',
          customRender: () => {
            return {
              children: (
                  <div class="revenue">
                     12
                  </div>
              ),
            };
          },
          sorter: (a, b) => a.strategy.localeCompare(b.strategy)
        },
        {
          title: 'По прибыли',
          dataIndex: 'profits',
          key: 'profits',
          customRender: () => {
            return {
              children: (
                  <div class="profits">
                   15
                  </div>
              ),
            };
          },
          sorter: (a, b) => a.strategy.localeCompare(b.strategy)
        },
        {
          title: 'По продажам',
          dataIndex: 'sales',
          key: 'sales',
          customRender: () => {
            return {
              children: (
                  <div class="sales">
                   36
                  </div>
              ),
            };
          },
          sorter: (a, b) => a.strategy.localeCompare(b.strategy)
        },
        {
          title: 'Суммарный',
          dataIndex: 'Total',
          key: 'Total',
          customRender: () => {
            return {
              children: (
                  <div class="Total">
                     70
                  </div>
              ),
            };
          },
          sorter: (a, b) => a.strategy.localeCompare(b.strategy)
        },


        { title: 'Стратегия', dataIndex: 'strategy', key: 'strategy', sorter: (a, b) => a.strategy.localeCompare(b.strategy) },
        { title: 'ABC', dataIndex: 'abc', key: 'abc', sorter: (a, b) => a.abc.localeCompare(b.abc) },
        { title: 'Ост.WB(шт.)', dataIndex: 'stock', key: 'stock', sorter: (a, b) => a.stock - b.stock },
        { title: 'Прибыль ₽', dataIndex: 'profit', key: 'profit', sorter: (a, b) => a.profit - b.profit },
        { title: 'ROI товара %', dataIndex: 'roi', key: 'roi', sorter: (a, b) => a.roi - b.roi },
        { title: 'Прибыль %', dataIndex: 'profitPercentage', key: 'profitPercentage', sorter: (a, b) => a.profitPercentage - b.profitPercentage },
        { title: 'Новая скидка %', dataIndex: 'newDiscount', key: 'newDiscount', sorter: (a, b) => a.newDiscount - b.newDiscount },
        { title: '% изм. скидки', dataIndex: 'discountChange', key: 'discountChange', sorter: (a, b) => a.discountChange - b.discountChange },
        { title: 'Текущая цена до скидк', dataIndex: 'currentPrice', key: 'currentPrice', sorter: (a, b) => a.currentPrice - b.currentPrice },
        { title: 'Текущая цена до скидк', dataIndex: 'currentPrice', key: 'currentPrice', sorter: (a, b) => a.currentPrice - b.currentPrice },
        { title: 'Текущая цена до скидк', dataIndex: 'currentPrice', key: 'currentPrice', sorter: (a, b) => a.currentPrice - b.currentPrice },
        { title: 'Текущая цена до скидк', dataIndex: 'currentPrice', key: 'currentPrice', sorter: (a, b) => a.currentPrice - b.currentPrice },
      ],
      dataSource: [
        { key: 1, name: 'Товар 111', strategy: 'Стратегия A', abc: 'A', stock: 100, profit: 5000, roi: 15, profitPercentage: 10, newDiscount: 5, discountChange: 3, currentPrice: 100, someOtherText: 'ji-lounge01-black' },
        { key: 1, name: 'Товар 1', strategy: 'Стратегия A', abc: 'A', stock: 100, profit: 5000, roi: 15, profitPercentage: 10, newDiscount: 5, discountChange: 3, currentPrice: 100 },
        { key: 2, name: 'Товар 2', strategy: 'Стратегия B', abc: 'B', stock: 50, profit: 3000, roi: 10, profitPercentage: 8, newDiscount: 7, discountChange: -1, currentPrice: 200 },
        { key: 3, name: 'Товар 3', strategy: 'Стратегия C', abc: 'C', stock: 200, profit: 8000, roi: 20, profitPercentage: 12, newDiscount: 8, discountChange: 2, currentPrice: 150 },
        { key: 4, name: 'Товар 4', strategy: 'Стратегия D', abc: 'D', stock: 150, profit: 6000, roi: 18, profitPercentage: 11, newDiscount: 4, discountChange: 1, currentPrice: 120 },
        { key: 5, name: 'Товар 5', strategy: 'Стратегия E', abc: 'E', stock: 80, profit: 4000, roi: 12, profitPercentage: 9, newDiscount: 6, discountChange: -2, currentPrice: 180 },
        { key: 6, name: 'Товар 6', strategy: 'Стратегия F', abc: 'F', stock: 120, profit: 7000, roi: 16, profitPercentage: 10, newDiscount: 9, discountChange: 5, currentPrice: 160 },
        { key: 7, name: 'Товар 7', strategy: 'Стратегия G', abc: 'G', stock: 180, profit: 9000, roi: 22, profitPercentage: 14, newDiscount: 10, discountChange: 4, currentPrice: 140 },

      ],
    };
  }
});
</script>

<style  >
.client-table{
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  margin-top: 30px;
  padding: 20px;
}
.client-table .ant-table-cell {
  white-space: nowrap;
}
.client-table   table   thead   tr > th {
  min-width: 150px !important;
}
.client-table table {
  max-height: 200px; /* Максимальная высота таблицы */
  overflow-y: auto; /* Включение вертикального скролла */
}
.client-table table .custom-cell {
  display: flex;
  align-items: center;
}

.client-table table .block {
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #EEE;
}
.client-table table .art{
  display: flex;
  align-items: center;
  gap: 5px;
}
.client-table table .art p{
  margin-bottom: 0;
  color: #1890FF;
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 0;
}
.client-table table .art a{
  margin-left: 15px;
}

.client-table table .art input{
  margin-right: 100px;
}
.client-table    .tools{
  display: grid;
  grid-template-columns: 690px auto;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.client-table  .tools .buttons{
  display: grid;
  grid-template-columns:  158px 46px 46px 46px;
  gap: 10px;
}
.client-table  .tools .buttons button{
  background: white;
  border-radius: 5px;
  border: 1px solid #D9D9D9;
  height: 46px;
  cursor: pointer;
}
.client-table  .tools .buttons button:last-child{
  border: 1px solid #D9D9D9;
}
.client-table  .tools .buttons button:last-child svg{
  width: 100%;
  height: 100%;
}
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
hr{
  opacity: 0.1;
  margin: 10px 0px;
  background: #000;
}
.row-btns{
  margin-top: 20px;
  display: flex;
  gap: 20px;
}
.abc-title{
  color: #1C1C1C;
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
  border-radius: 5px 5px 0px 0px;
  border-top: 1px solid #D9D9D9;
  border-right: 1px solid #D9D9D9;
  border-left: 1px solid #D9D9D9;
  background: #FFF;
  width: 439px;
  padding: 12px;
  margin: 0 auto;
  text-align: center;
}

.ant-table-cell{
  position: relative;
}
.revenue{
  background: #C3FF53;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  height: 100%;
  padding: 16px 16px;
  align-items: center;
  justify-content: center;
}
.profits{
  background: #C3FF53;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  height: 100%;
  padding: 16px 16px;
  align-items: center;
  justify-content: center;
}
.sales{
  background: #C3FF53;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  height: 100%;
  padding: 16px 16px;
  align-items: center;
  justify-content: center;
}
.Total{
  background: #8BC673;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  height: 100%;
  padding: 16px 16px;
  align-items: center;
  justify-content: center;
}
</style>