import React from 'react';
import PhoneState from './charts/PhoneState';
import Circle from './charts/Circle';
import { connect } from 'dva';
import phone1 from '@/assets/phone1.png';
import phone2 from '@/assets/phone2.png';

import styles from './index.scss';

function Rightb(props) {
  const { historyVdn, OnLineFinish } = props;

  return (
    <div className={styles.container}>
      <div className={styles.title}>坐席数据统计</div>
      <div className={styles.mainContainer}>
        <PhoneState style={{marginTop:'100px'}}/>
        <div className={styles.circle}>
          <div style={{ width:'100%'}}>

            <div className="col-md-6" style={{ width: '280px', height: '280px', float: 'left', overflow: 'hidden' }}>
              <div className={styles.logo}>
                <img src={phone1} style={{width:'80px',height:'80px'}}/>
                <p className={styles.title2}>话务总量：</p>
                <p className={styles.title2}>{historyVdn[2].val}</p>
              </div>
            </div>

            <div className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
              <div className={styles.logo}>

                <img src={phone2} style={{width:'80px',height:'80px'}}/>
                <p className={styles.title2}>有效来电量：</p>
                <p className={styles.title2} >{historyVdn[3].val}</p>
              </div>

            </div>
          </div>

          <div style={{ width:'100%'}}>

            <div class="col-md-6" style={{ width:'200px',height:'200px', float: 'left', overflow: 'hidden' , marginRight:'60px'}}>
              <Circle name={'接通率'} val={historyVdn[0].val} />
            </div>

            <div class="col-md-6" style={{ width:'200px',height:'200px', float: 'left', overflow: 'hidden' , marginRight:'60px'}}>
              <Circle name={'在线办结率'} val={OnLineFinish.proportion} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(({ monitor }) => ({
  historyVdn: monitor.historyVdn,
  OnLineFinish: monitor.OnLineFinish,
}))(Rightb);
