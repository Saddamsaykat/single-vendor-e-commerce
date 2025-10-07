import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { CategoryPayload, CategoryResponse } from '../../types/category/category';

const prisma = new PrismaClient();

export const createCategory = async (req: Request, res: Response) => {
  const { name, description, authorId }: CategoryPayload = req.body;
  const category = await prisma.category.create({ data: { name, description, authorId } });
  res.json(category);
};

export const getCategories = async (_: Request, res: Response) => {
  const categories = await prisma.category.findMany({ include: { posts: true } });

  const response: CategoryResponse[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    authorId: category.authorId,
  }));

  res.json(response);
};

export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prisma.category.findUnique({
    where: { id: Number(id) },
    include: { posts: true },
  });
  res.json(category);
};