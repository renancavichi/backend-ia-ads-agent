import express from 'express'
import { iaController } from './controllers/iaController.js'
import cors from 'cors'
import { messageController } from './controllers/messageController.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/ia', iaController)

app.get('/messages', messageController)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})