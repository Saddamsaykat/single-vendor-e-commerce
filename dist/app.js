"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = require("../src/middleware/cors/cors");
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = require("./docs/swagger");
const app = (0, express_1.default)();
app.use(cors_1.corsMiddleware);
app.use(express_1.default.json());
(0, swagger_1.setupSwagger)(app);
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api', routes_1.default);
exports.default = app;
