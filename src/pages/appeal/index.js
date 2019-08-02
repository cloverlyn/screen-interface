import React from 'react';
import { connect } from 'dva';
import Area from '@/components/appeal/Area';
import LeftTop from '@/components/appeal/LeftTop';
import RightTop from '@/components/appeal/RightTop';
import Rightb from '@/components/appeal/Rightb';
import Leftb from '@/components/appeal/Leftb';

import styles from './index.scss';

class Appeal extends React.Component {
  times = null;
  componentDidMount() {
    this.props.dispatch({
      type: 'appeal/fetch',
    });
    this.props.dispatch({
      type: 'monitor/fetch',
    });
    this.times = setInterval(() => {
      this.props.dispatch({
        type: 'appeal/fetch',
      });
      this.props.dispatch({
        type: 'monitor/fetch',
      });
      this.props.dispatch({
        type: 'appeal/save',
        payload: {
          name: '规划房地',
        },
      });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.times);
  }

  render() {
    return (
      <div className={styles.container}>
        <LeftTop />
        <Area />
        <RightTop />
        <Rightb />
        <Leftb />
      </div>
    );
  }
}

export default connect()(Appeal);
