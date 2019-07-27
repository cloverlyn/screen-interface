import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

import imgUrl from '@/assets/dataicon.png';
import { connect } from 'react-redux';

//export default function(props) {
function Rightb(props) {
  const { monitorCount } = props;
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (monitorCount) {
      //var data = ["95","5"]
      setOptions({
        // backgroundColor: '#031845',
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {d}% <br/> {c}"
        },
       
        legend: {
            orient: 'horizontal',
            icon: 'circle',
            top: 0,
            x: 'center',
            textStyle: {
                color: '#fff',
                fontSize:18
            },
           // data: ['红灯', '黄灯', '绿灯'],
          data: monitorCount.map(item => {
            return item.name;
          }),
         },
        series: [{
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['50%', '50%'],
            startAngle:90,
            color: ['red', 'green' , 'yellow'],
            // data: [{
            //         value: 31,
            //         name: '红灯'
            //     },
            //     {
            //         value: 10,
            //         name: '黄灯'
            //     },
            //     {
            //         value: 10,
            //         name: '绿灯'
            //     }
            // ],
          data:monitorCount.map(item =>{
            return {
              value: item.value,
              name: item.name,
            };
          }),
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        color: '#12EABE',
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b|{b}:} {c|{c}}\n{hr|}\n{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        }
                    }
                }
            }
        }]

      });
    }else {
      setOptions({});
    }

  }, [monitorCount]);
  return (
    <div style={{ flex: '1' }}>
      <div className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} style={{marginLeft:'30px'}}/>
        <strong style={{ color: "#00eaff", 'font-size': '1.6vh' ,marginBottom:'100px'}}>监察数据统计</strong>
        <ReactEcharts
          option={options}
          style={{ width: '600px', height: '380px' ,marginTop:'100px' }}
        />
      </div>

    </div>
  );
}
export default connect(({ appeal }) => ({
  monitorCount: appeal.monitorCount,
}))(Rightb);

