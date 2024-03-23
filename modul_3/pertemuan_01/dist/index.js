"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8000;
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.get("/", (req, res) => {
    return res.send({
        nama: "dafid",
    });
});
app.get("/add", (req, res) => {
    return res.send({
        nama: "dafid pratama putra",
    });
});
app.listen(PORT, () => {
    console.log("application start on port", PORT);
});
