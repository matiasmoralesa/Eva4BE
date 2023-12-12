import { useEffect } from "react"
import {getAllDoctores} from '../api/doctores.api.js'

export function DoctoresList() {
    
    useEffect(() => {
        async function loadDoctores(){
            const res = await getAllDoctores();
            console.log(res);
        }
        loadDoctores();
    },[]); 
 
    return <div>Doctores List</div>
}

