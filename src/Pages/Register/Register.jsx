import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";


const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { createRegister } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createRegister(email, password).then((res) => {
      if (res) {
        console.log(res.user);
        toast.success("Register success");
        navigate(location?.state ? location?.state : "/")
      }
    });
  };

  return (
    <div className="contaner mx-auto px-4 mt-32">
      <div className="flex flex-col justify-center items-center">
    <div className="  w-full md:w-[40%] border  ">
    <form  onSubmit={handleRegister}>
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
              Register
            </button>
          </div>
        </form>
      <div className="px-8 pb-8 -mt-4">
        <p className="">Already have an account? <Link to="/login" > <span className=" underline">Login here</span> </Link></p>
      </div>
    </div>
        
      </div>
    </div>
  );
};

export default Register;
