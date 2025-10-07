import express, { Request, Response } from "express";
import { createUser, getUsers } from '../../controller/user/user.controller';

const router = express.Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserPayload'
 *     responses:
 *       200:
 *         description: User created successfully
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
router.post('/', createUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     UserPayload:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *           format: password
 */
router.get('/', getUsers);

export const userRoutes = router;