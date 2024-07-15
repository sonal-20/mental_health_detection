import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register=async(req,res)=>{
    const {username,email,password}=req.body;
    let user;
    try {
        user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User with that email is already exists"})
        }
        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=await User.create({
            username,
            email,
            password:hashedPassword
        })

        await newUser.save();
        return res.status(201).json({message:"User created successfully",newUser})
    } catch (error) {
        console.log(error,"error")
        throw new Error(error)
    }
}

export const login=async(req,res)=>{
    const {email,password}=req.body;
    let user;
    try {
        user=await User.findOne({email});;
        if(!user){
            return res.status(400).json({message:"User with that email does not exists"});
        }
        const comparedPassword=await bcrypt.compare(password,user.password);
        if(!comparedPassword){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1h"});
        return res.status(200).json({message:"Login successful",token,user})

    } catch (error) {
        console.log(error,"error")
        throw new Error(error) 
        
    }
}