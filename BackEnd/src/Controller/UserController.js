import userService from "../Services/UserServices";

let handlelogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter!'
        })
    }
    //check email exist
    //compare password
    //return userInfor
    //access_token JWT json web token

    let UserData = await userService.HandleUserLogin(email, password);

    return res.status(200).json({
        errCode: UserData.errCode,
        message: UserData.errMessage,
        user: UserData.user ? UserData.user : {}
    })
}

module.exports = {
    handlelogin: handlelogin
}