import { useEffect, useState } from "react"
import {getAllPacientes} from '../api/pacientes'
import { PacienteCard} from './PacienteCard'

export function PacientesList() {
    
    const [pacientes, setPacientes] = useState([])
    
    const a = async()=> {
        const res = await getAllPacientes();
        const d = setPacientes(res.data);
        return d
    }

    useEffect(() => {
        a()   
    },[]); 
 
    return(
        <div>
            {pacientes.map( (paciente)=>(
                <PacienteCard key={paciente.id} paciente={paciente}/>
            ))}
        </div>
    );
}
