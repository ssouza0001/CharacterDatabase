import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api";

export const getPersonagemPorNome = async (nome: string) => {
  const response = await axios.get(`${baseURL}/character/?name=${nome}`);
  return response.data.results[0];
};
