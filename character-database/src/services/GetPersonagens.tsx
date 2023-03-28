import { gql, useQuery } from '@apollo/client';

const GET_PERSONAGENS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

interface Personagem {
  id: string;
  name: string;
  image: string;
}

interface PersonagensData {
  characters: {
    results: Personagem[];
  };
}

interface PersonagensVars {}

export function useGetPersonagens() {
  const { loading, error, data } = useQuery<PersonagensData, PersonagensVars>(
    GET_PERSONAGENS
  );

  if (loading) {
    return { loading: true };
  }

  if (error) {
    return { error: true };
  }

  return { personagens: data?.characters?.results || [] };
}
