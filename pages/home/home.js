const app = getApp()
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name: app.getDatas.name,
      author: "author",
      list: [],
      students: [
        {name: '账号一',age: 23},
        {name: '账号二',age: 24},
        {name: '账号三',age: 25},
        {name: '账号四',age: 26},
      ],
      counter: app.getDatas.age
  },
  handleBtnClick(){
    this.setData({
      counter: this.data.counter+= 1
    })
  },
  deleteClick(){
    this.setData({
      counter: this.data.counter-= 1
    })
  },

  handleGetUserInfo(event){
    console.log(event)
  },


  /**
   * 生命周期函数--监听页面加载
   * 页面被加载出来
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'http://139.129.99.0:9001/road/getNews.action?isTop=1',
      success(res){
        console.log(res.data)
        that.setData({
          author: res.data[0].author,
          list: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 页面渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 页面显示出来
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   * 页面关闭执行
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  //页面滑动触发
  onPageScroll(obj){
    console.log(obj)
  },

  //监听页面是否滑动到最底部
  onReachBottom(){
    console.log("页面滑到最底部")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    console.log("下拉刷新")
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