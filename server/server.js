const express = require   ('express')
const dotenv = require   ('dotenv')
const connectDB =require ('./config/db.js')

const ProductRoutes = require   ('./routes/ProductRoutes.js')


dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.use('/api/products', ProductRoutes)
const PORT = 5000

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`
  )
)
 