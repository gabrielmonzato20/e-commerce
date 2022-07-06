import  express from "express";
import  dotenv from "dotenv";
import connectDb from "./config/db.js"
import ProductsRouter from './routers/ProductsRouter.js'
import { notFound , errorHandler } from "./midleware/error.js";
const app = express();
dotenv.config();
connectDb(); 
app.get("/", (req,res) =>{
    res.send("Api running2");
})
// app.use((req,res,next) =>{
//     console.log(req.originalUrl)
//     next();
// })
app.use("/api/products",ProductsRouter)
app.use(notFound)
app.use(errorHandler)
app.listen(process.env.PORT ,console.log(`server run on  ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))
