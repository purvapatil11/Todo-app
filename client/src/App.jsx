import { useState } from 'react'
import './App.css'
import { Button } from "./components/ui/button.jsx"
import Navbar from './pages/Navbar.jsx'
import { Input } from "./components/ui/input"
function App() {
    const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex items-center pt-5 gap-5">
      <Input type="text" placeholder="add a new todo"/>
      <div className="flex justify-center items-center pt-1.8">
        <Button>Add Todo 🚀
</Button>
</div>
      </div>
    </div>
  )
}



export default App
