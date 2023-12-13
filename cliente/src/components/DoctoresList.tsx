import { useEffect } from "react"
import {getAllDoctores} from '../api/doctores'

export function DoctoresList() {
    const a = async()=> {
        const res = await getAllDoctores();
        console.log(res.data);
    }


    useEffect(() => {
        //function loadDoctores(){
            a()
        //}
        //loadDoctores();
    },[]); 
 
    return <div>Doctores List</div>
}

