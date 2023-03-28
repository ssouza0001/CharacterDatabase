"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_boost_1 = __importDefault(require("apollo-boost"));
var client = new apollo_boost_1.default({
    uri: 'https://rickandmortyapi.com/graphql'
});
exports.default = client;
//# sourceMappingURL=client.js.map