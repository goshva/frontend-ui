<template>
  <div class="head-table">
    <app-title
        size="S"
        tag="h5"
    >
      Данные по заказам
    </app-title>
    <div class="table">
      <div class="days">
        <span v-for="(day, index) in daysOfWeek" :key="index"  >{{ day }}</span>
      </div>
      <div class="table-grid">
        <div class="row" v-for="(row, rowIndex) in 7" :key="rowIndex">
          <div class="cell" v-for="column in 24" :key="column" :style="{ backgroundColor: columnColors[column - 1] }">
            {{ column }}
          </div>
        </div>
        <div class="time">
          <span v-for="(time, index) in timesOfDay" :key="index"  >{{ time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from "@/components/UI/app-title.vue";

export default {
  name: "head-table",
  components: { AppTitle },
  data() {
    return {
      daysOfWeek: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      timesOfDay: Array.from({ length: 24 }, (_, i) => `${i < 10 ? '0' + i : i}:01`),
      columnColors: ['#E5B442', '#7BD14E', '#F1EE42', '#B9E64A', '#B9E64A', '#7BD14E', '#EF6C44', '#7BD14E', '#F1EE42', '#B9E64A', '#B9E64A', '#7BD14E', '#EF6C44','#E5B442', '#7BD14E', '#F1EE42', '#B9E64A', '#B9E64A', '#7BD14E', '#EF6C44', '#7BD14E', '#F1EE42', '#B9E64A', '#B9E64A', '#7BD14E', '#EF6C44',
        ],
    };
  }
};
</script>


<style scoped>
.head-table{
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
}
.days{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  color: #1C1C1C66;
  text-align: center;
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}
.table{
  display: grid;
  grid-template-columns: 35px 1fr;
  margin-top: 15px;
}
.table .row{
   display: grid;
  grid-template-columns: repeat(24,1fr);
  text-align: center;
}
.time{
  display: grid;
  grid-template-columns: repeat(24,1fr);
  text-align: center;
  color: #1C1C1C66;
  text-align: center;
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
}
.table .row .cell{
   padding: 11px 0px;
  color: rgba(28, 28, 28, 1);
  text-align: center;
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}
</style>