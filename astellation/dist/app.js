"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const connectDb_1 = __importDefault(require("./config/connectDb"));
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const mongo = new connectDb_1.default();
mongo
    .connect()
    .then(() => {
    console.log('MongoDB connection successfull! 🔥');
})
    .catch((err) => {
    console.log(`Error found! Error: ${err}`);
});
const app = (0, express_1.default)();
// start the server
app.listen(PORT, () => {
    console.log(`Application running on Express.js on port ${PORT}! 👍`);
});
exports = module.exports = app;
