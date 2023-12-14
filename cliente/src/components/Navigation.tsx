import { Link } from "react-router-dom";

export function Navigation() {
  const NavLinkWithDropdown = ({ to, label, dropdownLinks }) => {
    return (
      <div className="relative group">
        <Link to={to} className="text-white hover:text-gray-300 transition duration-500 ease-in-out">
          {label}
        </Link>
        <div className="hidden group-hover:block absolute left-0 mt-2 space-y-2 bg-white text-gray-800 p-2 rounded-md shadow-lg">
          {dropdownLinks.map((link) => (
            <Link key={link.to} to={link.to} className="block px-4 py-2 hover:bg-gray-200 transition duration-300">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const navLinks = [
    { to: "/doctores", label: "Doctores", dropdownLinks: [{ to: "/doctores-create", label: "Registrar Doctor" }] },
    { to: "/pacientes", label: "Pacientes", dropdownLinks: [{ to: "/pacientes-create", label: "Registrar Paciente" }] },
    { to: "/consultas", label: "Consultas", dropdownLinks: [{ to: "/consultas-create", label: "Registrar Consulta" }] },
  ];

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center space-x-4">
        {navLinks.map((navLink) => (
          <NavLinkWithDropdown key={navLink.to} {...navLink} />
        ))}
      </div>
    </nav>
  );
}





