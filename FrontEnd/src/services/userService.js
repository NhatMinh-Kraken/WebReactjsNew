import axios from "../axios";

const HandleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password })
}

export { HandleLoginApi }