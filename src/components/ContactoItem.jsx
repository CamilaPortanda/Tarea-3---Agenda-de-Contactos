const CATEGORIA_COLORES = {
  Trabajo:  'bg-blue-100 text-blue-700',
  Amigos:   'bg-green-100 text-green-700',
  Familia:  'bg-red-100 text-red-700',
  Escuela:  'bg-orange-100 text-orange-700',
  Otro:     'bg-purple-100 text-purple-600',
};

function getInitials(nombre) {
  return nombre.trim().split(' ').slice(0, 2).map((n) => n[0]?.toUpperCase() || '').join('');
}

function ContactoItem({ nombre, telefono, categoria, onEliminar }) {
  const badgeClase = CATEGORIA_COLORES[categoria] ?? CATEGORIA_COLORES['Otro'];

  return (
    <div className="flex items-center gap-3 p-3 border rounded-xl mb-2 bg-white">
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 shrink-0">
        {getInitials(nombre)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm text-gray-800 truncate">{nombre}</p>
        <p className="text-xs text-gray-500">{telefono}</p>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ${badgeClase}`}>
        {categoria}
      </span>
      <button
        onClick={onEliminar}
        className="text-xs text-gray-400 border border-gray-200 rounded-lg px-2 py-1 hover:text-red-500 hover:border-red-300 hover:bg-red-50 transition-colors shrink-0"
      >
        Eliminar
      </button>
    </div>
  );
}

export default ContactoItem;