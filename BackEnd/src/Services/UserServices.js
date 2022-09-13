import bcrypt from 'bcryptjs';
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

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

                        if (user.RoleId == 1) {
                            UserData.errCode = 0;
                            UserData.errMessage = 'ok';
                            UserData.user = user;
                        }
                        else {
                            UserData.errCode = 5;
                            UserData.errMessage = 'Bạn không có quyền truy cập';
                        }
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
                where: {
                    email: Useremail
                }
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

let getAllUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['Password']
                    },
                    raw: true
                })
            }
            if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: ['Password']
                    },
                    raw: true
                })
            }
            resolve(users)

        } catch (e) {
            reject(e)
        }
    })
}

let HashUserPassword = (Password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(Password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check email is exist ????
            let checkEmail = await checkUserEmail(data.Email);
            if (checkEmail === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Email đã được sử dụng'
                })
            }
            else {
                let hashPasswordFromBcrypt = await HashUserPassword(data.Password);
                await db.User.create({
                    Email: data.Email,
                    Password: hashPasswordFromBcrypt,
                    FirstName: data.FirstName,
                    LastName: data.LastName,
                    PhoneUser: data.PhoneUser,
                    Address: data.Address,
                    Gender: data.Render === '1' ? true : false,
                    RoleId: data.Role
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Oke 0'
                })
            }


        } catch (e) {
            reject(e);
        }
    })
}

let deleteNewUser = (UserId) => {
    return new Promise(async (resolve, reject) => {
        let founduser = await db.User.findOne({
            where: { id: UserId }
        })
        if (!founduser) {
            resolve({
                errCode: 2,
                errMessage: "Người dùng không tồn tại"
            })
        }
        // if (founduser) {
        //     await founduser.destroy();
        // }
        await db.User.destroy({
            where: { id: UserId }
        })
        resolve({
            errCode: 0,
            errMessage: "Người dùng đã bị xóa"
        })
    })
}

let updateNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Chưa truyền id'
                })
            }

            let user = await db.User.findOne({
                where: {
                    id: data.id
                },
                raw: false
            })

            if (user) {
                user.FirstName = data.FristName;
                user.LastName = data.LastName;
                user.PhoneUser = data.PhoneNumber;
                user.Address = data.Address;

                await user.save();

                resolve({
                    errCode: 0,
                    errMessage: 'Sửa thành công'
                });
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: 'Không có người dùng'
                });
            }

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    HandleUserLogin: HandleUserLogin,
    getAllUser: getAllUser,
    createNewUser: createNewUser,
    deleteNewUser: deleteNewUser,
    updateNewUser: updateNewUser
}