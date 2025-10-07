"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("../../controller/category/category.controller");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Category management endpoints
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     CategoryPayload:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - authorId
 *       properties:
 *         name:
 *           type: string
 *           example: "Technology"
 *         description:
 *           type: string
 *           example: "All tech-related articles"
 *         authorId:
 *           type: integer
 *           example: 1
 */
/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryPayload'
 *     responses:
 *       200:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoryPayload'
 */
router.post('/', category_controller_1.createCategory);
/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CategoryPayload'
 */
router.get('/', category_controller_1.getCategories);
exports.categoryRoutes = router;
