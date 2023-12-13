import { useEffect } from "react";
import { getAllConsultas } from "../api/consultas";

export function ConsultasList() {
    const a = async()=> {
        const res = await getAllConsultas();
        console.log(res.data);
    }


    useEffect(() => {
        //function loadDoctores(){
            a()
        //}
        //loadDoctores();
    },[]); 
 
    return <div>Consultas List</div>
}