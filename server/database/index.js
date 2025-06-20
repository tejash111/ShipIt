const mongoose = require('mongoose')

mongoose.
connect('mongodb+srv://tejash:9801293794@cluster0.lla2aps.mongodb.net/')
.then(()=>console.log('db connected'))