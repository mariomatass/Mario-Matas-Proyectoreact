const express = require('express')
const cors = require('cors')
const login = require('./sevices/login')

const port = 3306

const app = express()
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(cors())



app.get('/', function (req, res) {
    res.json({ message: 'Hola Mundo!' })
})

app.get('/login', async function (req, res, next) {
    console.log(req.query)
    try {
        res.json(await login.getUserData(req.query.user, req.query.password))
    } catch (err) {
        console.error(`Error while getting data `, err.message);
        next(err);
    }
})

app.listen(port)
console.log('API escuchando en el puerto ' + port)