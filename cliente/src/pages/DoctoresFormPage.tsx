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
    if (params.id){
      await updateDoctores(params.id,data)
      toast.success('Doctor Actualizado', {position: 'bottom-right'})
    } else {
      await createDoctores(data);
      toast.success('Doctor Registrado', {position: 'bottom-right'})
    }
    navigate('/doctores');
  });

  useEffect(()=>{
    async function cargarDoctor() {
      if (params.id){
        const res = await getDoctor(params.id);
        setValue('nombre', res.data.nombre)
        setValue('rut', res.data.rut)
        setValue('telefono', res.data.telefono)
        setValue('correo', res.data.correo)
        setValue('especialidad', res.data.especialidad)
        setValue('turno', res.data.turno)
      }
    }
    cargarDoctor();
  },[]);  

  const renderError = (field) => (
    <span style={{ color: 'red' }}>{errors[field] && errors[field].message}</span>
  );

  return (
    <div>
      <h2>Formulario de Doctor</h2>
      <form onSubmit={onSubmit}>
        <label>
          Nombre del Doctor:
          <input type="text" placeholder="Nombre" {...register('nombre', { required: 'Este campo es obligatorio' })} />
          {renderError('nombre')}
        </label>

        <label>
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
          />
          {renderError('rut')}
        </label>

        <label>
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
          />
          {renderError('telefono')}
        </label>

        <label>
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
          />
          {renderError('correo')}
        </label>

        <label>
          Especialidad del Doctor:
          <input type="text" placeholder="Especialidad" {...register('especialidad', { required: 'Este campo es obligatorio' })} />
          {renderError('especialidad')}
        </label>

        <label>
          <input type="checkbox" {...register('turno')} />
          ¿Está en turno?
        </label>

        <button type="submit">Guardar</button>
      </form>

      {params.id && <button onClick={async ()  => {
        const aceptado = window.confirm('estas seguro?');
        if (aceptado) {
          await deleteDoctores(params.id);
          toast.success('Doctor Eliminado', {position: 'bottom-right'})
          navigate('/doctores');
        }
        }}>Eliminar</button>}
    </div>
  );
}



