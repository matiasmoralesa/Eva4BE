import { useEffect, useState } from "react";
import { getAllConsultas } from '../api/consultas';
import { ConsultaCard } from './ConsultaCard';

export function ConsultasList() {
  const [consultas, setConsultas] = useState([])
    
    const a = async()=> {
        const res = await getAllConsultas();
        const d = setConsultas(res.data);
        return d
    }

    useEffect(() => {
        a()   
    },[]); 
 
    return(
        <div>
            {consultas.map( (consultas)=>(
                <ConsultaCard key={consultas.id} consulta={consultas}/>
            ))}
        </div>
    );
}
