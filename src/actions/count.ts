import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://reqres.in/";

export const loadUser = createAsyncThunk('api/users/2', async () => {
   try {
    const response = await axios.get('api/users/2');
    return response.data.data;
   }catch(err){
    return err;
   }
})