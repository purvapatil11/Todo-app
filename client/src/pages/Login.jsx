import React, { useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        user,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      console.log(res);

      if (res.data.success) {
        alert("welcome back!!!");
        navigate("/")
      }
    } catch (error) {
      alert("Cannot login")
      
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-4 p-8 bg-white shadow rounded-xl w-[350px]">
        <h2 className="text-2xl font-semibold">Login</h2>

        <Input
          className="w-full"
          value={user.email}
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={changeHandler}
        />

        <Input
          className="w-full"
          value={user.password}
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={changeHandler}
        />

        <Button className="w-full mt-2" onClick={loginHandler}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
