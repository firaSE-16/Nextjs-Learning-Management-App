import { Request, Response } from "express";
import { compile } from "morgan";
import Course from "../models/courseModel";



export const listCourse = async(req:Request,res:Response):Promise<void>=>{


    const { category} = req.query;

    try{
        const courses = category && category !=="all"
        ? await Course.scan("category").eq(category).exec():
        await Course.scan().exec();
        res.json({message:"COurse retreieved successfully",data:courses})


    } catch(error){
        res.status(500).json({message:"Error retrieving courses", error})

    }
    
}

export const getCourse = async (req:Request,res:Response):Promise<void>=>{
    const {courseId} =req.params;

    try{
        const course = await Course.get(courseId);
        res.json({
            message:"Courses retrieved successfully", data:course
        })
    } catch(error){
        res.status(500).json({
            message:"Error retrieving courses",error
        })
        
    }

}