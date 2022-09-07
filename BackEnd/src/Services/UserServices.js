import bcrypt from 'bcryptjs';
import db from "../models/index";

let HandleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let UserData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    attributes: ['Email', 'RoleId', 'Password'],
                    where: {
                        email: email
                    },
                    raw: true
                });
                if (user) {
                    //compare password
                    let checkHashPassword = await bcrypt.compareSync(password, user.Password);
                    if (checkHashPassword) {
                        UserData.errCode = 0;
                        UserData.errMessage = 'ok';

                        delete user.Password;
                        UserData.user = user;
                    }
                    else {
                        UserData.errCode = 3;
                        UserData.errMessage = 'Mật khẩu không hợp lệ';
                    }
                }
                else {
                    UserData.errCode = 2;
                    UserData.errMessage = 'Email không tồn tại';
                }
            }
            else {
                //return err
                UserData.errCode = 1;
                UserData.errMessage = 'Email không đúng';
            }
            resolve(UserData);
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (Useremail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: Useremail }
            })
            if (user) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    HandleUserLogin: HandleUserLogin,
}