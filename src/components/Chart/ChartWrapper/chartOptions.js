const zoomOptions = {
  zoom: {
    enabled: true,
    type: 'x',
    autoScaleYaxis: false,
    zoomedArea: {
      fill: {
        color: '#90CAF9',
        opacity: 0.4,
      },
      stroke: {
        color: '#0D47A1',
        opacity: 0.4,
        width: 1,
      },
    },
  },
}

const xAxisOptions = {
  xaxis: {
    labels: {
      show: false,
    },
  },
}

const yAxisOptions = {
  yaxis: {
    title: {
      text: 'Y-Axis Title',
    },
    labels: {
      show: true,
    },
  },
}

const dataLabelsOptions = {
  dataLabels: {
    enabled: false,
  },
}

export const chartOptions = {
  chart: {
    group: 'dataDashboard',
  },
  dataLabels: dataLabelsOptions.dataLabels,
  xaxis: xAxisOptions.xaxis,
  yaxis: yAxisOptions.yaxis,
  zoomOptions: zoomOptions.zoom,
}
