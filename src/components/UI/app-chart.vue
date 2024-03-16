<template>
  <section class="chart">
    <div class="chart-wrapper">
      <h5>{{ title }}</h5>
      <p>{{ label }}</p>
      <div>
        <canvas v-if="type === 'line'" class="lineChart" ref="lineChart"></canvas>
        <canvas v-else-if="type === 'doughnut'" class="doughnutChart" ref="doughnutChart"></canvas>
        <canvas v-else-if="type === 'bar'" class="barChart" ref="barChart"></canvas>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'LineChart',
  props: {
    type: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
  },
  mounted() {
    if (this.type === 'line') {
      this.renderLineChart();
    } else if (this.type === 'doughnut') {
      this.renderDoughnutChart();
    } else if (this.type === 'bar') {
      this.renderBarChart();
    }
  },
  data() {
    return {
      chart: null,
      lineChartData: {
        labels: ['Метка 1', 'Метка 2', 'Метка 3', 'Метка 4', 'Метка 5'],
        datasets: [
          {
            label: 'Линия 1',
            borderColor: 'rgb(75, 192, 192)',
            data: [10, 20, 30, 40, 50],
            fill: true,
            tension: 0.4,
            backgroundColor: "rgba(24, 144, 255, 0.30)"
          },
          {
            label: 'Линия 2',
            borderColor: 'rgb(255, 99, 132)',
            data: [30, 40, 10, 20, 30],
            fill: true,
            tension: 0.2,
            backgroundColor:  "rgba(24, 144, 255, 0.30)"
          },
          {
            label: 'Линия 3',
            borderColor: 'rgb(255, 205, 86)',
            data: [50, 10, 30, 20, 40],
            fill: true,
            tension: 0.6,
            backgroundColor: "rgba(24, 144, 255, 0.30)"
          },
        ],
      },
      doughnutChartData: {
        labels: ['Категория 1', 'Категория 2', 'Категория 3'],
        datasets: [
          {
            data: [30, 40, 30],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)'],
          },
        ],
      },
      barChartData: {
        labels: ['Бар 1', 'Бар 2', 'Бар 3', 'Бар 4', 'Бар 5'],
        datasets: [
          {
            label: 'Набор данных',
            backgroundColor: '#1890FF',
            data: [30, 40, 10, 20, 30],
          },
        ],
      },
    };
  },
  methods: {
    renderLineChart() {
      const ctx = this.$refs.lineChart.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: this.lineChartData,
        options: this.getChartOptions(),
      });
    },
    renderDoughnutChart() {
      const ctx = this.$refs.doughnutChart.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: this.doughnutChartData,
        options: this.getChartOptions(),
      });
    },
    renderBarChart() {
      const ctx = this.$refs.barChart.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: this.barChartData,
        options: this.getChartOptions(),
      });
    },
    getChartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            display: this.type !== 'bar', // Скрыть легенду для Bar Chart
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      };
    },
  },
};
</script>

<style scoped>
.chart {
  padding: 20px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  margin-top: 30px;
}
p {
  color: rgba(28, 28, 28, 0.50);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 6px;
  margin-bottom: 20px;
}

.lineChart,
.doughnutChart,
.barChart {
  width: 216px;
  height: 216px;
}
</style>
