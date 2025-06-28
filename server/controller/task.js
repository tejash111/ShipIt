const { default: mongoose } = require('mongoose');
const Task = require('../models/task')

//add a new task
//get all tasks by userid
//delete a task
//edit a task

const addNewTask = async (req, res) => {
    const { title, description, status, priority,date} = req.body;
    const userId=req.userId

    //validate the schema
    try {
        const newTask = await Task.create({
            title,
            description,
            status,
            priority,
            date,
            userId,
        })

        if (newTask) {
            return res.status(201).json({
                success: true,
                message: "Task created successfully"
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "some error occured pls try again"
            })
        }

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Some error occured! Please try again",
        });
    }
}

const getAllTask = async (req,res) => {
    const userId=req.userId
    try {
        const FetchAllTaskById = await Task.find({userId })

        if (FetchAllTaskById){
            return res.status(201).json({
                success:true,
                message:"fetch all data",
                tasks:FetchAllTaskById
            })
        }else{
             return res.status(400).json({
                success: false,
                message: "some error occured pls try again"
            })
        }
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Some error occured! Please try again",
        });
    }
}

const updateTask = async(req,res) => {
    const { title, description, status, priority,_id } = req.body;
    const userId = req.userId
    try {
        const updatedTask =await Task.findByIdAndUpdate( _id,
      
      {
        title,
        description,
        status,
        priority,
        date,
        userId,
      },
      { new: true })

        if (updatedTask){
            return res.status(201).json({
                success:true,
                message:"Task updated successfully",
                task: updatedTask
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"something went wrong pls try again"
            })
        }
    } catch (error) {
         console.log(error);

        return res.status(500).json({
            success: false,
            message: "Some error occured! Please try again",
        });
    }
}

const deleteTask = async(req,res)=>{
    const {id }=req.params;
    const userId = req.userId;

    try {
        if (!id){
            return res.status(400).json({
                success:false,
                message:"id is required"
            })
        }
        const task =await Task.findById(id)

         if (task.userId.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized to delete this task"
      });
    }

        const deletedTask =await Task.findByIdAndDelete(id);

        if (deletedTask){
            return res.status(201).json({
                success:true,
                message:"task deleted successfully"
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"something went wrong pls try again"
            })
        }
    } catch (error) {
         console.log(error);

        return res.status(500).json({
            success: false,
            message: "Some error occured! Please try again",
        });
    }
}

module.exports= {addNewTask,getAllTask,updateTask,deleteTask};
