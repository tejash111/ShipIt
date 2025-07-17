// services/index.js or services/user.js

import axios from "axios";

export const callRegisterApi = async (formData) => {
  const response = await axios.post(
    "https://shipit1.onrender.com/api/user/register",
    // "http://localhost:3000/api/user/register",
    formData,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const callLoginApi = async (formData) => {
  const response = await axios.post(
    "https://shipit1.onrender.com/api/user/login",
    // "http://localhost:3000/api/user/login",
    formData,
    {
      withCredentials: true
    }
  );
  return response.data
}

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    "https://shipit1.onrender.com/api/user/add-new-task",
    // "http://localhost:3000/api/user/add-new-task",
    formData,
    {
      withCredentials: true
    }
  )
  return response?.data;
}

export const fetchTackApi = async () => {
  const response = await axios.get(
    "https://shipit1.onrender.com/api/user/get-all-task/",
    {
      withCredentials: true
    }
  )
  return response?.data
}

export const deleteTaskApi = async (getCurrentTaskId) => {
  const response = await axios.delete(
    `https://shipit1.onrender.com/api/user/delete-task/${getCurrentTaskId}`,

    {
      withCredentials: true
    }
  )
  return response?.data
}

export const updateTaskApi = async (formData) => {
  const response = await axios.put(
    `https://shipit1.onrender.com/api/user/update-task`,
    formData,
    {
      withCredentials: true
    }
  )
  return response?.data
}

export const logoutApi = async (req, res) => {
  const response = await axios.post(
    "https://shipit1.onrender.com/api/user/logout",
    {},
    { withCredentials: true }
  );

  return response?.data;
};