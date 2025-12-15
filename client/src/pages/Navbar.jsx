import React from "react";
import { Button } from "../components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 w-full px-6 py-4 flex items-center justify-between">
      
      <h1 className=" text-white text-2xl font-bold px-4 py-2 rounded-md">
        Purva TODO App
      </h1>

      <Button>
        Logout
      </Button>
       
    </nav> 
  );
};

export default Navbar;
