import React from "react";

export function Principal() {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Hospital Rosario</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">¡Bienvenido al Hospital Rosario!</h2>
        <p className="text-gray-700">
          En el Hospital Rosario, nos enorgullece ofrecer atención médica de calidad. Nuestro compromiso es brindar servicios
          excepcionales centrados en el paciente.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Servicios Destacados</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Atención médica de calidad</li>
          <li>Especialidades médicas variadas</li>
          <li>Consultas y tratamientos personalizados</li>
          <li>Instalaciones modernas y equipamiento de vanguardia</li>
          {/* Agrega más puntos según los servicios de tu hospital */}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Nuestro Compromiso</h2>
        <p className="text-gray-700">
          Nos esforzamos por mantener un ambiente de atención centrado en el paciente. Nuestro equipo de profesionales
          médicos altamente calificados está aquí para cuidar de usted y su familia.
        </p>
      </section>
    </div>
  );
}



