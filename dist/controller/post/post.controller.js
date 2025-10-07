"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = exports.createPost = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createPost = async (req, res) => {
    const { title, comment, productName, price, authorId, categoryId } = req.body;
    const post = await prisma.post.create({
        data: { title, comment, productName, price, authorId, categoryId }
    });
    res.json(post);
};
exports.createPost = createPost;
const getPosts = async (_, res) => {
    const posts = await prisma.post.findMany({ include: { author: true, category: true } });
    res.json(posts);
};
exports.getPosts = getPosts;
