"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./user/user.routes");
const category_routes_1 = require("./category/category.routes");
const post_routes_1 = require("./post/post.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/users",
        route: user_routes_1.userRoutes,
    },
    {
        path: "/posts",
        route: post_routes_1.postRoutes,
    },
    {
        path: "/categories",
        route: category_routes_1.categoryRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
