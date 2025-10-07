"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = async (plain) => {
    return await bcrypt_1.default.hash(plain, 10);
};
exports.hashPassword = hashPassword;
const comparePassword = async (plain, hash) => {
    return await bcrypt_1.default.compare(plain, hash);
};
exports.comparePassword = comparePassword;
exports.default = { hashPassword: exports.hashPassword, comparePassword: exports.comparePassword };
