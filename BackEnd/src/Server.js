import express, { request } from "express";
import bodyParser from "body-parser";
import viewEngine from "./Config/ViewEngine";
import initWebRoutes from './Route/Web';
import connectDB from './Config/ConnectDB';
import cors from 'cors';

require('dotenv').config();


let app = express();
app.use(cors({ origin: true }));

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 2726;
//PORT === underfined => port = 2626
app.listen(port, () => {
    //callback
    console.log("Backend" + port)
})
