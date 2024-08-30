import {useState,useEffect,useContext,createContext} from 'react';
import axios from 'axios';
const AuthContext=createContext();                      //This line creates a new context called AuthContext, which will be used to share authentication data (like user info and token) across components.
const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({                 //for managing the authentication state within the AuthProvider component globally
        user:null,
        token:""
    });
    //default axios 
    axios.defaults.headers.common["Authorization"]=auth?.token;

    
    useEffect(()=>{                                      //The function that performs the side effect. This function is executed after the component renders.
        const data=localStorage.getItem("auth");        // 'auth'  -- >  variable name / key name in local storage 
        if(data){
            const parseData=JSON.parse(data);
            setAuth({                                    // The auth state is updated with the parsed user and token values from localStorage. The spread operator (...auth) ensures that any other properties in the auth state remain unchanged.
                ...auth,                                    //previous values as it is
                user:parseData.user ,
                token:parseData.token,
            })
        }
        //eslint-disable-next-line
    },[]);                                                //Dependency Array : An array of dependencies that the effect relies on. The effect function will only run when one of these dependencies changes  .          The useEffect depends on the auth state. This means that the effect will re-run every time the auth state changes. However, this can lead to an infinite loop because setAuth will update auth, triggering useEffect again
    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

//custom Hook
const useAuth=()=>useContext(AuthContext)   //This is a custom hook that simplifies access to the AuthContext. It uses the useContext hook to retrieve the context value (i.e., the auth state and setAuth function) and returns it.
export {useAuth,AuthProvider}


// The Context API in React is a tool for managing global state across a React application. It allows you to create a context object that can be used to share data between components without passing props down through every level of the component tree.