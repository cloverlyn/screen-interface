import React from 'react';
import { connect } from 'dva';
import classNames from 'classnames';
import Charts from './chart';

import styles from './index.scss';

function RightTop(props) {
  const { hotEvent, hotIndex, val } = props;

  const onChangeDetail = (index) => {
    if(val){
      props.dispatch({
        type: 'monitor/save',
        payload: {
          hotIndex: index,
        },
      });
      props.dispatch({
        type: 'monitor/handleHotEventDetail',
      });
    }
    else{
      props.dispatch({
        type: 'monitor/save',
        payload: {
          hotIndex: index,
        },
      });
      props.dispatch({
        type: 'monitor/handleHotEventDetail1',
      });
    }
  };
  return (
   
      hotEvent.map((item) => {
        const cx = classNames({
          [styles.typeItem]: true,
          [styles.select]: item.typeId === hotIndex,
        });
        return (
          <div className={cx} key={item.caseName} onClick={() => onChangeDetail(item.typeId)}>
            <div> 
              {item.caseName}
              {item.total}个来电
            </div>
          </div>
        );
      })
   
  );
  
}


export default connect(({ monitor }) => ({
  hotEvent: monitor.hotEvent,
  hotIndex: monitor.hotIndex,

}))(RightTop);
