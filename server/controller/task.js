const { default: mongoose } = require('mongoose');
const Task = require('../models/task')

//add a new task
//get all tasks by userid
//delete a task
//edit a task

const addNewTask = async (req, res) => {
    const { title, description, status, userId, priority } = req.body;

    //validate the schema
    try {
        const newTask = await Task.create({
            title,
            description,
            status,
            userId,
            priority
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
    const {id }=req.params
    try {
        const FetchAllTaskById = await Task.find({userId : id})

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
    const { title, description, status, priority, userId,_id } = req.body;
    try {
        const updatedTask =await Task.findByIdAndUpdate({   _id,
      },
      {
        title,
        description,
        status,
        priority,
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

    try {
        if (!id){
            return res.status(400).json({
                success:false,
                message:"id is required"
            })
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
