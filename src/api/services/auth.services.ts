import api from "../handlers/api"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLogin = createAsyncThunk("getLogin",
    async (data:{email:string,password:string}) =>{
        console.log(data)
        try{
            const response = await api.post("/login",data)
            console.log(response.data)
    
            return {password:"pravin",email:"psaw@gmail.com"}
        }catch(err){    
            console.log(err)
        }
    }
)