const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    films:[],
    bu: "详情",
    inputValue: '',
    films_sc:[],
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '追番小助手',
      path: '/pages/index'
    }
  },
  voteTitle: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  setSearchStorage: function () {
    if (this.data.inputValue != '') {
      wx.navigateTo({
        url: '../ss/ss?title='+this.data.inputValue,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var that = this
    this.data.films=app.globalData.data.films_old,
    wx.setNavigationBarTitle({
      title: "新番列表"
    })
    wx.setStorageSync('searchData', this.data.films)
    var res = wx.getStorageInfoSync()
    var i = 0, len = res.keys.length;
    for (; i < len; i++) {
      this.data.films_sc[i] = wx.getStorageSync(res.keys[i])
    }
    var m = 0, len = res.keys.length;
    for (; m < len; m++) {
      if (this.data.films_sc[m].num>=0){
        this.data.films[this.data.films_sc[m].num].scxx=true}
      }
      this.setData({films:this.data.films})
      console.log(this.data.films)
  },
 blinkin:function(e){
   var vs = e.currentTarget.dataset;
  wx.setStorageSync(vs.title, vs)
  var res = wx.getStorageInfoSync()
  var i = 0, len = res.keys.length;
  for (; i < len; i++) {
    this.data.films_sc[i] = wx.getStorageSync(res.keys[i])
  }
  var m = 0, len = res.keys.length;
  for (; m < len; m++) {
    if (this.data.films_sc[m].num >= 0) {
      this.data.films[this.data.films_sc[m].num].scxx = true
    }
  }
  this.setData({ films: this.data.films })
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
    
  },
  viewDetail: function(e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + ds.id + '&title=' + ds.title + '&cover='+ds.cover+'&detail='+ds.detail+'&goal='+ds.goal+'&scxx='+ds.scxx+'&day='+ds.day+'&num='+ds.num,
      })
    }
})