import bcrypt from 'bcryptjs'; // hash password
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

let CreateNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await HashUserPassword(data.Password);
            await db.User.create({
                Email: data.Email,
                Password: hashPasswordFromBcrypt,
                FirstName: data.FristName,
                LastName: data.LastName,
                PhoneUser: data.PhoneNumber,
                Address: data.Address,
                Gender: data.Render === '1' ? true : false,
                RoleId: data.Role
            })
            resolve('Oke! Create a new User succeed')
        } catch (e) {
            reject(e);
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

let GetAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let Users = db.User.findAll({
                raw: true
            });
            resolve(Users);
        } catch (e) {
            reject(e);
        }
    })
}

let GetUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: userId
                },
                raw: true
            })

            if (user) {
                resolve(user);
            }
            else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let UpdateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: data.id,
                }
            })
            if (user) {
                user.FirstName = data.FristName;
                user.LastName = data.LastName;
                user.PhoneUser = data.PhoneNumber;
                user.Address = data.Address;

                await user.save();

                let AllUser = await db.User.findAll();
                resolve(AllUser);
            }
            else {
                resolve();
            }

        } catch (e) {
            reject(e);
        }
    })
}

let deleteCrudUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })

            if (user) {
                await user.destroy();
            }

            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    CreateNewUser: CreateNewUser,
    GetAllUser: GetAllUser,
    GetUserInfoById: GetUserInfoById,
    UpdateUserData: UpdateUserData,
    deleteCrudUserId: deleteCrudUserId,
}