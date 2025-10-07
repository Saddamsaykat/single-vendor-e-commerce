import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createPost = async (req: Request, res: Response) => {
  const { title, comment, productName, price, authorId, categoryId } = req.body;
  const post = await prisma.post.create({
    data: { title, comment, productName, price, authorId, categoryId }
  });
  res.json(post);
};

export const getPosts = async (_: Request, res: Response) => {
  const posts = await prisma.post.findMany({ include: { author: true, category: true } });
  res.json(posts);
};
