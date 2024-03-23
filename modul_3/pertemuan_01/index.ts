import express ,{Request,Response,Application, NextFunction}from "express"
import bodyParser from "body-parser"


const PORT =8000

const app: Application = express()
const router =express.Router();


app.use((req:Request,res:Response,next:NextFunction)=>{
next();
})

app.use((error:Error,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).send("something error ")

})

app.use(bodyParser.json())

app.get("/",(req:Request,res:Response)=>{
return res.send({
    nama:"dafid pratama putra",
    
})
})
app.post("/add",(req:Request,res:Response)=>{
return res.send({
    nama:"dafid pratama putra",
    
})
})


app.listen(PORT,()=>{
    console.log("application start on port",PORT);
    
})