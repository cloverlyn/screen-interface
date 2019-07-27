import React from 'react';
import { connect } from 'dva';

import Charts from './charts/distributeEvent';
import History from './charts/history'
import styles from './index.scss';
import imgUrl from '@/assets/dataicon.png';

function RightTop(props) {
  
  return (
    <div className={styles.container}>
      <div className={styles.title} style={{marginBottom:'50px'}}>办理数据</div>
      <div className={styles.mainContainer}>

        <div className="col-md-6" style={{ marginBottom:'50px' , float: 'left', overflow: 'hidden' }}>
          <img src={imgUrl}/>
          <strong style={{ color: "#00eaff", fontSize: '1.6vh' }}>转办工单案件大类统计</strong>
          <Charts style={{width:'550px',height:'600px'}}/>
        </div>

        <div className="col-md-6" style={{marginBottom:'50px' ,  float: 'left', overflow: 'hidden' }}>
          <img src={imgUrl} style={{marginLeft:'30px'}}/>
          <strong style={{ color: "#00eaff", fontSize: '1.6vh' }}>历史数据</strong>
          <History style={{width:'650px',height:'600px'}}/>
        </div>

      </div>
    </div>
  );
}

export default connect(({ monitor }) => ({
  hotEvent: monitor.hotEvent,
  hotIndex: monitor.hotIndex,
}))(RightTop);
