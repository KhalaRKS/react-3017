import axios from 'axios'

// SUELE IR EN VARIABLES DE ENTORNO (SE LOS CONOCE COMO ARCHIVOS .env) en vite es distinto
import { BASE_URL } from '../utils/constants'

export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, {
            nombre: nombre,
            email: email,
            password: password
        })
        return response.data;
    } catch (error) {
        return alert(error.response.data.errors[0].msg)
    }
}
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        })
        return response.data;
    } catch (error) {
        return alert(error.response.data.msg)
    }
}

