import * as echarts from '../../ec-canvas/echarts';
var dataCurveJs = require('../../curvejs/dateCurveJs.js');  

const app = getApp();
var dataCurve = { "tempSource": [["product", "实际曲线"], ["2018-03-09 13:18:33", 23], ["2018-03-09 18:24:56", -60], ["2018-03-09 19:00:55", -60], ["2018-03-09 19:05:55", 30], ["2018-03-09 19:10:55", -60], ["2018-03-09 19:15:55", -60], ["2018-03-09 19:20:55", -60], ["2018-03-09 19:25:55", -60]], "humiSource": [["product", "实际曲线 "], ["2018-03-09 13:18:33", 15], ["2018-03-09 18:24:56", 0], ["2018-03-09 19:00:55", 0], ["2018-03-09 19:05:55", 0], ["2018-03-09 19:10:55", 0], ["2018-03-09 19:15:55", 0], ["2018-03-09 19:20:55", 0], ["2018-03-09 19:25:55", 0]], "lightSource": [["product", "实际曲线 "], ["05:00", 0], ["05:00", 1], ["20:30", 1], ["20:30", 0]], "setMaxTempSource": [["product", "设置的曲线 "], ["06:00", 25], ["20:00", 23]], "setMinTempSource": [["product", "设置的曲线 "], ["06:00", 21], ["20:00", 18]], "setMaxHumiSource": [["product", "设置的曲线 "], ["12:55", 58], ["23:47", 59]], "setMinHumiSource": [["product", "设置的曲线 "], ["12:55", 55], ["23:47", 57]] }
var temp = dataCurve.tempSource, humi = dataCurve.humiSource, i;
//灯组、温度最高、温度最低
var Light = dataCurve.lightSource, setMaxTemp = dataCurve.setMaxTempSource, setMinTemp = dataCurve.setMinTempSource
//湿度
var setMaxHumi = dataCurve.setMaxHumiSource, setMinHumi = dataCurve.setMinHumiSource;
var arrTempHour = [], arrTempValue = [], arrHumiHour = [], arrHumiValue = [];
var arrSetMaxTempValue = [], arrSetMinTempValue = [], arrLightValue = [];
var arrSetMaxTempHour = [], arrSetMinTempHour = [], arrLightHour = [];
//湿度
var arrSetMaxHumiValue = [], arrSetMaxHumiHour = [], arrSetMinHumiValue = [], arrSetMinHumiHour = [];
var TempArray = [];

dataCurveJs.xAsixTempHumi(temp, setMaxTemp, setMinTemp, arrTempHour, arrTempValue);
dataCurveJs.xAsixTempHumi(humi, setMaxHumi, setMinHumi, arrHumiHour, arrHumiValue);
//标志位开始
dataCurveJs.xAsixTempHumiLight(Light, arrLightHour, arrLightValue);
dataCurveJs.xAsixTempHumiLight(setMaxTemp, arrSetMaxTempHour, arrSetMaxTempValue);
dataCurveJs.ValueAverage(arrTempHour, arrSetMaxTempHour, arrSetMaxTempValue);
//Humi Max
dataCurveJs.xAsixTempHumiLight(setMaxHumi, arrSetMaxHumiHour, arrSetMaxHumiValue);
dataCurveJs.ValueAverage(arrTempHour, arrSetMaxHumiHour, arrSetMaxHumiValue);
//Humi min
dataCurveJs.xAsixTempHumiLight(setMinHumi, arrSetMinHumiHour, arrSetMinHumiValue);
dataCurveJs.ValueAverage(arrTempHour, arrSetMinHumiHour, arrSetMinHumiValue);


dataCurveJs.xAsixTempHumiLight(setMinTemp, arrSetMinTempHour, arrSetMinTempValue);

dataCurveJs.ValueAverage(arrTempHour, arrSetMinTempHour, arrSetMinTempValue);



function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    color: ["#FF0000", "#00FF00", "#0000FF"],
    legend: {
      width:'100%',  
      data: ['实际曲线', '标准曲线 Max', '标准曲线 Min'],
      top: 0,
      backgroundColor:'#eee',
      z: 100
    },
    grid: {
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: arrTempHour,
      axisLine: { symbol: ['none', 'arrow'] }
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLine: { symbol: ['none', 'arrow'] }
      // show: false
    },
    series: [{
      name: '实际曲线',
      type: 'line',
      smooth: true,
      data: arrTempValue
    }, {
      name: '标准曲线 Max',
      type: 'line',
      smooth: true,
      data: arrSetMaxTempValue
    }, {
      name: '标准曲线 Min',
      type: 'line',
      smooth: true,
      data: arrSetMinTempValue
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    },
    charts:[{
        id:'lightCurve',
        name:'灯组'
    },{
        id:'tempCurve',
        name:'温度'

    },{
        id:'humiCurve',
        name:'湿度'
    },{
        id:'fluidCurve',
        name:'液位'
    }]
  },

  onReady() {
  },
  open:function(e){
      console.log(e)
      wx.navigateTo({
          url: e.target.dataset.chart.id + '/index',
          success: function(res) {"aaaaaa"},
          fail: function(res) {},
          complete: function(res) {},
      })
  }
});
