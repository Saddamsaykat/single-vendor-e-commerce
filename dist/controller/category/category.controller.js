"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryById = exports.getCategories = exports.createCategory = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createCategory = async (req, res) => {
    const { name, description, authorId } = req.body;
    const category = await prisma.category.create({ data: { name, description, authorId } });
    res.json(category);
};
exports.createCategory = createCategory;
const getCategories = async (_, res) => {
    const categories = await prisma.category.findMany({ include: { posts: true } });
    const response = categories.map((category) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        authorId: category.authorId,
    }));
    res.json(response);
};
exports.getCategories = getCategories;
const getCategoryById = async (req, res) => {
    const { id } = req.params;
    const category = await prisma.category.findUnique({
        where: { id: Number(id) },
        include: { posts: true },
    });
    res.json(category);
};
exports.getCategoryById = getCategoryById;
