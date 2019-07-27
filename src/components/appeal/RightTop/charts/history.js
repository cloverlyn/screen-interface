import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

function History(props) {
  const { HistoryData1, HistoryData2, HistoryData3, HistoryData4} = props;
  const [options, setOptions] = useState({});
  useEffect(() => {

    if (HistoryData1) {
    
      const name =  HistoryData1.map((item) => {
        return item.dateYear;
      });

      const temp1 = HistoryData1.map(item=> {
        return item.caseSubTypeName;
      });

      const temp2 = HistoryData2.map(item=> {
        return item.caseSubTypeName;
      });

      const temp3 = HistoryData3.map(item=> {
        return item.caseSubTypeName;
      });

      const temp4 = HistoryData4.map(item=> {
        return item.caseSubTypeName;
      });
      var xData =[];

      xData.push(temp1[0]);
      xData.push(temp2[0]);
      xData.push(temp3[0]);
      xData.push(temp4[0]);

      setOptions({
        // backgroundColor: '#163455',
    tooltip: {
        trigger: "axis"
      },
      grid: {
        right: 30,
        top: 30,
        left: 55,
        bottom:'15%'
      },
      legend: {
        itemWidth: 8,
        itemHeight: 2,
        itemGap: 3,
        bottom: 570,

        width: "100%",

        textStyle: {
          fontSize: 20,
          color:'#'
        },
        icon:"react",
        // data: [
        //   { name: "其他环境污染", icon: "react" },
        //   { name: "施工管理", icon: "react" },
        //   { name: "垃圾清理", icon: "react" },
        //   { name: "私搭乱建（已建）", icon: "react" }
        // ]
        data : xData,
      },
      xAxis: {
        type: "category",
        boundaryGap: true,
        axisLine: {
          lineStyle: {
            color: "#00eaff"
          }
        },
        nameRotate: 45,
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          rotate: 45,
          fontFamily: "PingFangSC-Regular",
          fontWeight: "bolder",
          fontSize: 18
        },
        data:name
      },
      yAxis: {
        axisLine: {
          show: false,
          lineStyle: {
            color: "#00eaff"
          }
        },
        axisLabel: {
          fontFamily: "Roboto-Regular",
          fontWeight: "bolder",
          fontSize:18
        },
        axisTick: {
          show: false
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: "#5d7289",
            width: 2,
            type: "dashed"
          }
        },
        type: "value"
      },
      series: [
        {
          //name: "其他环境污染",
          name:temp1[0],
          type: "line",
          showAllSymbol: false,
          lineStyle: {
            color: "#41d96d"
          },
          itemStyle: {
            color: "#41d96d",
            fontSize: 16,
          },
          smooth: 0.2,
          data: HistoryData1.map((item) => {
            return item.caseSubTypeCount;
          })
        },
        {
          //name: "施工管理",
          name: temp2[0],
          type: "line",
          lineStyle: {
            color: "#9549f7",
   
          },
          itemStyle: {
            color: "#9549f7",

          },
          smooth: 0.2,
          data: HistoryData2.map((item) => {
            return item.caseSubTypeCount;
          })
        },
        {
          //name: "垃圾清理",
          name: temp3[0],
          type: "line",
          lineStyle: {
            color: "#00c0ef"
          },
          itemStyle: {
            color: "#00c0ef"
          },
          smooth: 0.2,
          data: HistoryData3.map((item) => {
            return item.caseSubTypeCount;
          })
        },
        {
          //name: "私搭乱建（已建）",
          name: temp4[0],
          type: "line",
          lineStyle: {
            color: "#fda53a",

          },
          itemStyle: {
            color: "#fda53a",
           
          },
          smooth: 0.2,
          data: HistoryData4.map((item) => {
            return item.caseSubTypeCount;
          })
        }
      ]
      });
    } else {
      setOptions({});
    }
  }, [HistoryData1, HistoryData2, HistoryData3, HistoryData4]);

  return (
    <div>
          <ReactEcharts
            option={options}
            style={{ width: '650px', height: '600px' , marginTop:'50px'}} />
    </div>
  );
}

export default connect(({ appeal }) => ({
  HistoryData1: appeal.HistoryData1, 
  HistoryData2: appeal.HistoryData2, 
  HistoryData3: appeal.HistoryData3, 
  HistoryData4: appeal.HistoryData4,
}))(History);
