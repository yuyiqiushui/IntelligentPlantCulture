Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: '../../images/light.png',
        timeSet: '时段设定',
        startTime: '起始时间',
        endTime: '结束时间',
        color: '#000',
        save: '保存',
        home: '主页',
        inputValue: '',
        border: '1px solid #ccc',
    },
    bindKeyInput: function (e) {
        var that = this

        var inputVal = e.detail.value
        var inputId = e.currentTarget.id
        if (inputVal == '' || inputVal == null) {
            this.setData({
                inputValue: inputVal + e.detail.value
            })

        } else {
            if (inputVal.length == 2) {
                switch (inputId) {
                    case "input1":
                        this.setData({
                            ValueNum1: inputVal + ":"
                        })
                        break;
                    case "input2":
                        this.setData({
                            ValueNum2: inputVal + ":"
                        })
                        break;
                    case "input3":
                        this.setData({
                            ValueNum3: inputVal + ":"
                        })
                        break;
                    case "input4":
                        this.setData({
                            ValueNum4: inputVal + ":"
                        })
                        break;
                    case "input5":
                        this.setData({
                            ValueNum5: inputVal + ":"
                        })
                        break;
                    case "input6":
                        this.setData({
                            ValueNum6: inputVal + ":"
                        })
                        break;
                }
                console.log(inputVal)
            }

        }
        this.setData({
            inputValue: e.currentTarget.id + ":" + e.detail.value
        })
        console.log("eeeee", e.detail.value)
        return e.detail.value;
    },
    bindFocusInput: function () {
        var that = this
        that.setData({
            border: "1px solid red"
        })
    },
    bindHome: function () {
        wx.navigateTo({
            url: '../index/index',
        })
    },
    bindSave: function () {
        var that = this
        var ss = that.data.inputValue
        // var ss = that.bindKeyInput()
        console.log(ss)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})