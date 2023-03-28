"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var App_1 = __importDefault(require("./App"));
test('renders learn react link', function () {
    var container = react_1.render(React.createElement(App_1.default, null)).container;
    var linkElement = react_1.screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
//# sourceMappingURL=App.test.js.map