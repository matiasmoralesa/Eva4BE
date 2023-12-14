import { useNavigate } from "react-router-dom";

export function PacienteCard({ paciente }) {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-300 rounded p-4 m-4 cursor-pointer" onClick={() => navigate(`/paciente/${paciente.id}`)}>
      <h1 className="text-xl font-bold">{paciente.nombre}</h1>
      <table className="w-full mt-2">
        <tbody>
          <tr>
            <td className="p-2 border-b border-gray-300">RUT:</td>
            <td className="p-2 border-b border-gray-300">{paciente.rut}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Teléfono:</td>
            <td className="p-2 border-b border-gray-300">{paciente.telefono}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Correo:</td>
            <td className="p-2 border-b border-gray-300">{paciente.correo}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Edad:</td>
            <td className="p-2 border-b border-gray-300">{paciente.edad}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Dirección:</td>
            <td className="p-2 border-b border-gray-300">{paciente.direccion}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

