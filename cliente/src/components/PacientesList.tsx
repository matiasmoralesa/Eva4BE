import { useEffect } from "react";
import { getAllPacientes } from "../api/pacientes";

export function PacientesList() {
    const a = async()=> {
        const res = await getAllPacientes();
        console.log(res.data);
    }


    useEffect(() => {
        //function loadDoctores(){
            a()
        //}
        //loadDoctores();
    },[]); 
 
    return <div>Pacientes List</div>
}