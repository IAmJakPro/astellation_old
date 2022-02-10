"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const container_1 = __importDefault(require("./utils/container"));
const types_1 = __importDefault(require("./constants/types"));
require('dotenv').config();
const app = container_1.default.get(types_1.default.App);
const server = app.start();
const PORT = process.env.PORT || 3000;
app.connectDB().then(() => {
    server.listen(PORT, () => {
        console.log(`Application running on Express.js on port ${PORT}`);
    });
});
exports = module.exports = app;
