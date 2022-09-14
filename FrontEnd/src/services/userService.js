import axios from "../axios";

const HandleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword, RoleId: 1 })
}

const GetAllUsers = (InputId) => {
    return axios.get(`/api/get-all-user?id=${InputId}`)
}

const createNewUserService = (data) => {
    return axios.post('/api/register-user', data)
}

const deleteUserService = (UserId) => {
    // return axios.delete('/api/delete-user',{id: UserId})
    return axios.delete('/api/delete-user', {
        data: {
            id: UserId
        }
    })
}

const editUserService = (InputData) => {
    return axios.put('/api/edit-user', InputData)
}

export { HandleLoginApi, GetAllUsers, createNewUserService, deleteUserService, editUserService }