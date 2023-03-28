"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var GetPersonagens_1 = require("../services/GetPersonagens");
function ListaPersonagens() {
    var _a = GetPersonagens_1.useGetPersonagens(), personagens = _a.personagens, loading = _a.loading, error = _a.error;
    if (loading) {
        return <p>Carregando...</p>;
    }
    if (error) {
        return <p>Erro ao carregar os personagens.</p>;
    }
    return (<ul>
        {personagens && personagens.map(function (personagem) { return (<li key={personagem.id}>
            <img src={personagem.image} alt={personagem.name}/>
            {personagem.name}
          </li>); })}
      </ul>);
}
exports.default = ListaPersonagens;
//# sourceMappingURL=ListaPersonagens.jsx.map