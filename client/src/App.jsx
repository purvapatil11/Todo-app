import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button.jsx";
import Navbar from "./pages/Navbar.jsx";
import { Input } from "./components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios"

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodoHandler = async ()=>{
    try {
      const res = await axios.post("http://localhost:8000/api/v1/todo", {title},{
        headers:{
          'Content-type':"application/json"
        },
        withCredentials:true,
      })
      console.log(res)
      if (res.success){
        alert("nothing to display")
      }
    } catch (error) {
        console.log(error);
        
    }
    
  }
  return (
    <div>
      <Navbar />

      {/* FORM CONTAINER */}
      <div className="flex flex-col items-center gap-4 mt-8">

        <Input
          value={title}
          onChange={(e) =>setTitle(e.target.value)}
          type="text"
          placeholder="Add a new todo..."
          className="w-1/2"
        />

        <Textarea
         value={description}
          onChange={(e) =>setDescription(e.target.value)}
          placeholder="Add your task here..."
          className="w-1/2"
        />

        <Button 
          onClick ={addTodoHandler}
          className="mt-2">
          Add Todo 🚀
        </Button>

      </div>
    </div>
  );
}

export default App;