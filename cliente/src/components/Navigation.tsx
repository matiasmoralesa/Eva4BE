import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div>
        
        <Link to='/doctores'><h1>Doctor App</h1></Link>;
        <Link to="/doctores-create">registrar Doctor </Link>;
    </div>
  )
}

