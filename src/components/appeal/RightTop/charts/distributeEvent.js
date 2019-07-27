import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';


function DistributeEvent(props) {
  const { distributeEvent } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (distributeEvent) {
      setOptions({
        grid: {
          top: '5%',
          left:'15%',
          bottom: '16%',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}：<br/>{c}',
        },
        xAxis: {
          data: distributeEvent.map(item => {
            return item.caseName;
          }),
          axisLabel: {
            rotate: 45,
            textStyle: {
              color: '#00eaff',
            },
            fontSize: 20,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle:{
              color: '#00eaff',
            }
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: true,
            lineStyle:{
              color: '#00eaff',
            }
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#03c9db',
              fontSize: 25,
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(5,228,248,0.24)' },
                  { offset: 1, color: 'rgba(8,175,255,0.3)' },
                ]),
                barBorderRadius: 7.5,
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#06e4f9' },
                  { offset: 1, color: '#08afff' },
                ]),
                barBorderRadius: 9,
              },
            },
            barWidth: 18,
            data: distributeEvent.map(item => {
              return item.total;
            }),
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff',
                  fontSize: 16,
                  fontStyle: 'bold',
                }
              }
            }
          },
        ],
      });
    } else {
      setOptions({});
    }
  }, [distributeEvent]);

  return (
    <div>
         <ReactEcharts
           option={options}
           style={{ width: '550px', height: '600px' , marginTop:'50px'}} />
    </div>
  );
}

export default connect(({ appeal }) => ({
  distributeEvent: appeal.distributeEvent,
}))(DistributeEvent);
