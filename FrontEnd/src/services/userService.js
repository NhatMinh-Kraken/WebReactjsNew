import axios from "../axios";

const HandleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword, RoleId: 1 })
}

const GetAllUsers = (InputId) => {
    return axios.get(`/api/get-all-user?id=${InputId}`)
}

export { HandleLoginApi, GetAllUsers }