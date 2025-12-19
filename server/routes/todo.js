import express from "express"
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todo.js";
import isAuthenticated from "../middlewares/isauthenticated.js";


const router = express.Router();

router.route("/").post(createTodo);
router.route("/getAllTodos").get(getAllTodos);
router.route("/:todoId").put(isAuthenticated,updateTodo);
router.route("/:todoDel").delete(isAuthenticated,deleteTodo);


export default router;