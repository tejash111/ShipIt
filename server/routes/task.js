const express = require('express')

const {addNewTask,getAllTask,updateTask,deleteTask} = require('../controller/task')
const userAuthVerification= require("../middleware/index")

const router = express.Router()

router.post("/add-new-task",userAuthVerification,addNewTask);
router.get("/get-all-task/:id",userAuthVerification,getAllTask);
router.put("/update-task",userAuthVerification,updateTask)
router.delete("/delete-task/:id",userAuthVerification,deleteTask)

module.exports  = router