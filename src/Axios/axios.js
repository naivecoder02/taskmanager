import axios from "axios"
const instance = axios.create({
    baseURL:"https://taskmanager-api-uces.onrender.com/api"
})
export default instance
