import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import Index from './charts/index'
import Charts from './charts/chart'
import styles from './index.scss';

class RightTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { tabName: "本月", id: 1 },
                { tabName: "本日", id: 2 },
            ],
            currentIndex: 1,
        };
    }
    componentDidMount() {

    }
    tabChoiced = (id) => {
        // tab切换的方法
        this.setState({
            currentIndex: id
        });
    }

    render() {
        var _this = this;
        var tabList = this.state.tabs.map(function (res, index) {
            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle = res.id == this.state.currentIndex ? 'subCtrl active' : 'subCtrl';

            return <li key={index} onClick={this.tabChoiced.bind(_this, res.id)} className={tabStyle}>{res.tabName}</li>

        }.bind(_this));
        return (
            <div className={styles.container}>
                <div className={styles.title}>热点事件统计</div>
                <div className={styles.mainContainer}>
                    <div div className={styles.types}>
                        <Index />
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


        )
    }
}

export default RightTop;