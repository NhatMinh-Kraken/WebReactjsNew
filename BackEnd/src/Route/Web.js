import express from "express";
import homecontroler from "../Controller/HomeController";
import usercontroller from "../Controller/UserController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homecontroler.getHomePage);
    router.get("/About", homecontroler.getAboutPage);
    router.get("/add-crud", homecontroler.getCrudPage);

    router.post("/post-crud", homecontroler.postCRUD);
    router.get("/def-crud", homecontroler.displayCrud);
    router.get("/edit-crud", homecontroler.editCRUD);
    router.post("/Update-Crud", homecontroler.UpdateCrud);
    router.get("/delete-crud", homecontroler.deletecrud);

    router.post('/api/login', usercontroller.handlelogin);
    router.get('/api/get-all-user', usercontroller.handleGetAllUser);

    router.post('/api/register-user', usercontroller.handleRegisterUser);
    router.put('/api/edit-register-user', usercontroller.handleEditRegisterUser);
    router.delete('/api/delete-register-user', usercontroller.handleDeleteRegisterUser);

    return app.use("/", router)
}

module.exports = initWebRoutes;