import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../components/ui/input.jsx";
import { Textarea } from "../components/ui/textarea.jsx";
import { Button } from "../components/ui/button.jsx";
import {Card, CardContent, CardTitle, CardDescription} from "@/components/ui/card"

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos ] = useState([]);

  const addTodoHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/todo",
        {
          title,
          description,
        },
        {
          withCredentials: true, // if your auth uses cookies
        }
      );
      alert("todo created")
      console.log("Todo Created:", res.data);
      setTodos([...todos, res.data.todo])
      setTitle("");
      setDescription("");
    } catch (err) {
      alert("All fields are required");
    }
  };
    useEffect(()=>{
      const fetchTodo= async () =>{
        try {
          const res = await axios.get("http://localhost:8000/api/v1/alltodos")
          if(res.data.success){
            setTodos(res.data.todos)
          }
        } catch (error) {
          console.log(error);
                  }
      }
      fetchTodo()
    },[])
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Add a new todo..."
        className="w-1/2"
      />

      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add your task here..."
        className="w-1/2"
      />

      <Button onClick={addTodoHandler} className="mt-2">
        Add Todo 🚀
      </Button>
      <div className="grid grid-cols-5 gap-2">
      {todos.map((todo) => {
  return (
    
    <Card key={todo._id}>
      <CardContent>
        <CardTitle>{todo.title}</CardTitle>
        <CardDescription>{todo.description}</CardDescription>
      </CardContent>
    </Card>
    
  )
})}</div>

 </div>   
  );
};

export default Home;
