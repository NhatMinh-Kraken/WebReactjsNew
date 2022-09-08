import axios from "../axios";

const HandleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

export { HandleLoginApi }