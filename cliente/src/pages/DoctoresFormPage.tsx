import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createDoctores, deleteDoctores, updateDoctores, getDoctor } from '../api/doctores';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function DoctoresFormPage() {
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
      await updateDoctores(params.id, data);
      toast.success('Doctor Actualizado', { position: 'bottom-right' });
    } else {
      await createDoctores(data);
      toast.success('Doctor Registrado', { position: 'bottom-right' });
    }
    navigate('/doctores');
  });

  useEffect(() => {
    async function cargarDoctor() {
      if (params.id) {
        const res = await getDoctor(params.id);
        setValue('nombre', res.data.nombre);
        setValue('rut', res.data.rut);
        setValue('telefono', res.data.telefono);
        setValue('correo', res.data.correo);
        setValue('especialidad', res.data.especialidad);
        setValue('turno', res.data.turno);
      }
    }
    cargarDoctor();
  }, [params.id]);

  const renderError = (field) => (
    <span className="text-red-500">{errors[field] && errors[field].message}</span>
  );

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Formulario de Doctor</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">
            Nombre del Doctor:
            <input
              type="text"
              placeholder="Nombre"
              {...register('nombre', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('nombre')}
          </label>
        </div>

        <div>
          <label className="block mb-1">
            RUT del Doctor (ej. 12345678-9):
            <input
              type="text"
              placeholder="RUT"
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
              placeholder="Teléfono"
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
            Correo Electrónico (ej. example@example.com):
            <input
              type="email"
              placeholder="Correo"
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
            Especialidad del Doctor:
            <input
              type="text"
              placeholder="Especialidad"
              {...register('especialidad', { required: 'Este campo es obligatorio' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {renderError('especialidad')}
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('turno')}
            className="mr-2"
          />
          <span>¿Está en turno?</span>
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
              await deleteDoctores(params.id);
              toast.success('Doctor Eliminado', { position: 'bottom-right' });
              navigate('/doctores');
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



