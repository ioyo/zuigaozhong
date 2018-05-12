var data = [
    {
        qId: 0,
        uId: 1111,
        cId: 123,
        content: "我评论你啊",
        child: [
            {
                uId: 4354,
                content: "我回复你",
                child: []
            },
            {
                uId: 4354,
                content: "我回复你",
                child: null
            }
        ]
    },
    {
        qId: 2,
        uId: 4444,
        cId: 153,
        content: "我又评论你啊",
        child: null
    },
    {
        qId: 2,
        uId: 3333,
        cId: 153,
        content: "第二个",
        child: null
    },
    {
        qId: 2,
        uId: 4444,
        cId: 153,
        content: "啦啦啦",
        child: null
    },
    {
        qId: 2,
        uId: 4444,
        cId: 153,
        content: "你说呢",
        child: null
    }
]

module.exports = {
    comm_data: data
}