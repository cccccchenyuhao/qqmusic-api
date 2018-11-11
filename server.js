const express = require('express')
const request = require('request-promise')
const cors = require('cors')
const app = express()


app.use(cors())
app.get('/', (req, res) => {
    const url = `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${+new Date()}`
    var options = {
        uri: url,
        headers: {
            'authority': 'c.y.qq.com',
            'referer': 'https://m.y.qq.com/',
            'authority': 'c.y.qq.com',
            'accept': 'application/json',
            'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Mobile Safari/537.36'
        },
        json: true // Automatically parses the JSON string in the response
    }
    request(options)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err.message)
            // API call failed...
        })
})

app.get('/rank', (req, res) => {
    const url = `https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${+ new Date()}`
    var options = {
        uri: url,
        headers: {
            'authority': 'c.y.qq.com',
            'referer': 'https://m.y.qq.com/',
            'authority': 'c.y.qq.com',
            'accept': 'application/json',
            'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Mobile Safari/537.36'
        },
        json: true // Automatically parses the JSON string in the response
    }
    request(options)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err.message)
            // API call failed...
        })
})

app.get('/search', (req, res) => {
    const url = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp`
    var options = {
        uri: url,
        qs: {
            'n': req.query.n,
            'p': req.query.p,
            'w': req.query.w,
            'g_tk': '5381',
            'uin': 0,
            'format': 'json',
            'inCharset': 'utf - 8',
            'outCharset': 'utf - 8',
            'notice': '0',
            'platform': 'h5',
            'needNewCode': 1,
            _: +new Date()
        },
        headers: {
            'authority': 'c.y.qq.com',
            'referer': 'https://m.y.qq.com/',
            'authority': 'c.y.qq.com',
            'accept': 'application/json',
            'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Mobile Safari/537.36'
        },
        json: true // Automatically parses the JSON string in the response
    }
    request(options)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err.message)
            // API call failed...
        })
})

app.get('/lyric', (req, res)=> {
    var musicid = req.query.id
    const url = `https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&nobase64=1&musicid=${musicid}&songtype=0&_=${+ new Date()}`
    var options = {
        uri: url,
        headers: {
            'authority': 'c.y.qq.com',
            'referer': 'https://m.y.qq.com/',
            'authority': 'c.y.qq.com',
            'accept': 'application/json',
            'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Mobile Safari/537.36'
        },
        json: true // Automatically parses the JSON string in the response
    }
    request(options)
        .then(function (data) {
            var text = data.replace(/MusicJsonCallback\((.*)\)/, '$1')
            // console.log(JSON.parse(text).lyric)
            res.json(JSON.parse(text))
        })
        .catch(function (err) {
            console.log(err.message)
            // API call failed...
        })
})
app.listen(5000)

