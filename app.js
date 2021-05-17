const express = require('express')
const { json, urlencoded } = require('body-parser')
const morgan = require('morgan')
const http = require('http')
const WebSocket = require('ws')

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const get = () => {
    let count = 0
    return (req, res) => {
        console.log(req.query.a)
        const id = Math.floor(Math.random() * 100)
        console.log({ count, id })
        res.json({ count, nested: { id } })
        count++
    }
}
app.get('/', get())

const post = () => {
    let count = 0
    return ({ body, headers }, res) => {
        console.log({ count, body, auth: headers.authorization })
        res.send({ count })
        count++
    }
}
app.post('/', post())

wss.on('connection', (ws) => {
    console.log('connect')
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
        //log the received message and send it back to the client
        message = JSON.parse(message)
        console.log('received: %s', message)
        const response = JSON.stringify({ uid: Math.random() })
        console.log(response)
        ws.send(response)
    })

    //send immediatly a feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server')
})

server.listen(3000, () => console.log('listening on port 3000'))
