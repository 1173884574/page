// pages/sc/sc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
films_sc:[],
films_clear:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var res = wx.getStorageInfoSync()
   var i = 0, len = res.keys.length;
   for (; i < len; i++) {
     this.data.films_sc[i] = wx.getStorageSync(res.keys[i])}
   this.setData({ films_sc: this.data.films_sc })
  },
  blinkout:function(e){
    var move = e.currentTarget.dataset;
    wx.removeStorageSync(move.title)//
    var res = wx.getStorageInfoSync()
    this.setData({films_sc:this.data.films_clear})//清空收藏列表
    var i = 0, len = res.keys.length;
    for (; i < len; i++) {
      this.data.films_sc[i] = wx.getStorageSync(res.keys[i])
    }//重新获取收藏列表
    this.setData({ films_sc: this.data.films_sc })
    console.log(this.data.films_sc)
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