import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';
import { comparePassword } from "../helpers/authHelper.js";
export const registerController= async ( req , res)=>{
    try {
        const {name,email,password , phone ,address}=req.body
        //validations
        if(!name){
            return res.send({error:"Name is required"})
        }
        if(!email){
            return res.send({error:"email is required"})
        }
        if(!password){
            return res.send({error:"password is required"})
        }
        if(!phone){
            return res.send({error:"phone no. is required"})
        }
        if(!address){
            return res.send({error:"address is required"})
        }

        //Existing  user checking : 
        const existingUser=await userModel.findOne({email});
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:"Already register please login "
            })
        }

        //register user:
        const hashedPassword=await hashPassword(password)
        //save
        const user=await new userModel({name , email , phone , address , password:hashedPassword}).save();
        res.status(201).send({
            success:true,
            message:"User register successfully",
            user , 
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"error in registration",
            error
        })
    }
};


//POST LOGIN
export const loginController=async (req, res)=>{
    try {
        const {email,password}=req.body;

        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        //check user
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"email is not registered"
            })
        }
        const match=await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid password"
            })
        }
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in login",
            error
        }) 
    }
};
//jsonWEBtoken  (Stateless Authentication  : No Need to Remember Users: When a user logs in, the server doesn't need to remember who they are. Instead, it gives the user a special token (a JWT) that they can use to prove who they are each time they do something.)