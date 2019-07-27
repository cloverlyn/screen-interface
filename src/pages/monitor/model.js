import {
  fetchHotEvent,
  fetHotEventDetail,
  fetchInTimeSum,
  fetchHistoryVdn,
  fetchOnLineFinish,
  fetchCaseTypeCount,
  fetchSatisfaction,
  fetchMessageLib,
  fetchWorkOrder,
  fetchCallType,
  fetchHandleBusiness,
  fetchOnlineFinishThis,
  fetchOnlineFinishLast,
  fetchDistributeByMonth,
  fetchDistributeLastMonth,
} from '@/pages/monitor/service';
import { firstDataMap } from '@/utils/config';

export default {
  namespace: 'monitor',
  state: {
    hotEvent: [],
    hotIndex: '145056',
    hotEventDetail: [],
    phoneState: {
      'IDX_01_04_006': [],
      'IDX_01_04_007': [],
      'IDX_01_04_008': [],
      'IDX_01_04_011': [],
      'IDX_01_04_004': [],
    },
    historyVdn: [
      {
        val: 0,
      },
      {
        val: 0,
      },
      {
        val: 0,
      },
      {
        val: 0,
      },
      {
        val: 0,
      },
      {
        val: 0,
      },
      {
        val: 0,
      },
      {
        val: 0,
      },
      {
        val: 0,
      },
      {
        val: 0,
      },
    ],
    OnLineFinish: [],
    caseTypeCount: [],
    Satisfaction: [],
    messageLib: [],
    WorkOrder: [],
    CallType: [],
    HandleBusiness: [],
    OnlineFinishThis: [],
    OnlineFinishLast: [],
    DistributeByMonth: [],
    DistributeLastMonth: [],
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
        put({ type: 'handleHotEvent' }),
        put({ type: 'handleInTimeSum' }),
        put({ type: 'handleOnLineFinish'}),
        put({ type: 'handleCaseTypeCount' }),
        put({ type: 'handleSatisfaction' }),
        put({ type: 'handlemessageLib' }),
        put({ type: 'handleWorkOrder'}),
        put({ type: 'handleCallType'}),
        put({ type: 'handleHandleBusiness'}),
        put({ type: 'handleOnlineFinishThis'}),
        put({ type: 'handleOnlineFinishLast'}),
        put({ type: 'handleDistributeByMonth'}),
        put({ type: 'handleDistributeLastMonth'})
      ]);
    },
    * handleHotEvent(_, { all, call, put }) {
      const res = yield all({
        hotEvent: call(fetchHotEvent),
      });
      const tempHotEvent = res.hotEvent.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });
      yield put({
        type: 'handleHotEventDetail',
      });
      yield put({
        type: 'save',
        payload: {
          hotEvent: tempHotEvent,
        },
      });
    },
    * handleHotEventDetail(_, { select, call, put }) {
      const { hotIndex } = yield select(state => state.monitor);
      const res = yield call(fetHotEventDetail, hotIndex);

      yield put({
        type: 'save',
        payload: {
          hotEventDetail: res.data,
        },
      });
    },

    * handleInTimeSum(_, { select, all, call, put }) {
      const res = yield all({
        inTimeSum: call(fetchInTimeSum),
        historyVdn: call(fetchHistoryVdn),
      });
      const { phoneState } = yield select(state => state.monitor);
      const tempPhone = JSON.parse(JSON.stringify(phoneState));
      res.inTimeSum.result[0].idxs.forEach((item => {
        tempPhone[item.id].push(parseInt(item.val));
      }));
      const temp = res.historyVdn.result[0].idxs;
      yield put({
        type: 'save',
        payload: {
          phoneState: tempPhone,
          historyVdn: [temp[0], temp[1],temp[8], temp[9]],
        },
      });
    },


    * handleOnLineFinish(_, { all, call, put }) {
      const res = yield all({
        OnLineFinish: call(fetchOnLineFinish),
      });


      yield put({
        type: 'save',
        payload: {
          OnLineFinish: res.OnLineFinish.data,
        },
      });
    },

    * handleCaseTypeCount(_, { call, put }) {
      const res = yield call(fetchCaseTypeCount);
      yield put({
        type: 'save',
        payload: {
          caseTypeCount: res.data,
        },
      });
    },

    * handlemessageLib(_, {all, call, put}){
      const res = yield all({
        messageLib: call(fetchMessageLib),
      });


      const tempMess = res.messageLib.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });
      yield put({
        type: 'handlemessageLib',
      });
      yield put({
        type: 'save',
        payload: {
          messageLib: tempMess,
        },
      });
    },

    * handleSatisfaction(_, { all, call, put }) {
      const res = yield all({
        Satisfaction: call(fetchSatisfaction),
      });

      const tempSati = res.Satisfaction.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });
      yield put({
        type: 'handleSatisfaction',
      });
      yield put({
        type: 'save',
        payload: {
          Satisfaction: tempSati,
        },
      });
      
    
    },

    * handleWorkOrder(_, { all, call, put }) {
      const res = yield all({
        WorkOrder: call(fetchWorkOrder),
      });

      const tempWorkOrder = res.WorkOrder.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });
      yield put({
        type: 'handleWorkOrder',
      });
      yield put({
        type: 'save',
        payload: {
          WorkOrder: tempWorkOrder,
        },
      });
      
    
    },

    * handleCallType(_, { all, call, put }) {
      const res = yield all({
        CallType: call(fetchCallType),
      });

      const tempCallType = res.CallType.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });
      yield put({
        type: 'handleCallType',
      });
      yield put({
        type: 'save',
        payload: {
          CallType: tempCallType,
        },
      });
      
    
    },

    * handleHandleBusiness(_, { all, call, put }) {
      const res = yield all({
        HandleBusiness: call(fetchHandleBusiness),
      });

      const tempHandleBusiness = res.HandleBusiness.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });
      yield put({
        type: 'handleHandleBusiness',
      });
      yield put({
        type: 'save',
        payload: {
          HandleBusiness: tempHandleBusiness,
        },
      });
      
    
    },

    * handleOnlineFinishThis(_, { all, call, put }) {
      const res = yield all({
        OnlineFinishThis: call(fetchOnlineFinishThis),
      });


      yield put({
        type: 'save',
        payload: {
          OnlineFinishThis: res.OnlineFinishThis.data,
        },
      });
    },

    * handleOnlineFinishLast(_, { all, call, put }) {
      const res = yield all({
        OnlineFinishLast: call(fetchOnlineFinishLast),
      });


      yield put({
        type: 'save',
        payload: {
          OnlineFinishLast: res.OnlineFinishLast.data,
        },
      });
    },

    * handleDistributeByMonth(_, { all, call, put }) {
      const res = yield all({
        DistributeByMonth: call(fetchDistributeByMonth),
       
      });

      const tempDistributeByMonth = res.DistributeByMonth.data[0].map(item => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });


      yield put({
        type: 'handleDistributeByMonth',
      });
      yield put({
        type: 'save',
        payload: {
          DistributeByMonth: tempDistributeByMonth,
        },
      });
      
    },
    * handleDistributeLastMonth(_, { all, call, put }) {
      const res = yield all({
    
        DistributeLastMonth: call(fetchDistributeLastMonth),
      });

     
      const tempDistributeLastMonth = res.DistributeLastMonth.data[1].map(item => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });

      yield put({
        type: 'handleDistributeLastMonth',
      });
      yield put({
        type: 'save',
        payload: {
        
          DistributeLastMonth: tempDistributeLastMonth,
        },
      });
      
    },
  },
};
