import express from 'express';
import { createPost, getPosts } from '../../controller/post/post.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post management endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PostPayload:
 *       type: object
 *       required:
 *         - title
 *         - comment
 *         - productName
 *         - price
 *         - authorId
 *         - categoryId
 *       properties:
 *         title:
 *           type: string
 *           example: "New iPhone Review"
 *         comment:
 *           type: string
 *           example: "Great performance and battery life"
 *         productName:
 *           type: string
 *           example: "iPhone 15 Pro"
 *         price:
 *           type: number
 *           example: 1299
 *         authorId:
 *           type: integer
 *           example: 1
 *         categoryId:
 *           type: integer
 *           example: 2
 *     PostUpdatePayload:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         comment:
 *           type: string
 *         productName:
 *           type: string
 *         price:
 *           type: number
 *         categoryId:
 *           type: integer
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PostPayload'
 *     responses:
 *       200:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PostPayload'
 */
router.post('/', createPost);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: List of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PostPayload'
 */
router.get('/', getPosts);

export const postRoutes = router;
