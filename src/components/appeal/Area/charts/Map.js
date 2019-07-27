import React, { useState, useEffect } from 'react';
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'dva';
import  point1  from '@/assets/point1.png'
import  point2  from '@/assets/point2.png'
import  point3  from '@/assets/point3.png'
import  point4  from '@/assets/point4.png'

import * as map from '@/utils/map.json';

let geos = {};
map.default.features.forEach(item => {
  const { name, center } = item.properties;
  geos[name] = center;
});

function Map(props) {
  const { inTimeHandle } = props;
  echarts.registerMap('changsha', map.default);
  const convertData = function(data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = geos[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };
  const findMax = (data) => {
    let temp = [];
    for (let i = 0; i < data.length; i++) {
      temp.push(data[i].value);
    }

    return Math.max(...temp);
  };
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (inTimeHandle.length !== 0) {
      setOptions({
        graphic: [
          //宁乡市
          {
            type: 'group',
            left: '150',//padding-left
            bottom: 330,//padding-bottom
            children: [
              {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: {//文本框大小
                  width: 175,
                  height: 80
                },
                style: {
                  fill: '#0a2854',
                  stroke: '#00eaff',//边框颜色
                  lineWidth: 2,
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00eaff',//字体颜色
                  text: [
                    '         宁乡市',
                    '      3645    84.2%',
                    '      1777    38.4%'
                  ].join('\n'),
                  font: '18px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#0093fc',
                  text: [
                    '            ',
                    '        ●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00f9ff',
                  text: [
                    '            ',
                    '●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#863bf3',
                  text: [
                    '            ',
                    '       ●'
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'right',
                top: 'middle',
                style: {
                  fill: '#de2a99',
                  text: [
                    '   ',
                    '●     ',
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              }
            ]
          },
          //望城区
          {
            type: 'group',
            left: '280',//padding-left
            bottom: 450,//padding-bottom
            children: [
              {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: {//文本框大小
                  width: 175,
                  height: 80
                },
                style: {
                  fill: '#0a2854',
                  stroke: '#00eaff',
                  lineWidth: 2,
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00eaff',
                  text: [
                    '         望城区',
                    '         88        2.2%',
                    '         1921      48.3%'
                  ].join('\n'),
                  font: '18px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#0093fc',
                  text: [
                    '            ',
                    '        ●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00f9ff',
                  text: [
                    '            ',
                    '●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#863bf3',
                  text: [
                    '            ',
                    '       ●'
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'right',
                top: 'middle',
                style: {
                  fill: '#de2a99',
                  text: [
                    '   ',
                    '●     ',
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              }
            ]
          },
          //开福区
          {
            type: 'group',
            left: '490',//padding-left
            bottom: 510,//padding-bottom
            children: [
              {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: {//文本框大小
                  width: 175,
                  height: 80
                },
                style: {
                  fill: '#0a2854',
                  stroke: '#00eaff',
                  lineWidth: 2,
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00eaff',
                  text: [
                    '           开福区',
                    '          87       3.1%',
                    '          1451     51.1%'
                  ].join('\n'),
                  font: '18px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#0093fc',
                  text: [
                    '            ',
                    '        ●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00f9ff',
                  text: [
                    '            ',
                    '●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#863bf3',
                  text: [
                    '            ',
                    '       ●'
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'right',
                top: 'middle',
                style: {
                  fill: '#de2a99',
                  text: [
                    '   ',
                    '●     ',
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              }
            ]
          },
          //芙蓉区
          {
            type: 'group',
            left: '710',//padding-left
            bottom: 520,//padding-bottom
            children: [
              {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: {//文本框大小
                  width: 175,
                  height: 75
                },
                style: {
                  fill: '#0a2854',
                  stroke: '#00eaff',
                  lineWidth: 2,
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00eaff',
                  text: [
                    '          芙蓉区',
                    '       555    19.7%',
                    '       1050     37.2%'
                  ].join('\n'),
                  font: '18px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#0093fc',
                  text: [
                    '            ',
                    '        ●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00f9ff',
                  text: [
                    '            ',
                    '●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#863bf3',
                  text: [
                    '            ',
                    '       ●'
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'right',
                top: 'middle',
                style: {
                  fill: '#de2a99',
                  text: [
                    '   ',
                    '●     ',
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              }
            ]
          },
          //长沙县
          {
            type: 'group',
            left: '930',//padding-left
            bottom: 470,//padding-bottom
            children: [
              {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: {//文本框大小
                  width: 175,
                  height: 80
                },
                style: {
                  fill: '#0a2854',
                  stroke: '#00eaff',
                  lineWidth: 2,
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00eaff',
                  text: [
                    '           长沙县',
                    '       119       2.7%',
                    '       1620      37.1%'
                  ].join('\n'),
                  font: '18px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#0093fc',
                  text: [
                    '            ',
                    '        ●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00f9ff',
                  text: [
                    '            ',
                    '●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#863bf3',
                  text: [
                    '            ',
                    '       ●'
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'right',
                top: 'middle',
                style: {
                  fill: '#de2a99',
                  text: [
                    '   ',
                    '●     ',
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              }
            ]
          },
          //浏阳市
          {
            type: 'group',
            left: '970',//padding-left
            bottom: 150,//padding-bottom
            children: [
              {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: {//文本框大小
                  width: 160,
                  height: 80
                },
                style: {
                  fill: '#0a2854',
                  stroke: '#00eaff',
                  lineWidth: 2,
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00eaff',
                  text: [
                    '         浏阳市',
                    '         63       2.3%',
                    '         1260     46.0%'
                  ].join('\n'),
                  font: '18px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#0093fc',
                  text: [
                    '            ',
                    '        ●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00f9ff',
                  text: [
                    '            ',
                    '●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#863bf3',
                  text: [
                    '            ',
                    '       ●'
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'right',
                top: 'middle',
                style: {
                  fill: '#de2a99',
                  text: [
                    '   ',
                    '●     ',
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              }
            ]
          },
          //雨花区
          {
            type: 'group',
            left: '870',//padding-left
            bottom: 30,//padding-bottom
            children: [
              {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: {//文本框大小
                  width: 175,
                  height: 80
                },
                style: {
                  fill: '#0a2854',
                  stroke: '#00eaff',
                  lineWidth: 2,
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00eaff',
                  text: [
                    '           雨花区',
                    '       105       2.3%',
                    '       2320      49.8%'
                  ].join('\n'),
                  font: '18px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#0093fc',
                  text: [
                    '            ',
                    '        ●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00f9ff',
                  text: [
                    '            ',
                    '●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#863bf3',
                  text: [
                    '            ',
                    '       ●'
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'right',
                top: 'middle',
                style: {
                  fill: '#de2a99',
                  text: [
                    '   ',
                    '●     ',
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              }
            ]
          },
          //天心区
          {
            type: 'group',
            left: '550',//padding-left
            bottom: 0,//padding-bottom
            children: [
              {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: {//文本框大小
                  width: 175,
                  height: 80
                },
                style: {
                  fill: '#0a2854',
                  stroke: '#00eaff',
                  lineWidth: 2,
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00eaff',
                  text: [
                    '          天心区',
                    '       193      5.9%',
                    '       1510     46.5%'
                  ].join('\n'),
                  font: '18px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#0093fc',
                  text: [
                    '            ',
                    '        ●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00f9ff',
                  text: [
                    '            ',
                    '●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#863bf3',
                  text: [
                    '            ',
                    '       ●'
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'right',
                top: 'middle',
                style: {
                  fill: '#de2a99',
                  text: [
                    '   ',
                    '●     ',
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              }
            ]
          },
          //岳麓区
          {
            type: 'group',
            left: '300',//padding-left
            bottom: 0,//padding-bottom
            children: [
              {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: {//文本框大小
                  width: 175,
                  height: 80
                },
                style: {
                  fill: '#0a2854',
                  stroke: '#00eaff',
                  lineWidth: 2,
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00eaff',
                  text: [
                    '          岳麓区',
                    '      270      5.8%',
                    '      1777     38.4%'
                  ].join('\n'),
                  font: '18px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#0093fc',
                  text: [
                    '            ',
                    '        ●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#00f9ff',
                  text: [
                    '            ',
                    '●',
                    '               '
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#863bf3',
                  text: [
                    '            ',
                    '       ●'
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              },
              {
                type: 'text',
                z: 100,
                left: 'right',
                top: 'middle',
                style: {
                  fill: '#de2a99',
                  text: [
                    '   ',
                    '●     ',
                  ].join('\n'),
                  font: '26px Microsoft YaHei'
                }
              }
            ]
          },

        ],
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            return params.name + ' : ' + params.value[2];
          },
        },
        // visualMap: {
        //   min: 0,
        //   max: findMax(inTimeHandle),
        //   calculable: true,
        //   inRange: {
        //     color: ['#33FF33', '#FFFF00', '#CC0000'],
        //   },
        //   textStyle: {
        //     color: '#fff',
        //   },
        // },
        geo: {
          map: 'changsha',
          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: '#0067ee',
              borderColor: '#111',
            },
            emphasis: {
              areaColor: '#707caa',
            },
          },
        },

        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
          show:false,
          axisLine:{
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            }
          }
        },
        yAxis: {
          type: 'value',
          show:false,
          axisLine:{
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            }
          }
        },
        //地图连线
        series: [
          //宁乡区
          {
            data: [[4,200],[2,350],'', 600],
            type: 'line',
            smooth:true,
            lineStyle:{
              color:'#00c7ff'
            }
          },
          //望城区
          {
            data: [[5,550],[8,350],'', 600],
            type: 'line',
            smooth:true,
            lineStyle:{
              color:'#00c7ff'
            }
          },
          //开福区
          {
            data: [[9,330],[10,580],'', 600],
            type: 'line',
            smooth:true,
            lineStyle:{
              color:'#00c7ff'
            }
          },
          //芙蓉区
          {
            data: [[10,260],[14,600],'', 600],
            type: 'line',
            smooth:true,
            lineStyle:{
              color:'#00c7ff'
            }
          },
          //长沙县
          {
            data: [[11,260],[18,550],'', 600],
            type: 'line',
            smooth:true,
            lineStyle:{
              color:'#00c7ff'
            }
          },
          //浏阳市
          {
            data: [[16,300],[20,150],'', 600],
            type: 'line',
            smooth:true,
            lineStyle:{
              color:'#00c7ff'
            }
          },
          //雨花区
          {
            data: [[10,150],[18,30],'', 600],
            type: 'line',
            smooth:true,
            lineStyle:{
              color:'#00c7ff'
            }
          },
          //天心区
          {
            data: [[10,0],[9,150],'', 600],
            type: 'line',
            smooth:true,
            lineStyle:{
              color:'#00c7ff'
            }
          },
          //岳麓区
          {
            data: [[5,0],[8,200],'', 600],
            type: 'line',
            smooth:true,
            lineStyle:{
              color:'#00c7ff'
            }
          }


        ]

      });
    } else {
      setOptions({});
    }
  }, [inTimeHandle]);
  return (
    <div style={{ marginBottom : '200px' }}>
      <ol>
        <img src={point1}/><strong style={{color:'#00eaff'}}>在线办结工单数  </strong>
        <img src={point2}/><strong style={{color:'#00eaff'}}>在线办结率  </strong>
      </ol>
      <ol>
        <img src={point3}/><strong style={{color:'#00eaff',paddingRight:'30px'}}>转办工单数  </strong>
        <img src={point4}/><strong style={{color:'#00eaff'}}>转办工单办结率</strong>
      </ol>

      <ReactEcharts
        option={options}
        style={{ width: '99%', height: '600px'  }}
      />

      <strong style={{float:'right' , marginRight:'50px' , marginTop:'30px'}}>全市案件大类
        <p style={{float:'right', color:'#00eaff' , marginBottom:'30px'}}>(单位：个)</p>
      </strong>

    </div>
  );
}

export default connect(({ appeal }) => ({
  inTimeHandle: appeal.inTimeHandle,
}))(Map);
