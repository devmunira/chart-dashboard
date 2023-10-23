import Highcharts from 'highcharts';
export const BARCHARTINFOUPDATE = 'Value Must be Spareted By Coma and Also Should 12 Number Value';
export const MENUS = [{title : 'Dashboard',link : '/dashboard'}];
export const BARCHARTBREADCRUMBE = [...MENUS , {title : 'Bar Chart',link : '/bar-chart'}]
export const AREACHARTBREADCRUMBE = [...MENUS , {title : 'Area Range Chart',link : '/area-range-chart'}]
export const BOXCHARTBREADCRUMBE = [...MENUS , {title : 'Box & Whisker Plot',link : '/box-whisker-plot'}]
export const SCATERRCHARTBREADCRUMBE = [...MENUS , {title : 'Scater Chart',link : '/scater-chart'}]
export const CHARTS = ['Bar Chart' , 'Box Whisker Plot' , 'Area Range Chart' , 'Scater Chart']

export const BARCHART =  {
  accessibility: {
      enabled: false,
  },
  chart: {
      type: 'column',
  },
  title: {
      text: 'Monthly Average Rainfall'
  },
  subtitle: {
      text: 'Source: WorldClimate.com'
  },
  contextMenu: {
      items: {
        viewFullscreen: {
          textKey: 'viewFullscreen',
          onclick: function () {
            this.fullscreen.toggle();
          },
        },
        downloadPNG: {
          textKey: 'downloadPNG',
          onclick: function () {
            this.exportChart();
          },
        },
        // Add other context menu items as needed
      },
    },
  xAxis: {
      categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Rainfall (mm)'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: 'Tokyo',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
          194.1, 95.6, 54.4]

  }, {
      name: 'New York',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
          106.6, 92.3]

  }, {
      name: 'London',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
          51.2]

  }, {
      name: 'Berlin',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
          51.1]

  }]
}

export const BOXCHART = {
  chart: {
    type: 'boxplot',
  },
  title: {
    text: 'Highcharts Box Plot Example',
  },
  subtitle: {
    text: 'Source: <a ' +
        'href="https://www.ssb.no/energi-og-industri/energi/statistikk/elektrisitet/artikler/lavere-kraftproduksjon"' +
        ' target="_blank">SSB</a>',
    align: 'center'
},
  legend: {
    enabled: false,
  },
  xAxis: {
    categories: ['1', '2', '3', '4', '5'],
    title: {
      text: 'Experiment No.',
    },
  },
  yAxis: {
    title: {
      text: 'Observations',
    },
    plotLines: [
      {
        value: 932,
        color: 'red',
        width: 1,
        label: {
          text: 'Theoretical mean: 932',
          align: 'center',
          style: {
            color: 'gray',
          },
        },
      },
    ],
  },
  series: [
    {
      name: 'Observations',
      data: [
        [760, 801, 848, 895, 965],
        [733, 853, 939, 980, 1080],
        [714, 762, 817, 870, 918],
        [724, 802, 806, 871, 950],
        [834, 836, 864, 882, 910],
      ],
      tooltip: {
        headerFormat: '<em>Experiment No {point.key}</em><br/>',
      },
    },
    {
      name: 'Outliers',
      color: Highcharts.getOptions().colors[0],
      type: 'scatter',
      data: [
        [0, 644],
        [4, 718],
        [4, 951],
        [4, 969],
      ],
      marker: {
        fillColor: 'white',
        lineWidth: 1,
        lineColor: Highcharts.getOptions().colors[0],
      },
      tooltip: {
        pointFormat: 'Observation: {point.y}',
      },
    },
  ],
}

export const AREACHART = {
  chart: {
      type: 'area'
  },
  title: {
      text: 'Production, consumption and trade surplus of electrical power',
      align: 'center'
  },
  subtitle: {
      text: 'Source: <a ' +
          'href="https://www.ssb.no/energi-og-industri/energi/statistikk/elektrisitet/artikler/lavere-kraftproduksjon"' +
          ' target="_blank">SSB</a>',
      align: 'center'
  },
  xAxis: {
      categories: ['Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020', 'Q2 2020',
          'Q3 2020', 'Q4 2020', 'Q1 2021', 'Q2 2021', 'Q3 2021']
  },
  yAxis: {
      title: {
          text: 'TWh'
      }
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Total production',
      data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7
      ]
  }, {
      name: 'Gross consumption',
      data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5
      ]
  }, {
      name: 'Trade surplus',
      data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2]
  }]
}

export const SCATERCHART = {
  title: {
      text: 'Scatter plot with regression line'
  },
  subtitle: {
    text: 'Source: <a ' +
        'href="https://www.ssb.no/energi-og-industri/energi/statistikk/elektrisitet/artikler/lavere-kraftproduksjon"' +
        ' target="_blank">SSB</a>',
    align: 'center'
},
  xAxis: {
      min: -0.5,
      max: 5.5
  },
  yAxis: {
      min: 0
  },
  series: [{
      type: 'line',
      name: 'Regression Line',
      data: [[0, 1.11], [5, 4.51]],
      marker: {
          enabled: false
      },
      states: {
          hover: {
              lineWidth: 0
          }
      },
      enableMouseTracking: false
  }, {
      type: 'scatter',
      name: 'Observations',
      data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
      marker: {
          radius: 4
      }
  }]
}