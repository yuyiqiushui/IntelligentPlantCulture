//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        submit: '提交',
        inputId:'inputId',
        inputValue:'',
        phone:'18353869935'
    },
    inputIdTap:function(e){
        this.setData({
            inputValue :e.detail.value
        })
    },
    //事件处理函数
    submitClick: function () {
        // wx.navigateTo({
        //     url: '../help/index',
        // })
        var that=this
        this.sendFluidMsg(that.data.inputValue)

    },
    sendFluidMsg: function (phone) {
        wx.request({
            method: 'GET',
            data: { "phone": phone },
            url: "http://localhost:8080/treeos/LighthouseController.do",
            success: function (res) {
                console.log("aaaaa", res.data)
                if (res.data=="success!"){
                    wx.navigateTo({
                        url: '../help/index',
                    })
                }else{
                    wx.navigateTo({
                        url: '../light/index',
                    })
                }
                
            },
            fail: function (res) {
                console.log("接口调用失败")
                
            }
        })
    },
})
