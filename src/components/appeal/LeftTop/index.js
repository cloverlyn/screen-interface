import React from 'react';
import Area from './charts/DistributeByArea';
import Event from './charts/DistributeByEvent';
import Type from './charts/DistributeByType';
import imgUrl from '@/assets/dataicon.png';
import styles from './index.scss';


function LeftTop() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>在线办结案件</div>
      <div className={styles.mainContainer}>
        <div style={{ width: '100%', marginTop: '50px' }}>
          <img src={imgUrl} />
          <strong style={{ color: "#00eaff", fontSize: '1.6vh' }}>各案件大类数据统计</strong>
          <Event />
        </div>
        <div>
          <div style={{ opacity: 0.9, width: '650px', height: '800px' }}>
            <img src = {imgUrl} />
            <Type/>
            <img src = {imgUrl} />
            <Area/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LeftTop;