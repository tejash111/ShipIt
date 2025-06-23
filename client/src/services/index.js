// services/index.js or services/user.js

import axios from "axios";

export const callRegisterApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:3000/api/user/register",
    formData,
    {
      withCredentials: true, 
    }
  );

  return response.data;
};

export const callLoginApi = async (formData) =>{
  const response = await axios.post(
    "http://localhost:3000/api/user/login",
    formData,
    {
      withCredentials:true
    }
  );
  return response.data
}