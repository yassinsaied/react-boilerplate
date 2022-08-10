import React from "react";
import Footer from "../components/footer/footer";
import HorizontalNavBar from "../components/horizontalNavBar/horizontalNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeContainer from "../screens/homeContainer/homeContainer";
import FormLogin from "../screens/formLogin/formLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "../screens/counter/counter";

function Navigation() {
  return (
    <>
      <BrowserRouter>
        <HorizontalNavBar />
        <div className="container py-4 my-5">
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/login" element={<FormLogin />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Navigation;
