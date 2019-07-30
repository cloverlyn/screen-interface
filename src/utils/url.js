const baseUrl = 'http://175.6.46.236:8024/cs12345/';
const baseUrl1 = 'http://192.168.43.103:8022/cs12345/';
const baseUrl2 = 'https://www.easy-mock.com/mock/5d36b2ccc7c1542cab8bfcd8/monitor/';
const baseUrl3 = 'http://172.29.9.21:1521/cs12345';

export const appealOnlineFinish = {
  OnLineEvent: `${baseUrl}bigScreenPreviewController/queryOnLineEvent`,//
  // AreaEventDetail: `${baseUrl}bigScreenPreviewController/queryAreaEventDetail`,//案件9区
  BlueSkyCount: `${baseUrl}bigScreenPreviewController/queryBlueSkyStatistics?timeType=1`,//蓝天保卫战
  BusinessCount: `${baseUrl}bigScreenPreviewController/queryBusinessStatistics?timeType=1`,//营商环境
  DistributeEvent: `${baseUrl}bigScreenPreviewController/queryDistributeTypeStatistics?timeType=1`,
  InTimeHandle: `${baseUrl}bigScreenPreviewController/queryInTimeHandle`,//
  MonitorCount: `${baseUrl}bigScreenPreviewController/queryMonitorDataStatistics`,
  CityEventByType: `${baseUrl}bigScreenPreviewController/queryCityEventByType`,
  CaseTypeStatistics: `${baseUrl}bigScreenPreviewController/queryCaseTypeStatistics`,
  CaseTypeStatisticsDetail: `${baseUrl}bigScreenPreviewController/queryCaseTypeOfAreas`,
  AdviceHandleDept: `${baseUrl}bigScreenPreviewController/queryAdviceHandleDept`,
  TimeHandle: `${baseUrl}bigScreenPreviewController/queryInTimeHandleFinish`,
  noisyEvent1: `${baseUrl}bigScreenPreviewController/queryCaseSubTypeStatisticsOfYear`,
  noisyEvent2: `${baseUrl}bigScreenPreviewController/queryCaseSubTypeStatisticsOfYear`,
  noisyEvent3: `${baseUrl}bigScreenPreviewController/queryCaseSubTypeStatisticsOfYear1`,
  noisyEvent4: `${baseUrl}bigScreenPreviewController/queryCaseSubTypeStatisticsOfYear1`,
  // CaseTypeOfAreas: `${baseUrl}bigScreenPreviewController/queryCaseTypeOfAreas?typeId=145273`,
  HistoryData1: `${baseUrl}bigScreenPreviewController/queryHistoryDataOfCaseSubType`,
  HistoryData2: `${baseUrl}bigScreenPreviewController/queryHistoryDataOfCaseSubType`,
  HistoryData3: `${baseUrl}bigScreenPreviewController/queryHistoryDataOfCaseSubType1`,
  HistoryData4: `${baseUrl}bigScreenPreviewController/queryHistoryDataOfCaseSubType1`,
  // HistoryData1: `${baseUrl2}history`,
  // HistoryData2: `${baseUrl2}history`,
  // HistoryData3: `${baseUrl2}Event_copy_1563979752939`,
  // HistoryData4: `${baseUrl2}Event_copy_1563979752939`,

};

export const montiorUrl = {
  HotEvent: `${baseUrl}bigScreenPreviewController/queryHotEventStatis`,
  HotEventDetail: `${baseUrl}bigScreenPreviewController/queryHotEventDetailStatis`,
  InTimeSum: `${baseUrl}cmsDataController/getInTimeSum`,
  HistoryVdn: `${baseUrl}cmsDataController/getHistoryVdn`,
  CaseTypeCount: `${baseUrl}bigScreenPreviewController/queryCaseTypeCount`,
  OnLineFinish: `${baseUrl}bigScreenPreviewController/queryOnLineFinishProportionCurrDay`,
  messageLib:  `${baseUrl}bigScreenPreviewController/queryInfoBaseReference`,
  Satisfaction: `${baseUrl}bigScreenPreviewController/querySatisfactionByMonth`,
  WorkOrder: `${baseUrl}bigScreenPreviewController/queryWorkOrderByMonth`,
  CallType: `${baseUrl}bigScreenPreviewController/queryCallTypeCurrMonth`,
  HandleBusiness: `${baseUrl}bigScreenPreviewController/queryHandleBusinessCount`,
  OnlineFinishThis: `${baseUrl}bigScreenPreviewController/queryOnlineFinishProportion?date=0`,
  OnlineFinishLast: `${baseUrl}bigScreenPreviewController/queryOnlineFinishProportion?date=1`,
  // DistributeByMonth: `${baseUrl}bigScreenPreviewController/queryDistributeByMonthType`,
  DistributeByMonth:  `${baseUrl}bigScreenPreviewController/queryDistributeByMonthType`,
  DistributeLastMonth:  `${baseUrl}bigScreenPreviewController/queryDistributeByMonthType`,
};



