Page({

  /**
   * 页面的初始数据
   */
  data: {
      selVaries:[{
        id:'CaoMei',
        name:'草莓',
        checked:'true',
    },{
        id:'BaiCai',
        name:'白菜'
    },{
        id:'QinCai',
        name:'芹菜'
    },{
        id:'YouCai',
        name:'油菜'
    },{
        id:'JuHua',
        name:'菊花'
    }],
    submitTap:'提交',
    submitCheck:''
  },
  radioTap: function (e) {
      this.setData({
        submitCheck :e.currentTarget.dataset.selvarie.id
      })
      console.log(e.currentTarget.dataset.selvarie.id)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  submitTap:function(){
      var that=this
      console.log(that.data.submitCheck)
  },
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