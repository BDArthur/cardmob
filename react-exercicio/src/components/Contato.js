const Contato = ({ contato, onEdit, onDelete }) => (
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center border-l-4 border-blue-500">
      <div>
        <h3 className="text-lg font-semibold">{contato.nome}</h3>
        <p className="text-gray-600">{contato.telefone}</p>
      </div>
      <div className="flex gap-2">
        <button 
          className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600" 
          onClick={() => onEdit(contato.id)}
        >
          Editar
        </button>
        <button 
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600" 
          onClick={() => onDelete(contato.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
  
  export default Contato;
  