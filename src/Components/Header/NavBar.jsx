import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then((res) => {
      if (res) {
        toast.success("Logout suceess");
      }
    });
  };

  const getProduct = useCart();
  console.log(getProduct);
  return (
    <div className="mt-4">
      <div className=" bg-white z-50 fixed top-0 left-0 right-0">
        <div className="flex z-40 items-center w-full max-w-screen-xl mx-auto p-4 md:py-8   h-20 text-center justify-between gap-5">
          <div>
            <Link to={"/"}>
              <h2 className="text-3xl font-semibold">
                <span className="text-orange-500">ESTORE</span>
              </h2>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">
              <div className="flex  items-center justify-center flex-col">
                <span className="relative text-center">
                  <FaCartPlus />
                  <span className=" absolute -top-2 -right-2  bg-orange-600 text-[10px] h-[16px] w-[16px] flex items-center justify-center text-white rounded-full">
                    {!getProduct ? 0 : getProduct.length}
                  </span>
                </span>
             
              </div>
            </NavLink>
            {user ? (
              <button onClick={handleLogOut}>LogOut</button>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
