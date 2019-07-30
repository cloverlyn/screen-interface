import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import Detail from './charts/Detail'
import Charts from './charts/index';

import styles from './index.scss';
import imgUrl from '@/assets/dataicon.png';


class LeftTop extends React.Component {
  
  get options() {
    const { caseTypeStatistics } = this.props;

    if (caseTypeStatistics) {
      return {
        tooltip: {
          trigger: 'item',
          formatter: "{b} : <br />{c} ({d}%)"

        },

        series: [
          {
            //name: '案件大类统计',
            type: 'pie',
            radius: '40%',
            center: ['50%', '60%'],
            startAngle: 120,
            label: {
              show: true,
              formatter: '{b}: \n{d}%',
              textStyle: {
                fontSize: 18
              }
            },
            // data: [
            //     { value: 335, name: '环保' },
            //     { value: 310, name: '农村事务' },
            //     { value: 234, name: '劳动事务' },
            //     { value: 135, name: '市场监管' },
            //     { value: 148, name: '城市管理' },
            //     { value: 158, name: '噪音投诉' },
            //     { value: 154, name: '城乡建设' }
            //   ],
            data: caseTypeStatistics.map(item => {
              return {
                value: item.caseCount,
                name: item.caseTypeName,
                typeId: item.caseTypeId,
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
        color: ['#f34238', '#17f5b8', '#2e91ff', '#f1cf18', '#00faff', '#8b32bf', '#4855e5']
      }
    }
    else {
      return {};
    }
    
  }

  constructor(props) {
    super(props);
    this.state = { name: "规划房地" };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.chartDetails = this.chartDetails.bind(this);
}


 
  chartDetails = e => {
    this.props.dispatch({
      type: 'appeal/handleCaseTypeStatisticsDetail',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handlenoisyEvent1',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handlenoisyEvent2',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handlenoisyEvent3',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handlenoisyEvent4',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.setState(state => ({
      name: e.data.name
  }));
  };

  render() {

    return (
      <div className={styles.container}>
        <div className={styles.title}>在线办结案件</div>
        <div className={styles.mainContainer}>
          <div style={{ width: '100%', marginTop: '50px' }}>
            <img src={imgUrl} />
            <strong style={{ color: "#00eaff", fontSize: '1.6vh' }}>各案件大类数据统计</strong>
            <ReactEcharts
              option={this.options}
              style={{ width: '500px', height: '69%' }}
              onEvents={{ click: this.chartDetails }}
            />
          </div>

          <div style={{ opacity: 0.9, width: '650px', height: '800px' }}>

            <img src={imgUrl} />
            <strong style={{ color: "#00eaff", fontSize: '1.6vh', marginLeft: '20px' }}>{this.state.name}案件类概况</strong>
            <Charts/>

            <img src={imgUrl} />
            <strong style={{ color: "#00eaff", fontSize: '1.6vh', marginLeft: '20px' }}>{this.state.name}类9区分布图</strong>
            <Detail/>
          </div>

        </div>
      </div>
    );
  }
}


export default connect(({ appeal }) => ({
  caseTypeStatistics: appeal.caseTypeStatistics,
}))(LeftTop);
