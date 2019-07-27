import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import imgUrl from '@/assets/dataicon.png';

function Total(props) {
  const { adviceHandleDept } = props;
  const { blueSkyCount } = props;
  const { businessCount } = props;
  const [options, setOptions] = useState({});
  const [options2, setOptions2] = useState({});
  const [options3, setOptions3] = useState({});
  useEffect(() => {
    if (blueSkyCount) {

      setOptions({
        tooltip: {
          trigger: 'item',
          formatter: "{b} : <br/>{c} ({d}%)"
        },

        visualMap: {
          show: false,
          //min: 500,
          //max: 600,
          inRange: {
            //colorLightness: [0, 1]
          }
        },
        series: [{
          //name: '访问来源',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          startAngle:110,
          color: ['#f33f39', '#18e7d8', '#2e91ff', '#eebd10', '#00faff', '#de1f87', '#505de8'], //'#FBFE27','rgb(11,228,96)','#FE5050'
          // data: [
          //   { value: 335, name: '环保' },
          //   { value: 310, name: '农村事务' },
          //   { value: 234, name: '劳动事务' },
          //   { value: 135, name: '市场监管' },
          //   { value: 148, name: '城市管理' },
          //   { value: 158, name: '噪音投诉' },
          //   { value: 154, name: '城乡建设' }
          //
          // ].sort(function (a, b) {
          //   return a.value - b.value
          // }),
          data:blueSkyCount.map(item =>{
            return{
              value: item.value,
              name: item.name,
            }
          }).sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',

          label: {
            normal: {
              formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
              rich: {
                c: {
                  color: 'rgb(241,246,104)',
                  fontSize: 20,
                  fontWeight: 'bold',
                  lineHeight: 5
                },
                b: {
                  color: 'rgb(98,137,169)',
                  fontSize: 15,
                  fontWeight: 'bold',
                  height: 40
                },
              },
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgb(98,137,169)',
              },
              smooth: 0.2,
              length: 10,
              length2: 10,

            }
          },
          itemStyle: {
            normal: {
              shadowColor: 'rgba(0, 0, 0, 0.8)',
              shadowBlur: 50,
            }
          }
        }]

      });
    } else {
      setOptions({});
    }
  }, [blueSkyCount]);

  useEffect(() => {

    if (businessCount) {

      setOptions2({
        tooltip: {
          trigger: 'item',
          //formatter: "{a} <br />{b} : {c} ({d}%)"
          formatter: "{b} : <br />{c} ({d}%)"
        },

        series: [
          {
            //name: '营商环境类：',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            startAngle:195,
            label: {
              show: true,
              formatter: '{b}: \n {d}%',
              textStyle:{
                fontSize:15
              }
            },
            // data: [
            //   { value: 335, name: '环保' },
            //   { value: 310, name: '农村事务' },
            //   { value: 234, name: '劳动事务' },
            //   { value: 135, name: '市场监管' },
            //   { value: 148, name: '城市管理' },
            //   { value: 158, name: '噪音投诉' },
            //   { value: 154, name: '城乡建设' }
            // ],
            data:businessCount.map(item =>{
              return{
                value: item.value,
                name: item.name,
              };
            }),
            itemStyle: {

              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        color: ['#f34238','#17f5b8','#2e91ff','#f1cf18','#00faff','#8b32bf','#4855e5']
      });
    }
    else {
      setOptions2({})
    }

  }, [businessCount]);

  useEffect(() => {
    if (adviceHandleDept) {
    //   var plantCap = [{
    //     name: '公安部',
    //     value: '428'
    // }, {
    //     name: '交通部',
    //     value: '323'
    // }, {
    //     name: '宣传部',
    //     value: '122'
    // }, {
    //     name: '组织部',
    //     value: '152'
    // }, {
    //     name: '宣传部',
    //     value: '122'
    // }, {
    //     name: '组织部',
    //     value: '152'
    // }];

      var plantCap = adviceHandleDept.map(item =>{
        return{
          name: item.deptName,
          value: item.distributCount,
        }
      });
    var datalist = [{
        offset: [56, 48],
        symbolSize: 154,
        opacity: .95,
        color: '#000833'
    },  {
        offset: [20, 43],
        symbolSize: 115,
        opacity: .84,
        color: '#000833'
    }, {
        offset: [83, 35],
        symbolSize: 113,
        opacity: .8,
        color: '#000833'
    }, {
        offset: [64, 20],
        symbolSize: 92,
        opacity: .7,
        color: '#000833'
    }, {
        offset: [80, 52],
        symbolSize: 60,
        opacity: .7,
        color: '#000833'
    },{
        offset: [40, 65],
        symbolSize: 60,
        opacity: .88,
        color: '#000833'
    }];
    var datas = [];
    for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
            name: item.value + '\n' + item.name,
            value: itemToStyle.offset,
            symbolSize: itemToStyle.symbolSize,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 18,
                        color:'#00faff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: itemToStyle.color,
                    opacity: itemToStyle.opacity
                }
            },
        })
    }
      setOptions3({
        // backgroundColor: "#000833",
        // animation: true,
        grid: {
          show: false,
          top: 10,
          bottom: 10
      },
      xAxis: [{
          gridIndex: 0,
          type: 'value',
          show: false,
          min: 0,
          max: 100,
          nameLocation: 'middle',
          nameGap: 5
      }],
      yAxis: [{
          gridIndex: 0,
          min: 0,
          show: false,
          max: 100,
          nameLocation: 'middle',
          nameGap: 30
      }],
      series: [{
          type: 'scatter',
          symbol: 'circle',
          symbolSize: 120,
          label: {
              normal: {
                  show: true,
                  formatter: '{b}',
                  color: '#fff',
                  textStyle: {
                      fontSize: '20'
                  }
              },
          },
          itemStyle: {
              normal: {
                  borderWidth: '4',
                  borderType: 'solid',
                  borderColor: '#fff',
                  color: '#000833',
                  shadowColor: '#00faff',
                  shadowBlur: 10
              }
          },
          data: datas
      }]
      });
    } else {
      setOptions3({});
    }

  }, [adviceHandleDept]);
  return (
    <div style={{ width: '100%' }}>


      <div id={'chart'} className="col-md-4" style={{ marginTop: '60px', width: '34%', float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} style={{marginLeft:'80px'}}/>
        <strong style={{ color: "#00eaff", marginTop: '50px',fontSize: '1.6vh' }}>营商环境类</strong>
        <ReactEcharts
          option={options2}
          style={{ width: '390px', height: '500px'}}
        />
      </div>


      <div id={'chart'} className="col-md-4" style={{ marginTop: '60px', width: '33%', float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} style={{marginLeft:'100px'}}/>
        <strong style={{ color: "#00eaff", marginTop: '30px', fontSize: '1.6vh' }}>蓝天保卫战</strong>
        <ReactEcharts
          option={options}
          style={{ width: '400px', height: '500px' ,marginTop: '60px' }}
        />
      </div>

      
      <div id={'chart'} className="col-md-4" style={{ marginTop: '60px', width: '33%', float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} style={{marginLeft:'100px'}}/>
        <strong style={{ color: "#00eaff", marginTop: '30px', fontSize: '1.6vh' }}>微建议受理部门</strong>
        <ReactEcharts
          option={options3}
          style={{ width: '420px', height: '500px' }}
        />
      </div>

    </div>
  );

  
}

export default connect(({ appeal }) => ({
  blueSkyCount: appeal.blueSkyCount,
  businessCount: appeal.businessCount,
  adviceHandleDept: appeal.adviceHandleDept,
}))(Total);
