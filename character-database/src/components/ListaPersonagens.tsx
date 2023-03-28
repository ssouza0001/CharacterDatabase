import React from "react";
import { useGetPersonagens } from '../services/GetPersonagens';

function ListaPersonagens(): JSX.Element {
    const { personagens, loading, error } = useGetPersonagens();

    if (loading) {
      return <p>Carregando...</p>;
    }
  
    if (error) {
      return <p>Erro ao carregar os personagens.</p>;
    }
  
    return (
      <ul>
        {personagens && personagens.map(personagem => (
          <li key={personagem.id}>
            <img src={personagem.image} alt={personagem.name} />
            {personagem.name}
          </li>
        ))}
      </ul>
    );
}

export default ListaPersonagens;
