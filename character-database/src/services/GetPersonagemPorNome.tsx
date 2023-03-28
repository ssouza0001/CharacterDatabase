import { useQuery, gql } from "@apollo/client";

export const GET_PERSONAGEM_POR_NOME = gql`
  query GetPersonagemPorNome($nome: String!) {
    characters(filter: { name: $nome }) {
      results {
        id
        name
        image
      }
    }
  }
`;

const Personagem = ({ nome }: { nome: string }) => {
  const { loading, error, data } = useQuery(GET_PERSONAGEM_POR_NOME, {
    variables: { nome },
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro.</p>;
  if (!data?.characters?.results[0]) return <p>Nenhum resultado encontrado.</p>;

  const personagem = data.characters.results[0];

  return (
    <div>
      <h2>{personagem.name}</h2>
      <img src={personagem.image} alt={nome} />
    </div>
  );
};

export default Personagem;
