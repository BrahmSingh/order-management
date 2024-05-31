function getChartColorsArray(r) {
    r = $(r).attr("data-colors");
    return (r = JSON.parse(r)).map(function(r) {
        r = r.replace(" ", "");
        if (-1 == r.indexOf("--"))
            return r;
        r = getComputedStyle(document.documentElement).getPropertyValue(r);
        return r || void 0
    })
}
var minichart1Colors = getChartColorsArray("#mini-chart1")
  , options = {
    series: [{
        data: [2, 10, 18, 22, 36, 15, 47, 75, 65, 19, 14, 2, 47, 42, 15]
    }],
    chart: {
        type: "line",
        height: 50,
        sparkline: {
            enabled: !0
        }
    },
    colors: minichart1Colors,
    stroke: {
        curve: "smooth",
        width: 2
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(r) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
}
  , chart = new ApexCharts(document.querySelector("#mini-chart1"),options);
chart.render();
var minichart2Colors = getChartColorsArray("#mini-chart2")
  , options = {
    series: [{
        data: [15, 42, 47, 2, 14, 19, 65, 75, 47, 15, 42, 47, 2, 14, 12]
    }],
    chart: {
        type: "line",
        height: 50,
        sparkline: {
            enabled: !0
        }
    },
    colors: minichart2Colors,
    stroke: {
        curve: "smooth",
        width: 2
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(r) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
};
(chart = new ApexCharts(document.querySelector("#mini-chart2"),options)).render();

var minichart3Colors = getChartColorsArray("#mini-chart3"),
options = {
    series: [{
        data: [47, 15, 2, 67, 22, 20, 36, 60, 60, 30, 50, 11, 12, 3, 8]
    }],
    chart: {
        type: "line",
        height: 50,
        sparkline: {
            enabled: !0
        }
    },
    colors: minichart3Colors,
    stroke: {
        curve: "smooth",
        width: 2
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(r) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
};
(chart = new ApexCharts(document.querySelector("#mini-chart3"),options)).render();

var minichart4Colors = getChartColorsArray("#mini-chart4"),
options = {
    series: [{
        data: [47, 15, 2, 67, 22, 20, 36, 60, 60, 30, 50, 11, 12, 3, 8]
    }],
    chart: {
        type: "line",
        height: 50,
        sparkline: {
            enabled: !0
        }
    },
    colors: minichart4Colors,
    stroke: {
        curve: "smooth",
        width: 2
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(r) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
};
(chart = new ApexCharts(document.querySelector("#mini-chart4"),options)).render();

var chartCircle = getChartColorsArray("#wallet-balance"),
options = {
    chart: {
      height: 180,
      type: 'radialBar',
    },
    colors: [ '#FFB900','#00C8E1', '#2c7be5', '#e63757'],
    labels: ['q4'],
    series: [30, 35, 45, 55],
    labels: ['Initiated', 'Approved', 'PO Created', 'On-hold'],
    theme: {
      monochrome: {
        enabled: false
      }
    },
    plotOptions: {
      radialBar: {
        offsetY: -30
      }
    },
    legend: {
      show: true,
      position: 'left',
      containerMargin: {
        right: 0
      }
    },
    title: {
      text: 'PO Status'
    }
  };
  (chart = new ApexCharts(document.querySelector("#wallet-balance"),options)).render();


var minichart4Colors = getChartColorsArray("#mini-chart4")
  , options = {
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14, 2, 47, 42, 15]
    }],
    chart: {
        type: "line",
        height: 50,
        sparkline: {
            enabled: !0
        }
    },
    colors: minichart4Colors,
    stroke: {
        curve: "smooth",
        width: 2
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(r) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
};

var barchartColors = getChartColorsArray("#invested-overview")
var options = {
    series: [{
    data: [100, 50, 10]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  colors: [ '#2c7be5'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['No Difference', 'B/W $5k to $15k', 'Less than $5k'
    ],
  }
  };
(chart = new ApexCharts(document.querySelector("#invested-overview"),options)).render();


$(function () {
    $('#container-chart').highcharts({
        chart: {
            type: 'timeline'
          },
          colors: [ '#e63757','#FFB900','#2c7be5','#f5803d','#00C8E1'],
          xAxis: {
            visible: false
          },
          yAxis: {
            visible: false
          },
          title: {
            text: ''
          },
          series: [{
            dataLabels: {
              //connectorColor: 'silver',
              connectorWidth: 2
            },
            data: [{
              name: '0.2M',
              label: 'Outstanding Order Intake'
            }, {
              name: '0.4M',
              label: 'Export Hold'
            }, {
                name: '1.3M',
                label: 'Pricing Hold'
            }, {
                name: '4M',
                label: 'YOY Pricing'
            },
            {
                name: '12M',
                label: 'unencumbered'
            }]
          }]
    });
});

$(function () {
    $('#sentiment-chart').highcharts({

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '50%'
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '110%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        tickPixelInterval: 30,
        tickPosition: 'inside',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            enabled: false,
            distance: 20,
            style: {
                fontSize: '14px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 0,
            to: 30,
            color: '#DF5353', // red
            thickness: 20,
            borderRadius: '50%'
        }, {
            from: 30,
            to: 60,
            color: '#DDDF0D', // yellow
            thickness: 20,
            borderRadius: '50%'
        }, {
            from: 60,
            to: 100,
            color: '#55BF3B', // green
            thickness: 20,
            borderRadius: '50%'
        }]
    },

    series: [{
        name: 'Sentiment',
        data: [50],
        tooltip: {
            valueSuffix: ' '
        },
        dataLabels: {
            format: '',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '16px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]

});
});

