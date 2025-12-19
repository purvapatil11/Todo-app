import React from "react";
import { Button } from "../components/ui/button";
import axios from "axios";
import { useNavigate} from "react-router-dom"
const Navbar = () => {
  const Navigate = useNavigate();
  const logoutHandler =async()=>{
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout");
      if(res.data.success){
        alert(res.data.message);
        Navigate("/login")
      }
    } catch (error) {
      
    }
  }
  return (
    <nav className="bg-gray-600 w-full px-6 py-4 flex items-center justify-between">
      
      <h1 className=" text-white text-2xl font-bold px-4 py-2 rounded-md">
        Purva TODO App
      </h1>

      <Button onClick={logoutHandler}>
        Logout
      </Button>
       
    </nav> 
  );
};

export default Navbar;
