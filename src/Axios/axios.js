import axios from "axios"
const instance = axios.create({
    baseURL:"https://taskmanager-api-gf3o.onrender.com"
})
export default instance
