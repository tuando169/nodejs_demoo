const express = require('express')

const app = express()

app.use(express.static('public'))

// route: tuyến đường
app.get('/', function (req, res) {
  res.send(`
    <link rel="stylesheet" href="/css/app.css">
    <h2>HOME PAGE</h2>
  `)
})

app.get('/news', function (req, res) {
    res.send(`
    <link rel="stylesheet" href="/css/app.css">
    <h1>NEWS PAGE</h1>
    <h2>TRÔN TRÔN VN</h2>
    `)
  })

app.listen(3000, () => {
    console.log('successfully')
})