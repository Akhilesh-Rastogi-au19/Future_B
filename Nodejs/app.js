const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const validator = require('validator');
const Joi = require('joi')

app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello FutureBridge')
})

app.post('/ping', (req, res) => {

    res.send('Hello from simple server :)')
})


app.use((err, req, res, next) => {
    if (err) {
        console.error(err.message)
        if (!err.statusCode) { err.statusCode = 500 }
        return res.status(err.statusCode).send({
            statusCode: err.statusCode,
            message: err.message
        })
    }

    next()
})

app.use((req, res) => {
    res.status(404).send('404 not found')
})

app.listen(5000, () => {
    console.log('server is started')

})
