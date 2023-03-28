"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
var App_1 = __importDefault(require("./App"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
var client_1 = require("@apollo/client");
var client = new client_1.ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new client_1.InMemoryCache()
});
react_dom_1.default.render(<react_1.default.StrictMode>
    <client_1.ApolloProvider client={client}>
      <App_1.default />
    </client_1.ApolloProvider>
  </react_1.default.StrictMode>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1.default();
//# sourceMappingURL=index.jsx.map