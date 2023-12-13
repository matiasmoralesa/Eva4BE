import axios from 'axios'

const ConsultaApi = axios.create({
    baseURL: 'http://localhost:8000/consultas/api/v1/consultas/'
})


export const getAllConsultas = () => ConsultaApi.get('/')

export const getConsulta = (id) => ConsultaApi.get(`/${id}/`)

export const createConsultas = (consultas) => ConsultaApi.post('/',consultas);

export const deleteConsultas = (id) => ConsultaApi.delete(`/${id}`);

export const updateConsultas = (id,consultas) => ConsultaApi.put(`/${id}/`,consultas)