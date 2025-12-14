import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // 1. Validation
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // 2. Correct model usage
    const newTodo = new Todo({ title, description });

    // 3. Proper save with await
    await newTodo.save();

    // 4. Correct response
    return res.status(201).json({
      success: true,
      message: "Todo created",
      todo: newTodo,
    });

  } catch (error) {
    console.log("CREATE TODO ERROR:", error);

    // 5. ALWAYS send error response
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const getAllTodos = async (req,res) => {
    try {
        const todos = await Todo.find();
        console.log(todos);

        return res.status(200).json({
            success:true,
            todos
        })
        
    } catch (error) {
      console.log(error);
        
    }
}
export const updateTodo = async (req,res) => {
  try {
    const todoId = req.params.todoId;
    const title = req.body;
    console.log(title);
    
    // const todo = await Todo.findById(todoId);
      const todo = await Todo.findByIdAndUpdate(todoId, title, {new:true});
      await todo.save();

      return res.status(200).json({
        success:true,
        todo,
        message:"todo updated"
      })


  } catch (error) {
    console.log(error)
  }
}
export const deleteTodo = async (req,res) => {
  try {
    const todoId = req.params.todoId;
    await Todo.findByIdAndDelete(todoId)
    
    return res.status(200).json({
      success:true,
      message:"Todo deleted successfully."
    })
  } catch (error) {
    console.log(error);
    
  }
}