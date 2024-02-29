<template>
  <apexchart
    type="line"
    height="100%"
    :options="chartOptions"
    :series="seriesOptions"
  ></apexchart>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Chart',
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
    seriesOptions: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
