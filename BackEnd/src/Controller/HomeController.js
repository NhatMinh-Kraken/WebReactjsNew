import db from '../models/index';
import CRUDServices from '../Services/CRUDServices';

let getHomePage = async (req, res) => {

    try {
        let data = await db.User.findAll();
        return res.render('Index.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('Text/About.ejs');
}

let getRegisterPage = (req, res) => {
    return res.render('Register.ejs');
}

let getCrudPage = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDServices.CreateNewUser(req.body);
    console.log(message);
    return res.send('post crud');
}

let displayCrud = async (req, res) => {
    let data = await CRUDServices.GetAllUser();
    return res.render('default.ejs', {
        dataTable: data
    });
}

let editCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId)
    if (userId) {
        let userData = await CRUDServices.GetUserInfoById(userId);
        //check userData not found
        return res.render('EditCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('User not found');
    }
}

let UpdateCrud = async (req, res) => {
    let data = req.body;
    let AllUser = await CRUDServices.UpdateUserData(data);
    return res.render('default.ejs', {
        dataTable: AllUser
    });;
}

let deletecrud = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDServices.deleteCrudUserId(id);
        return res.send('Delete user succeed! ');
    }
    else {
        return res.send('User not found!');
    }
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getRegisterPage: getRegisterPage,
    getCrudPage: getCrudPage,
    postCRUD: postCRUD,
    displayCrud: displayCrud,
    editCRUD: editCRUD,
    UpdateCrud: UpdateCrud,
    deletecrud: deletecrud,
}