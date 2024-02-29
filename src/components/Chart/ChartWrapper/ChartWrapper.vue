<template>
  <v-container fill-height fluid class="d-flex flex-column pa-0 ma-0">
    <!-- Top Row (Flex to Fill Space) -->
    <div class="flex-grow-1 w-100">
      <!-- Your content for the top row goes here -->

      <div class="fill-height">
        <Chart />
      </div>
    </div>

    <!-- Bottom Row (Fixed Height) -->
    <div class="flex-shrink-0 w-100" :style="{ height: bottomRowHeight }">
      <Chart />
    </div>
  </v-container>
</template>

<script>
import Chart from '@/components/Chart/Chart.vue'
export default {
  name: 'ChartWrapper',
  components: {
    Chart,
  },
  props: {
    bottomRowHeight: {
      type: String,
      default: '10vh', // Default height for the bottom row
    },
  },
}
</script>

<style scoped>
.topChartWrapper {
  width: 100%;
}

.bottomChartWrapper {
  width: 100%;
}
</style>
