const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

app.use(express.static('public'))

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '\\views');
// route: tuyến đường
app.get('/', function (req, res) {
  try {
    res.render('home')
  } catch (error) {
    console.log("error")
  }
})

app.get('/news', function (req, res) {
    res.render('news')
  })

app.listen(3000, () => {
    console.log('successfully')
})