import { useState } from 'react';

const CATEGORIAS = ['Trabajo', 'Amigos', 'Familia', 'Escuela', 'Otro'];

function ContactoForm({ onAgregar }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [categoria, setCategoria] = useState('Amigos');

  function handleSubmit(e) {
    e.preventDefault();
    if (!nombre.trim() || !telefono.trim()) return;
    onAgregar({ nombre, telefono, categoria });
    setNombre('');
    setTelefono('');
    setCategoria('Amigos');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4 p-8 shadow-sm border-solid border border-gray-300 rounded-xl bg-blue-50">
      <div className="flex gap-3">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
        />
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Teléfono"
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
        />
      </div>
      <div className="flex gap-3">
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 text-sm bg-white"
        >
          {CATEGORIAS.map((categ) => (
            <option key={categ} value={categ}>{categ}</option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-400 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
        >
          Agregar
        </button>
      </div>
    </form>
  );
}

export default ContactoForm;