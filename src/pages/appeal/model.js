import {
  fetchBlueSkyCount,
  fetchBusinessCount,
  fetchDistributeEvent,
  fetchInTimeHandle,
  fetchMonitorCount,
  fetchCityEventByType,
  fetchCaseTypeStatistics,
  fetchCaseTypeStatisticsDetail,
  fetchAdviceHandleDept,
  fetchTimeHandle,
  fetchnoisyEvent1,
  fetchnoisyEvent2,
  fetchnoisyEvent3,
  fetchnoisyEvent4,
  fetchHistoryData1,
  fetchHistoryData2,
  fetchHistoryData3,
  fetchHistoryData4,
} from '@/pages/appeal/service';
import { firstDataMap } from '@/utils/config';

export default {
  namespace: 'appeal',
  state: {
    typeId: '145273',
    name: '规划房地',
    onLineEvent: [],
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
    *fetch(_, { all, put }) {
      yield all([
        put({ type: 'handleLeftTop' }),
        put({ type: 'handleLeftBottom' }),
        put({ type: 'handleRightTop' }),
        put({ type: 'handleRightBottom' }),
        put({ type: 'handleArea' }),
      ]);
    },

    *handleLeftTop(_, { all, call, put, select }) {
      const { typeId } = yield select(state => state.appeal);
      //获取左上数据
      const res = yield all({
        CaseTypeStatistics: call(fetchCaseTypeStatistics),
      });

      const tempCaseTypeStatistics = res.CaseTypeStatistics.data.map(item => {
        return {
          ...item,
          caseTypeName: firstDataMap[item.caseTypeName],
        };
      });

      const tempnoisyEvent1 = yield call(fetchnoisyEvent1, typeId);
      const tempnoisyEvent2 = yield call(fetchnoisyEvent2, typeId);
      const tempnoisyEvent3 = yield call(fetchnoisyEvent3, typeId);
      const tempnoisyEvent4 = yield call(fetchnoisyEvent4, typeId);
      const caseTypeDetail = yield call(fetchCaseTypeStatisticsDetail, typeId);

      yield put({
        type: 'save',
        payload: {
          caseTypeStatistics: tempCaseTypeStatistics,
          caseTypeStatisticsDetail: caseTypeDetail.data,
          noisyEvent1: tempnoisyEvent1.data[0],
          noisyEvent2: tempnoisyEvent2.data[1],
          noisyEvent3: tempnoisyEvent3.data[2],
          noisyEvent4: tempnoisyEvent4.data[3],
        },
      });
    },

    *handlenoisyEvent1(
      {
        payload: { typeId },
      },
      { call, put },
    ) {
      const noisyEvent1 = yield call(fetchnoisyEvent1, typeId);
      yield put({
        type: 'save',
        payload: {
          noisyEvent1: noisyEvent1.data[0],
        },
      });
    },
    *handlenoisyEvent2(
      {
        payload: { typeId },
      },
      { call, put },
    ) {
      const noisyEvent2 = yield call(fetchnoisyEvent2, typeId);
      yield put({
        type: 'save',
        payload: {
          noisyEvent2: noisyEvent2.data[1],
        },
      });
    },
    *handlenoisyEvent3(
      {
        payload: { typeId },
      },
      { call, put },
    ) {
      const noisyEvent3 = yield call(fetchnoisyEvent3, typeId);
      yield put({
        type: 'save',
        payload: {
          noisyEvent3: noisyEvent3.data[2],
        },
      });
    },
    *handlenoisyEvent4(
      {
        payload: { typeId },
      },
      { call, put },
    ) {
      const noisyEvent4 = yield call(fetchnoisyEvent4, typeId);
      yield put({
        type: 'save',
        payload: {
          noisyEvent4: noisyEvent4.data[3],
        },
      });
    },

    *handleCaseTypeStatisticsDetail(
      {
        payload: { typeId },
      },
      { call, put },
    ) {
      const res = yield call(fetchCaseTypeStatisticsDetail, typeId);

      yield put({
        type: 'save',
        payload: {
          caseTypeStatisticsDetail: res.data,
        },
      });
    },

    *handleLeftBottom(_, { all, call, put }) {
      const res = yield all({
        BlueSkyCount: call(fetchBlueSkyCount),
        BusinessCount: call(fetchBusinessCount),
        AdviceHandleDept: call(fetchAdviceHandleDept),
      });

      const tempBlue = res.BlueSkyCount.data.map(item => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });
      const tempBusiness = res.BusinessCount.data.map(item => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });
      const tempAdviceHandle = res.AdviceHandleDept.data.map(item => {
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
        },
      });
    },

    *handleRightTop(_, { all, call, put, select }) {
      const { typeId } = yield select(state => state.appeal);
      const res = yield all({
        distributeEvent: call(fetchDistributeEvent),
      });

      const tempDis = res.distributeEvent.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });
      const HistoryData1 = yield call(fetchHistoryData1, typeId);
      const HistoryData2 = yield call(fetchHistoryData2, typeId);
      const HistoryData3 = yield call(fetchHistoryData3, typeId);
      const HistoryData4 = yield call(fetchHistoryData4, typeId);

      yield put({
        type: 'save',
        payload: {
          distributeEvent: tempDis,
          HistoryData1: HistoryData1.data[0],
          HistoryData2: HistoryData2.data[1],
          HistoryData3: HistoryData3.data[2],
          HistoryData4: HistoryData4.data[3],
        },
      });
    },

    *handleHistoryDetail1(
      {
        payload: { typeId },
      },
      { call, put },
    ) {
      const HistoryDetail1 = yield call(fetchHistoryData1, typeId);
      yield put({
        type: 'save',
        payload: {
          HistoryData1: HistoryDetail1.data[0],
        },
      });
    },
    *handleHistoryDetail2(
      {
        payload: { typeId },
      },
      { call, put },
    ) {
      const HistoryDetail2 = yield call(fetchHistoryData2, typeId);
      yield put({
        type: 'save',
        payload: {
          HistoryData2: HistoryDetail2.data[1],
        },
      });
    },
    *handleHistoryDetail3(
      {
        payload: { typeId },
      },
      { call, put },
    ) {
      const HistoryDetail3 = yield call(fetchHistoryData3, typeId);
      yield put({
        type: 'save',
        payload: {
          HistoryData3: HistoryDetail3.data[2],
        },
      });
    },
    *handleHistoryDetail4(
      {
        payload: { typeId },
      },
      { call, put },
    ) {
      const HistoryDetail4 = yield call(fetchHistoryData4, typeId);
      yield put({
        type: 'save',
        payload: {
          HistoryData4: HistoryDetail4.data[3],
        },
      });
    },

    *handleRightBottom(_, { all, call, put }) {
      const res = yield all({
        TimeHandle: call(fetchTimeHandle),
        monitorCount: call(fetchMonitorCount),
      });

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

    *handleArea(_, { all, call, put }) {
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
