import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Components/Header/Header';
import {Toaster} from "react-hot-toast"
import Footer from '../Components/Footer/Footer';
const Root = () => {
  return (
    <>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
        <Toaster />
    </>
  )
}

export default Root