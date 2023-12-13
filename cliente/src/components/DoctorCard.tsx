import { useNavigate } from "react-router-dom";

export function DoctorCard({ doctor}) {
  
  const navigate = useNavigate()

  return (
    <div style={{background: 'pink'}}
    
      onClick = {() => {
        navigate(`/doctor/${doctor.id}`);
      }}
    >
      <h1>{doctor.nombre}</h1>
      <p>{doctor.rut}</p>
      <p>{doctor.telefono}</p>
      <p>{doctor.correo}</p>
      <p>{doctor.especialidad}</p>
      <p>{doctor.turno}</p>
      <hr />
    </div>
  );
}

