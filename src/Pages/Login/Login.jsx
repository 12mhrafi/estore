import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProvider";
import {toast} from "react-hot-toast"
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    user,
    loginUser,
    googleLogin,
  } = useContext(AuthContext);
  // console.log(user);
  const handleGoogle = () => {
    googleLogin()
    .then(res => {
      if(res){
        toast.success("Login Success")
        navigate(location?.state ? location?.state : "/")
      }
    })
  }
  
  // const [user, setUser] = useState({});
  // console.log(user)
  // console.log(user.token)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email,password)
    .then(res => {
      if(res.user){
        toast.success('Login Success')
        navigate(location?.state ? location?.state : "/")


      }
    })


    // if(username == user.username ){

    // }
    // console.log(username,password);

    // localStorage.setItem("token", JSON.stringify(user?.token))
  };

  // useEffect(()=>{
  //     fetch("https://dummyjson.com/auth/login", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           username: "kminchelle",
  //           password: "0lelplR",
  //           // expiresInMins: 60, // optional
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then(data => setUser(data));
  // },[])

  return (
    <div className="contaner mx-auto px-4 mt-32">
      <div className="flex flex-col justify-center items-center">
    <div className="  w-full md:w-[40%] border  ">
    <form  onSubmit={handleLogin}>
          <div className=" gap-4 flex flex-col p-8">
            <input
              required
              className="p-3 "
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <input
              required
              className="p-3"
              placeholder="Enter your password"
              name="password"
              type="password"
            />
            <button className=" bg-green-600 text-white py-3" type="submit">
              Login
            </button>
          </div>
        </form>
      <div className="px-8 pb-8 -mt-4">
      <button onClick={handleGoogle} className=" bg-red-500 text-white py-3 w-full">Login With Google</button>
        <p className="mt-3 ">Don't have an account? <Link to="/register" > <span className="underline">Register here</span> </Link></p>
      </div>
    </div>
        
      </div>
    </div>
  );
};

export default Login;
