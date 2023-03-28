"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var Personagem_1 = __importDefault(require("./components/Personagem"));
var ListaPersonagens_1 = __importDefault(require("./components/ListaPersonagens"));
function App() {
    return (<div className="App">
      <h1>Pesquisar Personagem</h1>
      <Personagem_1.default />
      <h1>Rick and Morty</h1>
      <ListaPersonagens_1.default />
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map