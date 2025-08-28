const express = require('express')
const app = express()
const port = 3000

//Middleware
app.use(express.static('public'))
app.set("view engine",'ejs')
app.set('view',__dirname+'\views')
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname+"/home.html")
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname+"/about.html")
})

//http://127.0.0.1:3000/product/1
app.get('/product/:id', (req, res) => {
  var a=req.params.id
  res.send("Product is "+a)
})

//http://127.0.0.1:3000/search?q=laptop
app.get('/search', (req, res) => {
  var a=req.query.q
  res.send("Product is "+a)
})


app.get('/contact', (req, res) => {
  res.sendFile(__dirname+"/contact.html")
})

app.get('/contactprocess', (req, res) => {
  var no1=req.query.txt1
  var no2=req.query.txt2
  var c=parseInt(no1)+parseInt(no2)
  res.send("Sum is "+c)
})

app.get('/sum', (req, res) => {
  res.render('sum')
})

app.post('sumprocess',(req,res)=>{
    console.log(req.body)
    var a=req.body.txt1
    var b=req.body.txt2
    var c=parseInt(a) + parseInt(b)
    res.render('ans',{mya:a,myb:b,myc:c})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})