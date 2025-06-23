const express = require('express')
require('./database/index')
const taskrouter = require('./routes/task')

const app = express()

app.use(express.json())

app.use('/api/user',taskrouter)

app.use('/api',(req,res)=>{
    res.status(200).json({
        message: "hello express"
    })
})


app.listen(3000,()=>{
    console.log('App is now running on port 3000');
    
})