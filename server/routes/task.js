const express = require('express')

const {addNewTask,getAllTask,updateTask,deleteTask} = require('../controller/task')

const router = express.Router()

router.post("/add-new-task",addNewTask);
router.get("/get-all-task",getAllTask);
router.put("/update-task",updateTask)
router.delete("/delete-task/:id",deleteTask)

module.exports  = router