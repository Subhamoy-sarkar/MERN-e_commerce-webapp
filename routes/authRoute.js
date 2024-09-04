import express from 'express';
import {forgotPasswordController, registerController, updateProfileController} from '../controllers/authController.js';
import { loginController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { testController } from '../controllers/authController.js';

//router object
const router=express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);


//LOGIN || POST
router.post('/login',loginController);

//Forgot password || POST
router.post('/forgot-password',forgotPasswordController);

//test routes
router.get('/test',requireSignIn, isAdmin , testController);

//protected route auth (user )
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
//protected route auth (admin)
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

//update profile
router.put('/profile',requireSignIn,updateProfileController);

export default router