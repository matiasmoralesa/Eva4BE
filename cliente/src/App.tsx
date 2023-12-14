import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {DoctoresPage} from './pages/DoctoresPage';
import { DoctoresFormPage } from './pages/DoctoresFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';
import { Principal } from './pages/Principal';
import { PacientesPage } from './pages/PacientesPage';
import { PacientesFormPage } from './pages/PacientesFormPage';
import { ConsultasPage } from './pages/ConsultasPage';
import { ConsultasFormPage } from './pages/ConsultasFormPage';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to='principal'/>} />
        <Route path='/principal' element={<Principal/>}/>
        <Route path='/doctores' element={<DoctoresPage/>} />
        <Route path='/doctores-create' element={<DoctoresFormPage/>} />
        <Route path='/doctor/:id' element={<DoctoresFormPage/>} />
        <Route path='/pacientes' element={<PacientesPage/>} />
        <Route path='/pacientes-create' element={<PacientesFormPage/>} />
        <Route path='/paciente/:id' element={<PacientesFormPage/>} />
        {/* Corregir las rutas de consultas */}
        <Route path='/consultas' element={<ConsultasPage/>} />
        <Route path='/consultas-create' element={<ConsultasFormPage/>} />
        <Route path='/consulta/:id' element={<ConsultasFormPage/>} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
