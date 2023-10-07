// import { express } from "express";
import express from 'express'
import cors from 'cors';
//importacion de la conexion a base de datos
import db from "./databases/db.js";
//importacion del enrutador
import blogRoutes from './routes/routes.js'
import router from "./routes/routes.js";

const app = express()

app.use(cors())

app.use(express.json())
app.use('/blogs',blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa');
} catch (error) {
    console.log(`el error de coneccion es:${error}`);
}
app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})
app.use(router)
app.listen(8000,()=>{
        console.log('server UP running in http://localhost:8000/');
})