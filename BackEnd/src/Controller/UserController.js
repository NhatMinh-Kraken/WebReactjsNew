import userService from "../Services/UserServices";

let handlelogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let RoleId;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Email hoặc mật khẩu không được trống !'
        })
    }
    //check email exist
    //compare password
    //return userInfor
    //access_token JWT json web token

    let UserData = await userService.HandleUserLogin(email, password, RoleId);

    return res.status(200).json({
        errCode: UserData.errCode,
        message: UserData.errMessage,
        user: UserData.user ? UserData.user : {}
    })
}

let handleGetAllUser = async (req, res) => {
    let id = req.query.id; //all, id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Chưa truyền id',
            users: []
        })
    }

    let users = await userService.getAllUser(id);

    return res.status(200).json({
        errCode: 0,
        errMessage: 'okeeee',
        users
    })
}

let handleRegisterUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    console.log(message)
    return res.status(200).json(message)
}

let handleEditRegisterUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateNewUser(data);
    return res.status(200).json(message)
}

let handleDeleteRegisterUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await userService.deleteNewUser(req.body.id)
    return res.status(200).json(message);
}

module.exports = {
    handlelogin: handlelogin,
    handleGetAllUser: handleGetAllUser,
    handleRegisterUser: handleRegisterUser,
    handleEditRegisterUser: handleEditRegisterUser,
    handleDeleteRegisterUser: handleDeleteRegisterUser
}