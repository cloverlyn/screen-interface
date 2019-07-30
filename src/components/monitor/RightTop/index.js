import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import Index from './charts/index'
import Index1 from './charts/index1'
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
                    <button onClick={this.handleClick} style={{ width: '5%', height: '60%', padding: '1vh', background:'#14326b',color: "#00eaff" , fontSize: '1.6vh' }}>
                        {this.state.isToggleOn ? '月' : '日'}
                    </button>
                </div>
         
                {this.state.isToggleOn ? <Index />: <Index1 />}
            </div>
        );
    }
}

export default RightTop;