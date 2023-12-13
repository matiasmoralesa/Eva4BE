import axios from 'axios'

const PacienteApi = axios.create({
    baseURL: 'http://localhost:8000/Pacientees/api/v1/Pacientees/'
})


export const getAllPacientes = () => PacienteApi.get('/')

export const getPaciente = (id) => PacienteApi.get(`/${id}/`)

export const createPacientes = (pacientes) => PacienteApi.post('/',pacientes);

export const deletePacientes = (id) => PacienteApi.delete(`/${id}`);

export const updatePacientes = (id,pacientes) => PacienteApi.put(`/${id}/`,pacientes)