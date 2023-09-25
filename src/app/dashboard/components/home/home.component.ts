import { AfterViewInit, Component } from '@angular/core';
declare const ApexCharts: any;
declare const Chart: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.function1();
    this.function2();
    this.function3();
  }

  function1(){
    var options = {
      series: [
          {
              type: 'line',
              name: 'Profit',
              data: [
                  {
                      x: 'Jan',
                      y: 100
                  },
                  {
                      x: 'Feb',
                      y: 210
                  },
                  {
                      x: 'Mar',
                      y: 180
                  },
                  {
                      x: 'Apr',
                      y: 454
                  },
                  {
                      x: 'May',
                      y: 230
                  },
                  {
                      x: 'Jun',
                      y: 320
                  },
                  {
                      x: 'Jul',
                      y: 656
                  },
                  {
                      x: 'Aug',
                      y: 830
                  },
                  {
                      x: 'Sep',
                      y: 350
                  },
                  {
                      x: 'Oct',
                      y: 350
                  },
                  {
                      x: 'Nov',
                      y: 210
                  },
                  {
                      x: 'Dec',
                      y: 410
                  }
              ]
          },
          {
              type: 'line',
              name: 'Revenue',
              chart: {
                  dropShadow: {
                      enabled: true,
                      // enabledOnSeries: true,
                      top: 5,
                      left: 0,
                      blur: 3,
                      color: '#000',
                      opacity: 0.1
                  }
              },
              data: [
                  {
                      x: 'Jan',
                      y: 180
                  },
                  {
                      x: 'Feb',
                      y: 620
                  },
                  {
                      x: 'Mar',
                      y: 476
                  },
                  {
                      x: 'Apr',
                      y: 220
                  },
                  {
                      x: 'May',
                      y: 520
                  },
                  {
                      x: 'Jun',
                      y: 780
                  },
                  {
                      x: 'Jul',
                      y: 435
                  },
                  {
                      x: 'Aug',
                      y: 515
                  },
                  {
                      x: 'Sep',
                      y: 738
                  },
                  {
                      x: 'Oct',
                      y: 454
                  },
                  {
                      x: 'Nov',
                      y: 525
                  },
                  {
                      x: 'Dec',
                      y: 230
                  }
              ]
          },
          {
              type: 'area',
              name: 'Sales',
              chart: {
                  dropShadow: {
                      enabled: true,
                      // enabledOnSeries: undefined,
                      top: 5,
                      left: 0,
                      blur: 3,
                      color: '#000',
                      opacity: 0.1
                  }
              },
              data: [
                  {
                      x: 'Jan',
                      y: 200
                  },
                  {
                      x: 'Feb',
                      y: 530
                  },
                  {
                      x: 'Mar',
                      y: 110
                  },
                  {
                      x: 'Apr',
                      y: 130
                  },
                  {
                      x: 'May',
                      y: 480
                  },
                  {
                      x: 'Jun',
                      y: 520
                  },
                  {
                      x: 'Jul',
                      y: 780
                  },
                  {
                      x: 'Aug',
                      y: 435
                  },
                  {
                      x: 'Sep',
                      y: 475
                  },
                  {
                      x: 'Oct',
                      y: 738
                  },
                  {
                      x: 'Nov',
                      y: 454
                  },
                  {
                      x: 'Dec',
                      y: 480
                  }
              ]
          }
      ],
      chart: {
          height: 350,
          animations: {
              speed: 500
          },
          dropShadow: {
              enabled: true,
              // enabledOnSeries: true,
              top: 8,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.1
          },
      },
      colors: ["rgb(132, 90, 223)", "rgba(35, 183, 229, 0.85)", "rgba(119, 119, 142, 0.05)"],
      dataLabels: {
          enabled: false
      },
      grid: {
          borderColor: '#f1f1f1',
          strokeDashArray: 3
      },
      stroke: {
          curve: 'smooth',
          width: [2, 2, 0],
          dashArray: [0, 5, 0],
      },
      xaxis: {
          axisTicks: {
              show: false,
          },
      },
      yaxis: {
          labels: {
              formatter: function (value:any) {
                  return "$" + value;
              }
          },
      },
      tooltip: {
          y: [{
              formatter: function(e:any) {
                  return void 0 !== e ? "$" + e.toFixed(0) : e
              }
          }, {
              formatter: function(e:any) {
                  return void 0 !== e ? "$" + e.toFixed(0) : e
              }
          }, {
              formatter: function(e:any) {
                  return void 0 !== e ? e.toFixed(0) : e
              }
          }]
      },
      legend: {
          show: true,
          customLegendItems: ['Profit', 'Revenue', 'Sales'],
          inverseOrder: true
      },
      title: {
          text: 'Revenue Analytics with sales & profit (USD)',
          align: 'left',
          style: {
              fontSize: '.8125rem',
              fontWeight: 'semibold',
              color: '#8c9097'
          },
      },
      markers: {
          hover: {
              sizeOffset: 5
          }
      }
  };
  document.getElementById('crm-revenue-analytics').innerHTML = '';
  var chart = new ApexCharts(document.querySelector("#crm-revenue-analytics"), options);
  chart.render();
  
  function revenueAnalytics() {
      chart.updateOptions({
          colors: ["rgba(" + 10 + ", 1)", "rgba(35, 183, 229, 0.85)", "rgba(119, 119, 142, 0.05)"],
      });
  }
  }

  function2(){
var chartInstance = new Chart(document.getElementById("leads-source"), {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'My First Dataset',
            data: [32, 27, 25, 16],
            backgroundColor: [
                'rgb(132, 90, 223)',
                'rgb(35, 183, 229)',
                'rgb(38, 191, 148)',
                'rgb(245, 184, 73)',
            ]
        }]
    },
    plugins: [{
        afterUpdate: function (chart:any) {
            const arcs = chart.getDatasetMeta(0).data;

            arcs.forEach(function (arc:any) {
                arc.round = {
                    x: (chart.chartArea.left + chart.chartArea.right) / 2,
                    y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                    radius: (arc.outerRadius + arc.innerRadius) / 2,
                    thickness: (arc.outerRadius - arc.innerRadius) / 2,
                    backgroundColor: arc.options.backgroundColor
                }
            });
        },
        afterDraw: (chart:any) => {
            const {
                ctx,
                canvas
            } = chart;

            chart.getDatasetMeta(0).data.forEach((arc:any) => {
                const startAngle = Math.PI / 2 - arc.startAngle;
                const endAngle = Math.PI / 2 - arc.endAngle;

                ctx.save();
                ctx.translate(arc.round.x, arc.round.y);
                ctx.fillStyle = arc.options.backgroundColor;
                ctx.beginPath();
                ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            });
        }
    }]
});


  }

  function3()
{
  var options = {
    series: [{
        name: "Earnings",
        data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
    }, {
        name: "Students",
        data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
    }],
    chart: {
        height: 340,
        type: "bar",
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1.1, 1.1],
        show: true,
        curve: ['smooth', 'smooth'],
    },
    grid: {
        borderColor: '#f3f3f3',
        strokeDashArray: 3
    },
    xaxis: {
        axisBorder: {
            color: 'rgba(119, 119, 142, 0.05)',
        },
    },
    legend: {
        show: false
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    markers: {
        size: 0
    },
    colors: ["rgb(132, 90, 223)", "#e9e9e9"],
    plotOptions: {
        bar: {
            columnWidth: "50%",
            borderRadius: 2,
        }
    },
};
document.getElementById('courses-earnings').innerHTML = ''
var chart1 = new ApexCharts(document.querySelector("#courses-earnings"), options);
chart1.render();
function earningsReport() {
    chart1.updateOptions({
        colors: ["rgb(" + 10 + ")", "#e9e9e9"],
    })
}
}
  
}
