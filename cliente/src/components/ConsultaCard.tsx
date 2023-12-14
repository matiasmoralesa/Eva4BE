import { useNavigate } from "react-router-dom";

export function ConsultaCard({ consulta }) {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-300 rounded p-4 m-4 cursor-pointer" onClick={() => navigate(`/consulta/${consulta.id}`)}>
      <h1 className="text-xl font-bold">Consulta de {consulta.paciente.nombre}</h1>
      <table className="w-full mt-2">
        <tbody>
          <tr>
            <td className="p-2 border-b border-gray-300">Doctor:</td>
            <td className="p-2 border-b border-gray-300">{consulta.doctor && consulta.doctor.nombre}</td>
          </tr>  
          <tr>
            <td className="p-2 border-b border-gray-300">Doctor:</td>
            <td className="p-2 border-b border-gray-300">{consulta.doctor.nombre}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Fecha:</td>
            <td className="p-2 border-b border-gray-300">{consulta.fecha}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Sexo:</td>
            <td className="p-2 border-b border-gray-300">{consulta.sexo}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Hora:</td>
            <td className="p-2 border-b border-gray-300">{consulta.hora}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Nivel de Riesgo:</td>
            <td className="p-2 border-b border-gray-300">{consulta.nivel_riesgo}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">Motivo:</td>
            <td className="p-2 border-b border-gray-300">{consulta.motivo}</td>
          </tr>
          {/* Agrega más filas según los campos adicionales de la consulta */}
        </tbody>
      </table>
    </div>
  );
}



