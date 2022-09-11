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

module.exports = {
    handlelogin: handlelogin,
    handleGetAllUser: handleGetAllUser
}