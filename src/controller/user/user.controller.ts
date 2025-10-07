import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { hashPassword } from "../../utils/hashPassword/hashPassword";
import { UserPayload, UserResponse } from "../../types/users/users";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const { email, password }: UserPayload = req.body;
  const hashed = await hashPassword(password);
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) return res.status(400).json({ message: "User already exists" });
  const user = await prisma.user.create({ data: { email, password: hashed } });
  res.json(user);
};

export const getUsers = async (_: Request, res: Response) => {
  const users = await prisma.user.findMany({
    include: { posts: true, categories: true },
  });

  const response: UserResponse[] = users.map((user) => ({
    id: user.id,
    email: user.email,
  }));

  res.json(response);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { posts: true, categories: true },
  });
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password } = req.body;
  const hashed = await hashPassword(password);
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { email, password: hashed },
  });
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.delete({ where: { id: Number(id) } });
  res.json(user);
};
