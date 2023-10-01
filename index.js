const express = require('express')
const { engine } = require('express-handlebars')
// const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', engine())
app.set('views engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('home.handlebars')
})

app.get('/orders', (req, res) => {
    const query = 'SELECT * FROM orders'

    conn.query(query, (err, data) => {
        if(err){
            console.log(err)
            return
        }

        const orders = data
        
        res.render('orders.handlebars', { orders })
    })
})

app.post('/orders/insertOrder', (req, res) => {
    const holder = req.body.holder
    const order = req.body.order
    const edition = req.body.edition

    const query = `INSERT INTO orders (holder, \`order\`, edition) VALUES ('${holder}', '${order}', '${edition}')`

    conn.query(query, (err) => {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/orders')
    })
}) 

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pedidosHc'
})

conn.connect((err) =>{
    if(err){
        console.log(err)
    }

    console.log('conecatado ao Banco de pedidos')
    app.listen(3000)
})
