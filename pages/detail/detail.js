// pages/detail/detail.js
let listDatas=require('../../datas/list-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    isCollected:false,
    isMusicPlay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let index=options.index
    this.setData({
      detailObj:listDatas.list_data[index],
      index
    })

    //读取本地缓存的数据
    let oldStorage=wx.getStorageSync('isCollected')
    if(oldStorage[index]){
      this.setData({
        isCollected:true
      })
    }
  },
  //处理收藏功能的函数
  handleCollection(){
    let isCollected=!this.data.isCollected
    this.setData({
      isCollected
    })
    //显示消息提示框
    let title=isCollected?'收藏成功':'取消收藏'
    wx.showToast({
      title
    })
    //将收藏的状态缓存至storage中，页面再次加载的时候就从storeage读取状态并更新
    let index=this.data.index
    let obj=wx.getStorageSync('isCollected')||{}
    obj[index]=isCollected
    wx.setStorage({
      data: obj,
      key: 'isCollected',
    })
  },
  musicControl(){
     let isMusicPlay=!this.data.isMusicPlay
     this.setData({
       isMusicPlay
     })

     //实现音乐的播放和停止
    //  if(isMusicPlay){
    //   let {title,coverImgUrl} = listDatas.list_data[this.data.index]

    //   wx.playBackgroundAudio({
    //     dataUrl: 'http://www.mvpdj.com/media/attachment/track/201806/20180615_1910644305b2311068b4cc.mp3',
    //     title,
    //     coverImgUrl
    //   })
    //  }else{
    //    wx.stopBackgroundAudio()
    //  }

    let {title,coverImgUrl} = listDatas.list_data[this.data.index]
     const backgroundAudioManager=wx.getBackgroundAudioManager()
     backgroundAudioManager.src='http://www.mvpdj.com/media/attachment/track/201806/20180615_1910644305b2311068b4cc.mp3'
     backgroundAudioManager.title=title
     backgroundAudioManager.coverImgUrl=coverImgUrl
     if(isMusicPlay){
       backgroundAudioManager.play()
     }else{
       backgroundAudioManager.pause()
     }
     
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