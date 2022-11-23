const express = require('express')
const app = express()
const userrouter = require('./router/users') 
const port = 3000
const connectDb = require('./config/db')

app.use(express.json())//untuk membaca inputan
app.use(express.urlencoded({ extended: true }))//unutk membaca inputan

app.get('/',(req, res) => {
    res.send('Hello Word!')
})

app.use(userrouter)

connectDb()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})