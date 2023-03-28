import React, { useState } from "react";
import { getPersonagemPorNome } from "../services/GetPersonagemPorNome";

type PersonagemType = {
  name: string;
  image: string;
};

function Personagem() {
  const [personagem, setPersonagem] = useState("");
  const [dados, setDados] = useState<PersonagemType | null>(null);

  async function handlePesquisar() {
    try {
      const response = await getPersonagemPorNome(personagem);
      setDados(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <label htmlFor="personagem">Digite o nome de um personagem:</label>
      <input
        type="text"
        id="personagem"
        value={personagem}
        onChange={(e) => setPersonagem(e.target.value)}
      />
      <button onClick={handlePesquisar}>Pesquisar</button>

      {dados && (
        <div>
          <h2>{dados.name}</h2>
          <img src={dados.image} alt={dados.name} />
        </div>
      )}
    </div>
  );
}

export default Personagem;
