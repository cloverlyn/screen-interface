import {
  // fetchOnLineEvent,
  fetchBlueSkyCount,
  fetchBusinessCount,
  fetchDistributeEvent,
  fetchInTimeHandle,
  fetchMonitorCount,
  // fetchAreaEventDetail,
  fetchCityEventByType,
  fetchCaseTypeStatistics,
  fetchCaseTypeStatisticsDetail,
  fetchAdviceHandleDept,
  fetchTimeHandle,
  fetchnoisyEvent1,
  fetchnoisyEvent2,
  fetchnoisyEvent3,
  fetchnoisyEvent4,
  // fetchCaseTypeOfAreas,
  fetchHistoryData1,
  fetchHistoryData2,
  fetchHistoryData3,
  fetchHistoryData4,
} from '@/pages/appeal/service';
import { firstDataMap } from '@/utils/config';

export default {
  namespace: 'appeal',
  state: {
    typeId: '145056',
    caseTypeId: '145273',
    onLineEvent: [],
    // areaEventDetail: [],
    blueSkyCount: [],
    businessCount: [],
    adviceHandleDept: [],
    distributeEvent: [],
    inTimeHandle: [],
    monitorCount: [],
    cityEventByType: [],
    caseTypeStatistics: [],
    caseTypeStatisticsDetail: [],
    TimeHandle: [],
    noisyEvent1: [],
    noisyEvent2: [],
    noisyEvent3: [],
    noisyEvent4: [],
    // CaseTypeOfAreas: [],
    HistoryData1: [],
    HistoryData2: [],
    HistoryData3: [],
    HistoryData4: [],
  },
  reducers: {
    save(state, { payload: data }) {
      return {
        ...state,
        ...data,
      };
    },
  },
  effects: {
    * fetch(_, { all, put }) {
      yield all([
        put({ type: 'handleLeftTop' }),
        put({ type: 'handleLeftBottom' }),
        put({ type: 'handleRightTop' }),
        put({ type: 'handleRightBottom' }),
        put({ type: 'handleArea' }),
      ]);
    },

    * handleLeftTop(_, { all, call, put, select }) {
      const { caseTypeId } = yield select(state => state.appeal);
      //获取左上数据
      const res = yield all({
        caseTypeStatistics: call(fetchCaseTypeStatistics),
        noisyEvent1: call(fetchnoisyEvent1),
        noisyEvent2: call(fetchnoisyEvent2),
        noisyEvent3: call(fetchnoisyEvent3),
        noisyEvent4: call(fetchnoisyEvent4),
      })

      const tempCaseTypeStatistics = res.caseTypeStatistics.data.map(item => {
        return {
          ...item,
          caseTypeName: firstDataMap[item.caseTypeName],
        };
      });

      const tempnoisyEvent1 = res.noisyEvent1.data[0].map(item => {
        return {
          ...item,
        };
      });

      const tempnoisyEvent2 = res.noisyEvent2.data[1].map(item => {
        return {
          ...item,
        };
      });

      const tempnoisyEvent3 = res.noisyEvent3.data[2].map(item => {
        return {
          ...item,
        };
      });

      const tempnoisyEvent4 = res.noisyEvent5.data[3].map(item => {
        return {
          ...item,
        };
      });
      const caseTypeDetail = yield call(fetchCaseTypeStatisticsDetail, caseTypeId);
      yield put({
        type: 'save',
        payload: {
          caseTypeStatistics: tempCaseTypeStatistics,
          caseTypeStatisticsDetail: caseTypeDetail.data,
          noisyEvent1: tempnoisyEvent1,
          noisyEvent2: tempnoisyEvent2,
          noisyEvent3: tempnoisyEvent3,
          noisyEvent4: tempnoisyEvent4,
        },
      });
    },

    * handleCaseTypeStatisticsDetail({ payload: { caseTypeId } }, { call, put }) {

      const res = yield call(fetchCaseTypeStatisticsDetail, caseTypeId);

      yield put({
        type: 'save',
        payload: {
          caseTypeStatisticsDetail: res.data,
        },
      });
    },


    * handleLeftBottom(_, { all, call, put, select }) {
      const res = yield all({
        BlueSkyCount: call(fetchBlueSkyCount),
        BusinessCount: call(fetchBusinessCount),
        AdviceHandleDept: call(fetchAdviceHandleDept),
      })

      const tempBlue = res.BlueSkyCount.data.map((item) => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });
      const tempBusiness = res.BusinessCount.data.map((item) => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });
      const tempAdviceHandle = res.AdviceHandleDept.data.map((item) => {
        return {
          ...item,
          name: firstDataMap[item.deptName],
        };
      });
      yield put({
        type: 'save',
        payload: {
          blueSkyCount: tempBlue,
          businessCount: tempBusiness,
          adviceHandleDept: tempAdviceHandle,
        }
      })
    },

    * handleRightTop(_, { all, call, put, select }) {
      const { typeId } = yield select(state => state.appeal);
      const res = yield all({
        distributeEvent: call(fetchDistributeEvent),
        HistoryData1: call(fetchHistoryData1),
        HistoryData2: call(fetchHistoryData2),
        HistoryData3: call(fetchHistoryData3),
        HistoryData4: call(fetchHistoryData4),
      })

      const tempDis = res.distributeEvent.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });

      const tempHistoryData1 = res.HistoryData1.data[0].map(item => {
        return {
          ...item,
        };
      });

      const tempHistoryData2 = res.HistoryData2.data[1].map(item => {
        return {
          ...item,
        };
      });

      const tempHistoryData3 = res.HistoryData3.data[2].map(item => {
        return {
          ...item,
        };
      });

      const tempHistoryData4 = res.HistoryData4.data[3].map(item => {
        return {
          ...item,
        };
      });

      yield put({
        type: 'save',
        payload: {
          distributeEvent: tempDis,
          // historyDetail: historyDetail.data,
          HistoryData1: tempHistoryData1,
          HistoryData2: tempHistoryData2,
          HistoryData3: tempHistoryData3,
          HistoryData4: tempHistoryData4,
        },
      });
    },

    * handleRightBottom(_, { all, call, put }) {
      const res = yield all({
        TimeHandle: call(fetchTimeHandle),
        monitorCount: call(fetchMonitorCount),
      })

      const tempTimeHandle = res.TimeHandle.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });

      yield put({
        type: 'save',
        payload: {
          monitorCount: res.monitorCount.data,
          TimeHandle: tempTimeHandle,
        },
      });
    },

    * handleArea(_, { all, call, put, select }) {
      //const cityEventByType = yield call(fetchCityEventByType);
      const res = yield all({
        cityEventByType: call(fetchCityEventByType),
        inTimeHandle: call(fetchInTimeHandle),

      });
      const tempCity = res.cityEventByType.data.map(item => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });
      yield put({
        type: 'save',
        payload: {
          cityEventByType: tempCity,
          inTimeHandle: res.inTimeHandle.data,
        },
      });


    },


  },
};
