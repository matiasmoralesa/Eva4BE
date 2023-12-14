import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createPacientes, updatePacientes, getPaciente, deletePacientes } from '../api/pacientes';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function PacientesFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updatePacientes(params.id, data);
      toast.success('Paciente Actualizado', { position: 'bottom-right' });
    } else {
      await createPacientes(data);
      toast.success('Paciente Registrado', { position: 'bottom-right' });
    }
    navigate('/pacientes');
  });

  useEffect(() => {
    async function cargarPaciente() {
      if (params.id) {
        const res = await getPaciente(params.id);
        setValue('nombre', res.data.nombre);
        setValue('rut', res.data.rut);
        setValue('telefono', res.data.telefono);
        setValue('correo', res.data.correo);
        setValue('edad', res.data.edad);
        setValue('direccion', res.data.direccion);
      }
    }
    cargarPaciente();
  }, [params.id]);

  const renderError = (field) => (
    <span className="text-red-500">{errors[field] && errors[field].message}</span>
  );

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Formulario de Paciente</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">
            Nombre del Paciente:
            <input
              type="text"
              placeholder="Nombre del paciente"
              {...register('nombre', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('nombre')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            RUT del Paciente:
            <input
              type="text"
              placeholder="RUT del paciente"
              {...register('rut', {
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /^[0-9]{7,8}-[0-9Kk]$/,
                  message: 'Ingresa un RUT válido (ej. 12345678-9)',
                },
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('rut')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            Teléfono de Contacto:
            <input
              type="tel"
              placeholder="Teléfono de contacto"
              {...register('telefono', {
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: 'Ingresa un número de teléfono válido',
                },
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('telefono')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            Correo Electrónico:
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register('correo', {
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Ingresa un correo electrónico válido',
                },
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('correo')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            Edad del Paciente:
            <input
              type="number"
              placeholder="Edad del paciente"
              {...register('edad', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('edad')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            Dirección del Paciente:
            <input
              type="text"
              placeholder="Dirección del paciente"
              {...register('direccion', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('direccion')}
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
              await deletePacientes(params.id);
              toast.success('Paciente Eliminado', { position: 'bottom-right' });
              navigate('/pacientes');
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
