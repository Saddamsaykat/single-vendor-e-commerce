"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const hashPassword_1 = require("../../utils/hashPassword/hashPassword");
const prisma = new client_1.PrismaClient();
const createUser = async (req, res) => {
    const { email, password } = req.body;
    const hashed = await (0, hashPassword_1.hashPassword)(password);
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists)
        return res.status(400).json({ message: "User already exists" });
    const user = await prisma.user.create({ data: { email, password: hashed } });
    res.json(user);
};
exports.createUser = createUser;
const getUsers = async (_, res) => {
    const users = await prisma.user.findMany({
        include: { posts: true, categories: true },
    });
    const response = users.map((user) => ({
        id: user.id,
        email: user.email,
    }));
    res.json(response);
};
exports.getUsers = getUsers;
const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: { posts: true, categories: true },
    });
    res.json(user);
};
exports.getUserById = getUserById;
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    const hashed = await (0, hashPassword_1.hashPassword)(password);
    const user = await prisma.user.update({
        where: { id: Number(id) },
        data: { email, password: hashed },
    });
    res.json(user);
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.delete({ where: { id: Number(id) } });
    res.json(user);
};
exports.deleteUser = deleteUser;
