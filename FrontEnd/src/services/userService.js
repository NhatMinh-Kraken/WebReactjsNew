import axios from "../axios";

const HandleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword, RoleId: 1 })
}

const GetAllUsers = (InputId) => {
    return axios.get(`/api/get-all-user?id=${InputId}`)
}

const createNewUserService = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/register-user', data)
}

export { HandleLoginApi, GetAllUsers, createNewUserService }