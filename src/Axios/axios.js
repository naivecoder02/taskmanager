import axios from "axios"
const instance = axios.create({
    baseURL:"https:///taskmanager-api.onrender.com"
})
export default instance