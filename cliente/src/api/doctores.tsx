import axios from 'axios'

const doctorApi = axios.create({
    baseURL: 'http://localhost:8000/doctores/api/v1/doctores/'
})


export const getAllDoctores = () => doctorApi.get('/')

export const getDoctor = (id) => doctorApi.get(`/${id}/`)

export const createDoctores = (doctores) => doctorApi.post('/',doctores);

export const deleteDoctores = (id) => doctorApi.delete(`/${id}`);

export const updateDoctores = (id,doctores) => doctorApi.put(`/${id}/`,doctores)