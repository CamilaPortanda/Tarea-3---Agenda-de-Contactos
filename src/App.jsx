import { useState } from 'react';
import ContactoForm from './components/ContactoForm';
import ListaContactos from './components/ListaContactos';

function App() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Carlos Mendoza', telefono: '+52 81 1234 5678', categoria: 'Trabajo' },
    { id: 2, nombre: 'Sofía Reyes',    telefono: '+52 81 9876 5432', categoria: 'Amigos' },
    { id: 3, nombre: 'Luis Torres',    telefono: '+52 81 4567 8901', categoria: 'Familia' },
  ]);

  function agregarContacto(nuevoContacto) {
    setContactos([...contactos, { id: Date.now(), ...nuevoContacto }]);
  }

  function eliminarContacto(id) {
    setContactos(contactos.filter((c) => c.id !== id));
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center font-mono text-blue-400">Agenda de contactos</h1>
      <ContactoForm onAgregar={agregarContacto} />
      <p className="text-sm text-gray-400 mb-3">
        {contactos.length} {contactos.length === 1 ? 'contacto' : 'contactos'}
      </p>
      <ListaContactos contactos={contactos} onEliminar={eliminarContacto} />
    </div>
  );
}

export default App;