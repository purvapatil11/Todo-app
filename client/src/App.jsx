import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button.jsx";
import Navbar from "./pages/Navbar.jsx";
import { Input } from "./components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <Navbar />

      {/* FORM CONTAINER */}
      <div className="flex flex-col items-center gap-4 mt-8">

        <Input
          type="text"
          placeholder="Add a new todo..."
          className="w-1/2"
        />

        <Textarea
          placeholder="Add your task here..."
          className="w-1/2"
        />

        <Button className="mt-2">
          Add Todo 🚀
        </Button>

      </div>
    </div>
  );
}

export default App;