import axios from "axios"

export const api = axios.create({
    baseURL: 'https://db-portifolio-kva.onrender.com',
    timeout: 5000
})