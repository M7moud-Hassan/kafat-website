import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainDashoardService } from '../../services/main-dashoard.service';
declare const ApexCharts: any;
declare const Chart: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit,OnInit{
    data:any
    constructor(private service:MainDashoardService) {
        
        
    }
    ngOnInit(): void {
        this.loadData()
    }
    
  ngAfterViewInit(): void {
    this.function1();
    this.function2();
    this.function3();
  }

  loadData(){
this.service.statistics.getAll().subscribe(res=>{
    this.data=res.data
})
  }
month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  function1(){
  
    var options = {
      series: [
          {
              type: 'line',
              name: 'users',
              data:this.data.lastYearJoinedUsersCount.map((x:any)=>{
                return {
                    x:this.month[x.month-1],
                    y:x.count
                };
              })
          },
          {
              type: 'line',
              name: 'participants',
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
              data: this.data.participantsLastOneYearCount.map((x:any)=>{
                return {
                    x:this.month[x.month-1],
                    y:x.count
                };
              })
          },
          {
              type: 'area',
              name: 'activities',
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
              data: this.data.participantsLastOneYearCount.map((x:any)=>{
                return {
                    x:this.month[x.month-1],
                    y:x.count
                };
              })
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
    //   yaxis: {
    //       labels: {
    //           formatter: function (value:any) {
    //               return "n" + value;
    //           }
    //       },
    //   },
      tooltip: {
          y: [{
              formatter: function(e:any) {
                  return void 0 !== e ? "" + e.toFixed(0) : e
              }
          }, {
              formatter: function(e:any) {
                  return void 0 !== e ? "" + e.toFixed(0) : e
              }
          }, {
              formatter: function(e:any) {
                  return void 0 !== e ? e.toFixed(0) : e
              }
          }]
      },
      legend: {
          show: true,
          customLegendItems: ['users', 'participants', 'activities'],
          inverseOrder: true
      },
      title: {
          text: 'number users , participants and activities per every month ',
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
  
  }

  function2(){


  }

  function3()
{
  var options = {
    series: [{
        name: "المستخدمين",
        data: this.data.lastYearJoinedUsersCount.map((x:any)=>{
            return x.count
          }),
    }, {
        name: "المشاركين",
        data: this.data.participantsLastOneYearCount.map((x:any)=>{
            return x.count
          }),
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
    labels: this.data.lastYearJoinedUsersCount.map((x:any)=>{
        return this.month[x.month-1]
      }),
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
}

}


