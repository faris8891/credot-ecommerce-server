import { app } from '../index.js'
import http from 'http'

const Port = process.env.PORT

app.set('port', Port)
const server = http.createServer(app)

server.listen(Port, () => {
    console.log(`Server is running at ${Port}`)
})