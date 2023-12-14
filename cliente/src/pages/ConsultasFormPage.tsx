import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createConsultas, updateConsultas, getConsulta, deleteConsultas } from '../api/consultas';
import { getAllPacientes } from '../api/pacientes';
import { getAllDoctores } from '../api/doctores';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function ConsultasFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const [pacientes, setPacientes] = useState([]);
  const [doctores, setDoctores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pacientesResponse = await getAllPacientes();
      const doctoresResponse = await getAllDoctores();
      setPacientes(pacientesResponse.data);
      setDoctores(doctoresResponse.data);
    }
    fetchData();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateConsultas(params.id, data);
      toast.success('Consulta Actualizada', { position: 'bottom-right' });
    } else {
      await createConsultas(data);
      toast.success('Consulta Registrada', { position: 'bottom-right' });
    }
    navigate('/consultas');
  });

  useEffect(() => {
    async function cargarConsulta() {
      if (params.id) {
        const res = await getConsulta(params.id);
        setValue('paciente', res.data.paciente);
        setValue('doctor', res.data.doctor);
        setValue('fecha', res.data.fecha);
        setValue('sexo', res.data.sexo);
        setValue('hora', res.data.hora);
        setValue('nivel_riesgo', res.data.nivel_riesgo);
        setValue('motivo', res.data.motivo);
      }
    }
    cargarConsulta();
  }, [params.id]);

  const renderError = (field) => (
    <span className="text-red-500">{errors[field] && errors[field].message}</span>
  );

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Formulario de Consulta</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">
            Paciente:
            <select
              {...register('paciente', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {pacientes.map((paciente) => (
                <option key={paciente.id} value={paciente.id}>
                  {paciente.nombre}
                </option>
              ))}
            </select>
            {renderError('paciente')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            Doctor:
            <select
              {...register('doctor', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {doctores.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.nombre}
                </option>
              ))}
            </select>
            {renderError('doctor')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            Fecha de la Consulta:
            <input
              type="date"
              {...register('fecha', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('fecha')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            Sexo:
            <select
              {...register('sexo', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
            {renderError('sexo')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            Hora de la Consulta:
            <input
              type="time"
              {...register('hora', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('hora')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            Nivel de Riesgo:
            <select
              {...register('nivel_riesgo', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Moderado">Moderado</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Severo">Severo</option>
            </select>
            {renderError('nivel_riesgo')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            Motivo de la Consulta:
            <textarea
              {...register('motivo', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('motivo')}
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Guardar
        </button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const aceptado = window.confirm('¿Estás seguro?');
            if (aceptado) {
              await deleteConsultas(params.id);
              toast.success('Consulta Eliminada', { position: 'bottom-right' });
              navigate('/consultas');
            }
          }}
          className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600 transition duration-300"
        >
          Eliminar
        </button>
      )}
    </div>
  );
}


