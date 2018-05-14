// pages/home/home.js
var user = require('../data/user_table.js');
var question = require('../data/ques_table.js');
var comment = require('../data/comm_table.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        grade: ["高一", "高二", "高三"],
        subject: ["全部", "语文", "数学", "英语", "化学", "物理", "生物", "历史", "政治", "地理"],
        quesList: [],
        commList: [],
        curGrade: '高一',
        curSubject: '全部'

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        var quesList = question.ques_data;
        var commList = comment.comm_data;
        quesList.forEach(function (item) {
            let list = [];
            commList.forEach(function (citem) {
                if (item.qId == citem.qId) {
                    list.push(citem);
                    item.comments = list;
                } else {
                    console.log("no comment");
                }
            })
        })
        for (var i = 0; i < quesList.length; i++) {
            if (quesList[i].comments) {
                quesList[i].allCount = quesList[i].comments.length;
            } else {
                quesList[i].allCount = 0;
            }

        }
        that.setData({
            quesList: quesList,
            commList: commList
        })
        console.log(commList);
        console.log(quesList);
    },

    // 选择年级
    chooseG: function (e) { 
        var that = this;
        var curGrade = e.currentTarget.dataset.gra;
        that.setData({
            curGrade: curGrade
        })
    },

    // 选择科目
    chooseS: function (e) {
        var that = this;
        var curSubject = e.currentTarget.dataset.sub;
        that.setData({
            curSubject: curSubject
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