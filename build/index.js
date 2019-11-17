"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(3000, () => {
    console.log('Server is running on: http://localhost:3000/');
});
