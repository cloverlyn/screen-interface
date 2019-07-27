import React from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

import { phoneState } from '@/utils/config';
import { phoneColor } from '../../../../utils/config';

const makeSer = (data) => {
  let temp = [];

  for (let key in data) {
    temp.push({
      name: phoneState[key],
      color: phoneColor[key],
      type: 'line',
      lineStyle: {
        width: 10
      },
      data: data[key].slice(-6),
      smooth: true,
      label: {
        show: true,
        position: 'right',
      },
    });
  }
  return temp;
};

class PhoneState extends React.Component {
  get options() {
    const { phoneState } = this.props;
    // var xData = function() {
    //   var data = [];
    //   for (var i = 8; i < 15; i++) {
    //     data.push(i + ":00");
    //   }
    //   return data;
    // }();
     
    var name = ['示闲', '示忙', '通话', '事后', '等待']
    // var color = ['#99da69', '#1a9bfc','#fa704d',  '#7049f0', '#e32f46' ]

    // var series =  makeSer(phoneState)
    // for (var i = 0; i < 5; i++) {
    //   series.push({
    //     name: name[i],
    //     type: "line",
    //     symbolSize: 5,//标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
    //     symbol: 'circle',//标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
    //     smooth: true, //是否平滑曲线显示
    //     showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示

    //     itemStyle: {
    //       normal: {
    //         color: color[i],
    //         lineStyle: {
    //           width: 3,
    //           type: 'solid' //'dotted'虚线 'solid'实线
    //         },
    //         borderColor: color[i], //图形的描边颜色。支持的格式同 color
    //         borderWidth: 8 ,//描边线宽。为 0 时无描边。[ default: 0 ]
    //         barBorderRadius: 0,
    //         label: {
    //           show: false,
    //         },
    //         opacity:0.5,
    //       }
    //     },
    //     data: data[i],

    //   })
    // }

    return {
      legend: {
        top: 20,
        itemGap: 5,
        itemWidth: 5,
        textStyle: {
          color: '#',
          fontSize: '20'
        },
        icon: "react",
        data: name
      },

      tooltip: {
        trigger: "axis",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'line', // 默认为直线，可选为：'line' | 'shadow'
          lineStyle: {
            color: '#06e4f9'
          }
        },
        formatter: [
          '    {d|●}',
          ' {a|{c}}     \n',
          '    {b|}'
        ],

        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
      },
      // grid: {
      //   borderWidth: 0,
      //   top: 90,
      //   bottom: 95,
      //   textStyle: {
      //     color: "#06e4f9"
      //   }
      // },
      xAxis: [{
        type: "category",
        axisLine: {
          lineStyle: {
            color: '#06e4f9'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#32346c ',
          }
        },
        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLabel: {
          inside: false,
          textStyle: {
            color: '#06e4f9',
            fontWeight: 'normal',
            fontSize: '20',
          },
        },
        data: ['','','','','',''],
      }],
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#06e4f9',
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#32346c ',
          }
        },
        axisLabel: {
          textStyle: {
            color: '#06e4f9',
            fontWeight: 'normal',
            fontSize: '20',
          },
          formatter: '{value}',
        },
      },
      series: makeSer(phoneState),
    };
  }

  render() {
    return (
      <div>
        <ReactEcharts
          option={this.options}
          style={{ width: '99%', height: '99%', padding: '1vh' }}
        />
      </div>
    );
  }
}

export default connect(({ monitor }) => ({
  phoneState: monitor.phoneState,
}))(PhoneState);
