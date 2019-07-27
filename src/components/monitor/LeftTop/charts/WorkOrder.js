import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import imgUrl from '@/assets/dataicon.png';
import { isDataItemOption } from 'echarts/lib/util/model';


function WorkOrder(props) {
    const { WorkOrder } = props;
    const [options, setOptions] = useState({});

    useEffect(() => {
        if (WorkOrder) {
            var xData = WorkOrder.map((item) => {
                return item.dateOfMonthDay;
            });
            var name = ["在线办结工单", "转办工单", "转办办结工单"]
            const temp1 = WorkOrder.map((item) => {
                return item.onlineFinishCount;
            });

            const temp2 = WorkOrder.map((item) => {
                return item.distributeCount;
            });
            const temp3 = WorkOrder.map((item) => {
                return item.distributeFinish;
            });


            setOptions({
                color: ['#1a9bfc', '#99da69', '#e32f46'],
                // backgroundColor: '#FFF',
                legend: {
                    top: 20,
                    itemGap:5,
                    itemWidth:5,
                    textStyle: {
                      color: '#',
                      fontSize: '18'
                    },
                    data: name,
                    icon: "react",
                  },
                tooltip: {
                    trigger: 'axis',
                    
                },
                
                xAxis: [{
        
      
                    axisLine: {
                        lineStyle: {
                            color: '#00ebff'
                        },
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        rotate: 50,
                        color: '#00ebff'
                    },
                    
                    data: xData,
                }],
                yAxis: [{
            
                   
                    nameGap: 40,
                    nameTextStyle: {
                        color: '#00ebff'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#00ebff'
                        },
                    },
                    axisTick: {
                        show: false
                    },
                    
                    
                }],
                series: [{
                    name: '在线办结工单',
                    type: 'line',
                    itemStyle: {
                        color: '#1a9bfc',
                        borderColor: '#1a9bfc',
                        borderWidth: 4
                    },
                    lineStyle: {
                        width: 4
                    },
                    data: temp1
                },
                {
                    name: '转办工单',
                    type: 'line',
                    itemStyle: {
                        color: '#99da69',
                        borderColor: '#99da69',
                        borderWidth: 4
                    },
                    lineStyle: {
                        width: 4
                    },
                    data: temp2
                },
                {
                    name: '转办办结工单',
                    type: 'line',
                    itemStyle: {
                        color: '#e32f46',
                        borderColor: '#e32f46',
                        borderWidth: 4
                    },
                    lineStyle: {
                        width: 4
                    },
                    data: temp3
                }
                ]

            });
        } else {
            setOptions({});
        }


    }, [WorkOrder]);
    return (
        <div>
            <div class="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
                <img src={imgUrl} />
                <strong style={{ color: "#00eaff", fontSize: '1.6vh' }}>工单办理对比</strong>
                <ReactEcharts
                    option={options}
                    style={{ width: '600px', height: '380px' }}
                />
            </div>
        </div>
    );
}

export default connect(({ monitor }) => ({
    WorkOrder: monitor.WorkOrder,
}))(WorkOrder);
