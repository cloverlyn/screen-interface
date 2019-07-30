import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import Index from './charts/index'
import Charts from './charts/chart'
import styles from './index.scss';

class RightTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: 1 };

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>热点事件统计
                <button onClick={this.handleClick} style={{ width: '10%', height: '10%', padding: '1vh' }}>
                    {this.state.isToggleOn ? '月' : '日'}
                </button>
                </div>
                <div className={styles.mainContainer}>
                    <div div className={styles.types}>
                        <Index val = {this.state.isToggleOn}/>
                    </div>

                    <Charts />
                    {/* <div className="listWrap">
                        {tabList}
                        <div className="newsList">
                            <Index />
                            <Charts/>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default RightTop;