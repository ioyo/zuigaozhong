// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        curGrade: 1,
        curCourse: 1,
        gradeList: [],
        courseList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        var gradeList = [{ grade: "高一", index: 1 }, { grade: "高二", index: 2 }, { grade: "高三", index: 3 }];
        var courseList = [{ course: "全部", index: 1 }, { course: "语文", index: 2 }, { course: "数学", index: 3 }, { course: "英语", index: 4 }, { course: "物理", index: 5 }, { course: "化学", index: 6 }, { course: "生物", index: 7 }, { course: "历史", index: 8 }, { course: "政治", index: 9 }, { course: "地理", index: 10 }];
        that.setData({
            gradeList: gradeList,
            courseList: courseList
        })

    },

    clickGrade: function (e) {
        var that = this;
        var curGrade = e.currentTarget.dataset.grade;
            that.setData({
                curGrade: curGrade
            })
    },

    clickCourse: function (e) {
        var that = this;
        var curCourse = e.currentTarget.dataset.course;
        that.setData({
            curCourse: curCourse
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