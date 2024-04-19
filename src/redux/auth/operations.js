import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(instance);
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);

      setToken(res.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const register = async (registerData) => {
//   const { data } = await instance.post("auth/register", registerData);
//   setToken(data.token);

//   return data;
// };

export const login = async (loginData) => {
  const { data } = await instance.post("auth/login", loginData);
  setToken(data.token);

  return data;
};

export const logout = async () => {
  const { data } = await instance.post("auth/logout");

  return data;
};
