const zoomOptions = {
  zoom: {
    enabled: true,
    type: 'x',
    autoScaleYaxis: true,
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
    zoomOptions: zoomOptions.zoom,
  },
  dataLabels: dataLabelsOptions.dataLabels,
  xaxis: xAxisOptions.xaxis,
  yaxis: yAxisOptions.yaxis,
  stroke: {
    colors: ['#008FFB'],
    width: 1,
  },
  tooltip: {
    enabled: true,
    shared: true,
  },
}
