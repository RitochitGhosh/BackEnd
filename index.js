require ('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World3000!')
})

app.get('/twitter', (req, res) => {
    res.send('ghoshritochit')
})

app.get('/login', (req, res) => {
    res.send('<h1> Login into our website </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> YouTube ')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})