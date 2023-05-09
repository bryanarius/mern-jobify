import 'express-async-errors'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

// db and authenticateUser
import connectDB from './db/connect.js'

// routers
import authRoutes from './routes/authRoutes.js'
import jobsRoutes from './routes/jobsRoutes.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Welcome!')
})
app.get('/api/v1', (req, res) => {
    res.json({msg:"api"})
})

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/jobs', jobsRoutes)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}!`)
        })              
    }catch (error) {
        console.log(error)
    }
}

start()