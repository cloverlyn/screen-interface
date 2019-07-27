import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import classNames from 'classnames';
import styles from './index.scss';
import imgUrl from '@/assets/dataicon.png';

class DistributeByEvent extends React.Component {
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

            data: caseTypeStatistics.map(item => {
              return {
                value: item.caseCount,
                name: item.caseTypeName,
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
      };
    } else {
      return {};
    }
  }

  chartDetails = e => {
    this.props.dispatch({
      type: 'appeal/handleCaseTypeStatisticsDetail',
      payload: {
        caseTypeId: e.data.caseTypeId,
      },
    });
  };

  render() {
    return (

      <ReactEcharts
        option={this.options}
        style={{ width: '99%', height: '99%', padding: '1vh' }}
        onEvents={{ click: this.chartDetails }}
      />


    );
  }
}

export default connect(({ appeal }) => ({
  caseTypeStatistics: appeal.caseTypeStatistics,
  caseIndex: appeal.caseIndex,
}))(DistributeByEvent);


