import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shered Page/Footer";
import Navbar from "../Shered Page/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="jm_container min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
