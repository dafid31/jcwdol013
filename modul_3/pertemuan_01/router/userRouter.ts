import { NextFunction, Router,Request,Response } from "express";
import moment from "moment"

const router =Router();
/* 

handler -> function 

handler dibagi menjadi 2 :
-middleware router endpoint (punya 3 parameter => req,res,next)---
didalam handler middleware harus menjalankan next() untuk masuk ke middleware/handler berikutnya 

- business logic / controller /last handler

*/

router.get("/",(req:Request,res:Response,next:NextFunction)=>{
console.log("middlaware1")
next()
}
,(req:Request,res:Response,next:NextFunction)=>{
    console.log("middleware");
    next();
}
,(req:Request,res:Response,next:NextFunction)=>{
    console.log("middleware3");
    next()
}
,(req:Request,res:Response)=>{
    const users=["user1"]
})

router.get("/me",(req:Request,res:Response)=>{
    res.send({
        name:"dafid pratama",
        last_check:moment().format("MM-D-YYYY")
    })
})

export default router;