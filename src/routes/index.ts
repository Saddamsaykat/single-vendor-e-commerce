import express from "express";
import { userRoutes } from "./user/user.routes";
import { categoryRoutes } from "./category/category.routes";
import { postRoutes } from "./post/post.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/posts",
    route: postRoutes,
  },
  {
    path: "/categories",
    route: categoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
