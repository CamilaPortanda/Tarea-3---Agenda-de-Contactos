import ContactoItem from './ContactoItem';

function ListaContactos({ contactos, onEliminar }) {
  if (contactos.length === 0) {
    return <p className="text-center text-sm text-gray-400 py-8">No hay contactos. ¡Agrega el primero!</p>;
  }

  return (
    <div>
      {contactos.map((contacto) => (
        <ContactoItem
          key={contacto.id}
          nombre={contacto.nombre}
          telefono={contacto.telefono}
          categoria={contacto.categoria}
          onEliminar={() => onEliminar(contacto.id)}
        />
      ))}
    </div>
  );
}

export default ListaContactos;