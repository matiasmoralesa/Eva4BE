import { useNavigate } from "react-router-dom";

export function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-300 rounded p-4 m-4 cursor-pointer" onClick={() => navigate(`/doctor/${doctor.id}`)}>
      <h1 className="text-xl font-bold">{doctor.nombre}</h1>
      <table className="w-full mt-2">
        <tbody>
          <tr>
            <td className="p-2 border-b border-gray-300">RUT:</td>
            <td className="p-2 border-b border-gray-300">{doctor.rut}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Teléfono:</td>
            <td className="p-2 border-b border-gray-300">{doctor.telefono}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Correo:</td>
            <td className="p-2 border-b border-gray-300">{doctor.correo}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Especialidad:</td>
            <td className="p-2 border-b border-gray-300">{doctor.especialidad}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Turno:</td>
            <td className="p-2 border-b border-gray-300">{doctor.turno ? "Sí" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


