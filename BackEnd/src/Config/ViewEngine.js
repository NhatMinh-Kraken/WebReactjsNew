import express from "express";


let configViewEngine = (app) => {
    //arrow function

    app.use(express.static("./src/Public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/Views");
}

module.exports = configViewEngine;