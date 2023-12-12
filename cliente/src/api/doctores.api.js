import axios from 'axios'

export const getAllDoctores = () =>{
    return axios.get('http://localhost:8000/doctores/api/v1/doctores/')
}