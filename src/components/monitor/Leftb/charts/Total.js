import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import imgUrl from '@/assets/dataicon.png';

function Total(props) {
  const { HandleBusiness, messageLib, CallType } = props;
  const [options, setOptions] = useState({});
  const [options2, setOptions2] = useState({});
  const [options3, setOptions3] = useState({});
  useEffect(() => {
    if (HandleBusiness) {
      const name = HandleBusiness.map(item => {
        return item.handleDate;
      });

      const handleCount = HandleBusiness.map(item => {
        return item.handleCount;
      });

      const acceptCount = HandleBusiness.map(item => {
        return item.acceptCount;
      });
      setOptions({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
        legend: {
          data: ['受理量', '按通量'],
          right: 50,
          top:12,
          textStyle: {
            color: "#00eaff"
          },
          itemWidth: 12,
          itemHeight: 10,
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: name,
          
          axisLine: {
            lineStyle: {
              color: '#00eaff'
            }
          },
          axisLabel: {
            // interval: 0,
            rotate: 40,
            fontSize:20,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
        },

        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value} ',
            fontSize:20,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00eaff",
              width: 1,
              type: "solid"
            },
          },
          splitLine: {
            lineStyle: {
              color: "#00eaff",
            }
          }
        }],
        "dataZoom": [{
          "show": true,
          "height": 12,
          "xAxisIndex": [
            0
          ],
          bottom:'8%',
          "start": 10,
          "end": 80,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '150%',
          handleStyle:{
            color:"#d3dee5",

          },
          textStyle:{
            color:"#fff"},
          borderColor:"#90979c"
        }, {
          "type": "inside",
          "show": true,
          "height": 15,
          "start": 1,
          "end": 35
        }],
        series: [{
          name: '受理量',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#fccb05'
              }, {
                offset: 1,
                color: '#f5804d'
              }]),
              barBorderRadius: 12,
            },
          },
          data: handleCount
        },
          {
            name: '按通量',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#8bd46e'
                }, {
                  offset: 1,
                  color: '#09bcb7'
                }]),
                barBorderRadius: 11,
              }

            },
            data: acceptCount
          }]

      });
    } else {
      setOptions({});
    }

    if (messageLib) {
      const temp = messageLib.map(item => {
        return {
          name: item.name,
          value: item.value
        }
      });
      setOptions2({
        // backgroundColor: "#000833",
        // animation: true,
        series: [{
          type: 'pie',
          radius: [10, '55%'],
          center: ['50%', '50%'],
          startAngle:30,
          roseType: 'radius',

          color: ['#04f0c4', '#48d9ff', '#6ee624', '#8d14ff', '#bc10e0','#5c43fe'],

          data: temp,
          label: {
            normal: {
              formatter: "{b|{b}}\n {c|{c}  }\n {per|{d}%} ",
              backgroundColor: "rgba(255, 147, 38, 0)",
              borderColor: "transparent",
              borderRadius: 4,
              rich: {
                a: {
                 
                  lineHeight: 22,
                  align: "center"
                },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  
                  fontSize: 20,
                  lineHeight: 33
                },
                c: {
                  fontSize: 18,
                  color: "#eee"
                },
                per: {
                  
                  fontSize: 16,
                  padding: [5, 8],
                  borderRadius: 2
                }
              },
              textStyle: {
                color: "#fff",
                fontSize: 18
              }
            }
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 2
              }
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 30,
              shadowColor: 'rgba(0, 0, 0, 0.4)'
            }
          },
          animationType: 'scale',

        
        }]

      });
    }
      else{
        setOptions2({})
      }

    if (CallType) {
      const name = CallType.map(item => {
        return item.name;
      });
      const value = CallType.map(item => {
        return item.value;
      });
      setOptions3({
        // backgroundColor: "#000833",
        // animation: true,
        grid: {
          top: '15%',
          right: '3%',
          left: '15%',
          bottom: '15%'
        },
        xAxis: [{
          type: 'category',
          color: '#00eaff',
          data: name,
          axisPointer: {
            type: 'line'
          },
          axisLine: {
            lineStyle: {
              color: '#00eaff'
            }
          },
          axisLabel: {
            margin: 20,//x轴距下方文件的文字距离
            color: '#00eaff',
            rotate:30,//文字偏移角度
            textStyle: {
              fontSize: 14
            },
          },
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            fontSize: 16
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00eaff",
              width: 1,
              type: "solid"
            },
          },
          splitLine: {
            lineStyle: {
              color: "#063374",
            }
          }
        }],
        series: [{
          type: 'bar',
          data: value,
          barWidth: '20px',//柱状图宽度
          barGap:'10px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#41E1D4' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#10A7DB' // 100% 处的颜色
              }], false),
              barBorderRadius: [30, 30, 0, 0],
              shadowColor: 'rgba(0,255,225,1)',
              shadowBlur: 4,
            }
          },
          label: {
            normal: {
              show: true,
              lineHeight: 30,
              width: 50,
              height: 30,
              backgroundColor: '#252453',
              borderRadius: 200,
              position: ['-8', '-60'],
              distance: 1,
              formatter: [
                //'    {d|●}',
                ' {a|{c}}     \n',
                '    {b|}'
              ].join(','),
              rich: {
                d: {
                  color: '#3CDDCF',
                },
                a: {
                  color: '#00eaff',
                  align: 'center',
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: '#00eaff',
                  align: 'left'
                },
              }
            }
          }
        }]
      });
    }else{
      setOptions3({});
    }

  }, [HandleBusiness, messageLib, CallType]);
  return (
    <div style={{ width: '100%' }}>


      <div id={'chart'} className="col-md-4" style={{ marginTop: '40px' , width: '30%'  , float: 'left', overflow: 'hidden' }}>
        <img src={ imgUrl }/>
        <strong style={{ color: "#00eaff" , marginTop: '50px' , fontSize: '1.6vh'}}>专席受理业务量</strong>
        <ReactEcharts
          option={options}
          style={{ width: '400px', height: '450px' , marginTop: '150px' }}
        />
      </div>


      <div id={'chart'} className="col-md-4" style={{ marginTop: '40px' , width: '38%'  , float: 'left', overflow: 'hidden' }}>
        <img src={ imgUrl } style={{marginLeft:'100px'}}/>
        <strong style={{ color: "#00eaff" ,marginTop: '50px' , fontSize: '1.6vh' }}>信息库引用统计</strong>
        <ReactEcharts
          option={options2}
          style={{ width: '400px', height: '450px', marginTop: '150px',marginLeft:'30px'}}
        />
      </div>


      <div id={'chart'} className="col-md-4" style={{marginTop: '40px' , width: '32%'  , float: 'right', overflow: 'hidden' }}>
        <img src={ imgUrl }/>
        <strong style={{ color: "#00eaff" , marginTop: '50px' , fontSize: '1.6vh' }}>本月话务类型统计</strong>
        <ReactEcharts
          option={options3}
          style={{ width: '380px', height: '450px', marginTop: '150px',}}
        />
      </div>

    </div>
  );
}

export default connect(({ monitor }) => ({
  HandleBusiness: monitor.HandleBusiness,
  messageLib: monitor.messageLib,
  CallType: monitor.CallType,
}))(Total);
