import React from 'react';
import PhoneState from './charts/PhoneState';
import Circle from './charts/Circle';
import { connect } from 'dva';

import styles from './index.scss';

function Rightb(props) {
  const { historyVdn } = props;
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer} style={{marginTop:'60px'}} >
        <PhoneState/>
        <div className={styles.circle}>
          <Circle val={historyVdn[0].val}/>
        </div>
      </div>
    </div>
  );
}

export default connect(({ monitor }) => ({
  historyVdn: monitor.historyVdn,
}))(Rightb);
