import { useState,useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";    //Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node.js. It simplifies the process of sending asynchronous HTTP requests to REST endpoints and handling responses, making it easier to interact with external APIs or backend services.
import Spinner from "./Spinner";

export default function PrivateRoute(){
    const [ok,setOk]=useState(false);
    const [auth,setAuth]=useAuth();
    useEffect(()=>{
        const authcheck=async()=>{
            const res=await axios.get("/api/v1/auth/user-auth");
        if(res.data.ok){
            setOk(true);
        }else{
            setOk(false);
        }
    };
        if(auth?.token) authcheck();
    },[auth?.token]);

    return ok ? <Outlet/> : <Spinner/>
}