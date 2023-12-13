import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {DoctoresPage} from './pages/DoctoresPage';
import { DoctoresFormPage } from './pages/DoctoresFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to='doctores'/>} />
        <Route path='/doctores' element={<DoctoresPage/>} />
        <Route path='/doctores-create' element={<DoctoresFormPage/>} />
        <Route path='/doctor/:id' element={<DoctoresFormPage/>} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;