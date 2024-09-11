
export default [
    {
        url: "/api/article/filter",
        method: "get",
        response: () => ({
                code: 200,
                message: "ok",
                data:{
                    pages:10,
                    total:100,
                    index:1,
                    "records|20":[{
                        "aid|1-100": 0,
                        'title': "@title",
                        "context":'@paragraph',
                        'img':'https://media.prts.wiki/8/83/%E6%B4%BB%E5%8A%A8%E9%A2%84%E5%91%8A_%E6%B3%B0%E6%8B%89%E9%A5%AD_01.jpg',
                        'tags|1-12':['tag_@integer(1,12)'],
                        'createTime':"@date",
                        'updateTime':"@date",
                        'watch|1-10000': 0,
                        'likee|1-10000': 0,
                        'user':{
                            'uid|1-1000':0,
                            'username':'@name',
                            'img':'https://pinia.vuejs.org/logo.svg'
                        }
                    }]
                }
            })
    },
    {
        url: "/api/article/:aid",
        method: "get",
        response: (data)=>{
            return {
                code: 200,
                message: "ok",
                data: {
                    "aid": data.query.aid,
                    'title': "@title",
                    "context":'@paragraph \n @paragraph \n @paragraph \n @paragraph',
                    'tags|1-12':['tag_@integer(1,12)'],
                    'img':'https://media.prts.wiki/8/83/%E6%B4%BB%E5%8A%A8%E9%A2%84%E5%91%8A_%E6%B3%B0%E6%8B%89%E9%A5%AD_01.jpg',
                    'createTime':"@date",
                    'updateTime':"@date",
                    'watch|1-10000': 0,
                    'likee|1-10000': 0,
                    'user':{
                        'uid|1-1000':0,
                        'username':'@name',
                        'img':'https://pinia.vuejs.org/logo.svg',
                        }
                }
            }
        }
    }
]