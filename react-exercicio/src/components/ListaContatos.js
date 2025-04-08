import { useState } from "react";
import Contato from "./Contato";

const ListaContatos = () => {
  const [contatos, setContatos] = useState([
    { id: 1, nome: "João Silva", telefone: "99999-9999" },
    { id: 2, nome: "Maria Souza", telefone: "98888-8888" }
  ]);

  const [novoNome, setNovoNome] = useState("");
  const [novoTelefone, setNovoTelefone] = useState("");
  const [editando, setEditando] = useState(null);

  const adicionarContato = () => {
    if (!novoNome || !novoTelefone) return;
    
    if (editando !== null) {
      setContatos(contatos.map((c) => 
        c.id === editando ? { ...c, nome: novoNome, telefone: novoTelefone } : c
      ));
      setEditando(null);
    } else {
      setContatos([...contatos, { id: Date.now(), nome: novoNome, telefone: novoTelefone }]);
    }

    setNovoNome("");
    setNovoTelefone("");
  };

  const editarContato = (id) => {
    const contato = contatos.find((c) => c.id === id);
    setNovoNome(contato.nome);
    setNovoTelefone(contato.telefone);
    setEditando(id);
  };

  const removerContato = (id) => {
    setContatos(contatos.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-600">Lista de Contatos</h2>
      <div className="mt-4">
        {contatos.map((c) => (
          <Contato key={c.id} contato={c} onEdit={editarContato} onDelete={removerContato} />
        ))}
      </div>
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <input
          className="border p-2 w-full rounded-md"
          placeholder="Nome"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
        />
        <input
          className="border p-2 w-full rounded-md mt-2"
          placeholder="Telefone"
          value={novoTelefone}
          onChange={(e) => setNovoTelefone(e.target.value)}
        />
        <button
          className={`mt-3 w-full p-2 text-white rounded-md ${editando ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}
          onClick={adicionarContato}
        >
          {editando ? "Salvar Edição" : "Adicionar"}
        </button>
      </div>
    </div>
  );
};

export default ListaContatos;
