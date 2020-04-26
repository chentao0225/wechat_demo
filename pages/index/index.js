// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"sun",
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setTimeout(()=>{
    //   this.setData({
    //     msg:'修改后的值'
    //   })
    // },2000)
    //获取用户登录信息
    wx.getUserInfo({
      success:(msg)=>{
        console.log('获取用户信息成功')
        this.setData({
          userInfo:msg.userInfo
        })
      },
      fail:()=>{
        console.log('获取用户信息失败')
      }
    })
  },
  //getuserinfo的回调
  handleGetUserInfo(msg){
    console.log(msg)
    if(msg.detail.userInfo){
      this.setData({
        userInfo:msg.detail.userInfo
      })
    }
  },
  // handleParent(){
  //   console.log('parent');
  // },
  // handleChild(){
  //   console.log('child');
  // },
  toList(){
    //跳转list页面
    console.log("1111")
    wx.navigateTo({
      url:"/pages/list/list"
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