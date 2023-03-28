import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PERSONAGEM_POR_NOME } from "../services/GetPersonagemPorNome";

type PersonagemType = {
  name: string;
  image: string;
};

function Personagem() {
  const [personagem, setPersonagem] = useState("");
  const { loading, error, data } = useQuery(GET_PERSONAGEM_POR_NOME, {
    variables: { nome: personagem },
  });
  const [dados, setDados] = useState<PersonagemType | null>(null);

  const handlePesquisar = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulando um delay

      if (data && data.characters && data.characters.results) {
        const { results } = data.characters;
        const personagem = results[0];

        setDados({
          name: personagem.name,
          image: personagem.image,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

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

      {loading && <p>Carregando...</p>}
      {error && <p>Ocorreu um erro.</p>}
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
