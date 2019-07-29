import request from '@/utils/request';
import { appealOnlineFinish } from '@/utils/url';

/**
 * 获取诉求工单第一部分的在线办结图
 * @returns {Promise<*>}
 */
export function fetchOnLineEvent() {
  const { OnLineEvent } = appealOnlineFinish;
  return request(OnLineEvent, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取分类的详情数据
 * @param typeId 时间的id
 * @returns {Promise<*>}
 */
// export function fetchAreaEventDetail(typeId) {
//   const { AreaEventDetail } = appealOnlineFinish;
//   return request(`${AreaEventDetail}?typeId=${typeId}`, {
//     header: new Headers({
//       'Content-Type': 'application/x-www-form-urlencoded',
//     }),
//   });
// }

/**
 * 获取蓝天保卫战的数据
 * @returns {Promise<*>}
 */
export function fetchBlueSkyCount() {
  const { BlueSkyCount } = appealOnlineFinish;
  return request(BlueSkyCount, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
//微建议
export function fetchAdviceHandleDept() {
  const { AdviceHandleDept } = appealOnlineFinish;
  return request(AdviceHandleDept, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取营商环境数据
 * @returns {Promise<*>}
 */
export function fetchBusinessCount() {
  const { BusinessCount } = appealOnlineFinish;
  return request(BusinessCount, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取转办工单案件
 * @returns {Promise<*>}
 */
export function fetchDistributeEvent() {
  const { DistributeEvent } = appealOnlineFinish;
  return request(DistributeEvent, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取区县实时数据
 * @returns {Promise<*>}
 */
export function fetchInTimeHandle() {
  const { InTimeHandle } = appealOnlineFinish;
  return request(InTimeHandle, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取监察数据
 * @returns {Promise<*>}
 */
export function fetchMonitorCount() {
  const { MonitorCount } = appealOnlineFinish;
  return request(MonitorCount, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

export function fetchCityEventByType() {
  const { CityEventByType } = appealOnlineFinish;
  return request(CityEventByType, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
//各案件大类数据统计
export function fetchCaseTypeStatistics() {
  const { caseTypeStatistics } = appealOnlineFinish;
  return request(caseTypeStatistics, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//各案件大类数据统计详情
export function fetchCaseTypeStatisticsDetail(caseTypeId) {
  const { CaseTypeStatisticsDetail } = appealOnlineFinish;
  return request(`${CaseTypeStatisticsDetail}?typeId=${caseTypeId}`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}


// 实时区县办结案件
export function fetchTimeHandle() {
  const { TimeHandle } = appealOnlineFinish;
  return request(TimeHandle, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//噪音案件
export function fetchnoisyEvent1() {
  const { noisyEvent1 } = appealOnlineFinish;
  return request(noisyEvent1, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchnoisyEvent2() {
  const { noisyEvent2 } = appealOnlineFinish;
  return request(noisyEvent2, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchnoisyEvent3() {
  const { noisyEvent3 } = appealOnlineFinish;
  return request(noisyEvent3, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchnoisyEvent4() {
  const { noisyEvent4 } = appealOnlineFinish;
  return request(noisyEvent4, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//噪音处理九区
// export function fetchCaseTypeOfAreas() {
//   const { CaseTypeOfAreas } = appealOnlineFinish;
//   return request(CaseTypeOfAreas, {
//     header: new Headers({
//       'Content-Type': 'application/x-www-form-urlencoded',
//     }),
//   });
// }

//历史数据
export function fetchHistoryData1(typeId) {
  const { HistoryData1 } = appealOnlineFinish;
  return request(`${HistoryData1}?typeId=${typeId}&timeType=1`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchHistoryData2(typeId) {
  const { HistoryData2 } = appealOnlineFinish;
  return request(`${HistoryData2}?typeId=${typeId}&timeType=1`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchHistoryData3(typeId) {
  const { HistoryData3 } = appealOnlineFinish;
  return request(`${HistoryData3}?typeId=${typeId}&timeType=1`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchHistoryData4(typeId) {
  const { HistoryData4 } = appealOnlineFinish;
  return request(`${HistoryData4}?typeId=${typeId}&timeType=1`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}