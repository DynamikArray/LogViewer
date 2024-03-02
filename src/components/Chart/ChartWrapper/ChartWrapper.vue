<template>
  <v-container fill-height fluid class="d-flex flex-column pa-0 ma-0">
    <splitpanes horizontal style="height: 100%">
      <pane size="75">
        <Chart
          v-if="hasLogsToView"
          class="topChartWrapper"
          :chartOptions="rpmChartOptions"
          :seriesData="rpmSeriesData"
        />
        <div v-else class="text-center">
          <p class="text-h3">No Log File Selected</p>
          <p class="text-h5">
            Start by uploading a log file using the form in the drawer on the
            right
          </p>
        </div>
      </pane>

      <pane size="25">
        <Chart
          v-if="hasLogsToView"
          class="topChartWrapper"
          :chartOptions="throttleChartOptions"
          :seriesData="throttleSeriesData"
        />
      </pane>
    </splitpanes>
  </v-container>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

import { chartOptions } from '@/components/Chart/ChartWrapper/chartOptions.js'
import Chart from '@/components/Chart/Chart/Chart.vue'
export default {
  name: 'ChartWrapper',
  components: {
    Chart,
    Splitpanes,
    Pane,
  },
  data: () => ({
    chartOptions: chartOptions,
  }),
  props: {
    bottomRowHeight: {
      type: String,
      default: '10vh', // Default height for the bottom row
    },
  },
  computed: {
    hasLogsToView: function () {
      return this.$store.getters.hasLogsToView
    },
    rpmSeriesData: function () {
      return [
        {
          name: 'Motor Rpm',
          data: this.$store.getters.rpmData,
        },
      ]
    },
    throttleSeriesData: function () {
      return [
        {
          name: 'Throttle Input',
          data: this.$store.getters.throttleData,
        },
      ]
    },
    throttleChartOptions: function () {
      return {
        ...chartOptions,
        chart: {
          id: 'throttle',
          group: 'dataDashboard',
        },
        yaxis: {
          ...chartOptions.yaxis,
          title: {
            text: 'Throttle',
          },
          min: this.getShowFullBrakeValues ? -100 : -30,
          max: 130,
        },
      }
    },
    rpmChartOptions: function () {
      return {
        ...chartOptions,
        zoomOptions: {
          ...chartOptions.zoomOptions,
        },
        chart: { id: 'rpm', group: 'dataDashboard' },
        yaxis: {
          ...chartOptions.yaxis,
          title: {
            text: 'RPM',
          },
        },
      }
    },
    getShowFullBrakeValues: function () {
      return this.$store.getters.showFullBrakeValues
    },
  },
  methods: {
    closeModal() {
      this.modal = false
    },
  },
}
</script>

<style>
.topChartWrapper {
  width: 100%;
}

.bottomChartWrapper {
  width: 100%;
}

.splitpanes__pane {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
}

.splitpanes {
  background-color: #f8f8f8;
}

.splitpanes__splitter {
  background-color: #ccc;
  position: relative;
}
.splitpanes__splitter:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.4s;
  background-color: rgba(255, 0, 0, 0.3);
  opacity: 0;
  z-index: 1;
}
.splitpanes__splitter:hover:before {
  opacity: 1;
}
.splitpanes--vertical > .splitpanes__splitter:before {
  left: -30px;
  right: -30px;
  height: 100%;
}
.splitpanes--horizontal > .splitpanes__splitter:before {
  top: -30px;
  bottom: -30px;
  width: 100%;
}
</style>
