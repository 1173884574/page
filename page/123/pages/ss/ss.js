// pages/ss/ss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  yes:'',
  film:{},
  b: 'https://www.bilibili.com',
  a: 'https://www.aiqiyi.com',
  y: 'https://www.youku.com',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.setData({
    yes:options.title
  })
  var searchdata=wx.getStorageSync("searchData")
  var i = 0, len = searchdata.length;
  for (; i < len; i++) {
    if(this.data.yes==searchdata[i].title)
    {
      this.setData({
       film:searchdata[i]
      })
    }
  }
  },
  blinkin: function (e) {
    var vs = e.currentTarget.dataset;
    wx.setStorageSync(vs.title, vs)
    this.data.film.scxx = true,
      this.setData({
        film: this.data.film
      })
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