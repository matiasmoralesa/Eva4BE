import React, { useState, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center space-x-4">
        <NavLink to="/" label="Inicio"/>
        <NavLink to="/doctores" label="Doctores" registerLabel="Registrar Doctor" />
        <NavLink to="/pacientes" label="Pacientes" registerLabel="Registrar Paciente" />
        <NavLink to="/consultas" label="Consultas" registerLabel="Registrar Consulta" />
      </div>
    </nav>
  );
}

const NavLink = ({ to, label, registerLabel }) => {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowRegister(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowRegister(false);
    }, 50); // Ajusta este valor según tus necesidades
  };

  const handleRegisterClick = () => {
    navigate(`${to}-create`);
  };

  return (
    <div
      className="relative text-white hover:text-gray-300 transition duration-500 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={to}>{label}</Link>
      {showRegister && (
        <div className="absolute left-0 mt-2 space-y-2 bg-white text-gray-800 p-2 rounded-md shadow-lg">
          <span
            className="block px-4 py-2 hover:bg-gray-200 transition duration-5000"
            onClick={handleRegisterClick}
          >
            {registerLabel}
          </span>
        </div>
      )}
    </div>
  );
};









