var util = require('../../utils/util.js');  
const app = getApp();

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () {},
      fail: function () {}
    }
  },
  data: {
      title: [{
          id: 'title',
          name: '智能植物栽培系统'

      }],
      infos:[{
          id:'time',
          name:'时间',
          fontSize:'12px'

      },{
          id:'stop',
          name:'停止',
          fontSize: '15px'

      },{
          id:'warning',
          name:'报警',
          fontSize: '15px'

      }],
      lights:[{
          id:'light',
          name:'灯组'
      }],
    charts: [{
        id: 'temp',
        name: '温度'
    }, {
      id: 'humi',
      name: '湿度'
    }, {
      id: 'fluid',
      name: '液位'
    }, {
      id: 'video',
      name: '查看视频'
    }, {
        id: 'curve',
        name: '历史曲线'
    }, {
      id: 'varies',
      name: '品种选择'
    }, {
      id: 'companyinfo',
      name: '公司介绍'
    }, {
      id: 'openclose',
      name: '开/关'
    }, {
      id: 'help',
      name: '帮助'
    }],
    chartsWithoutImg: [{
      id: 'lazyLoad',
      name: '延迟加载图表'
    }, {
      id: 'multiCharts',
      name: '一个页面中多个图表'
    }, {
      id: 'move',
      name: '页面不阻塞滚动'
    }, {
      id: 'saveCanvas',
      name: '保存 Canvas 到本地文件'
    }]
  },

  onReady:function(){
      var that = this;
      //that.init(that);          //这步很重要，没有这步，重复点击会出现多个定时器
      var time = that.data.time;
      setInterval(function () {
          var t = util.formatTime(new Date())
          time = t;
          that.setData({
              time: time
          })
      }, 1000)
      
  },

  open: function (e) {
    wx.navigateTo({
      url: '../' + e.target.dataset.chart.id + '/index'
    });
    console.log("e,,,,,,",e)
  },
  sendFluidMsg:function(){
      wx.request({
          method:'POST',
          data: {'nickname': "15932776236"},
          url: "http://www.treeos.com/index.php?m=content&c=index&a=lightzcode",
          success: function (res) {
            console.log("aaaaa",res.data)
          },
          fail:function(){
              console.log("bbbbbbb")
          }
      })
  },
  onLoad:function(){
    this.sendFluidMsg()
    this.queryLighthouse()

  },


  queryLighthouse: function (){
      wx.request({
          type: "GET",
          data: { "lightN": 22, "device_id": 2 },
          url: "http://localhost:8080/treeos/queryLighthouse.do",
          success: function (res) {


            //   var json = $.parseJSON(data);

            //   for (i = 0; i < json["datalength"]; i++) {
            //       lig[i] = json[required_name + i];

            //   }
            console.log(res.data)

          }
      })
  }
});
