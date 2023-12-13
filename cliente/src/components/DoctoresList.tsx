import { useEffect, useState } from "react"
import {getAllDoctores} from '../api/doctores'
import {DoctorCard} from './DoctorCard'

export function DoctoresList() {
    
    const [doctores, setDoctores] = useState([])
    
    const a = async()=> {
        const res = await getAllDoctores();
        const d = setDoctores(res.data);
        return d
    }

    useEffect(() => {
        a()   
    },[]); 
 
    return(
        <div>
            {doctores.map( (doctor)=>(
                <DoctorCard key={doctor.id} doctor={doctor}/>
            ))}
        </div>
    );
}

