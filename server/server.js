const express = require('express')
require('./database/index')
const cors = require("cors")
const taskroutes = require('./routes/task')
const userRoutes = require("./routes/user")
const cookieParser = require("cookie-parser");

const app = express()

//middlewares
app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use('/api/user',taskroutes)
app.use('/api/user/',userRoutes)

app.use('/api',(req,res)=>{
    res.status(200).json({
        message: "hello express"
    })
})


app.listen(3000,()=>{
    console.log('App is now running on port 3000');
    
})