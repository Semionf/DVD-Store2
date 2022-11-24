import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage, HomePage, DvdsPage } from "./pages";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { TestingComponent } from "./components/testing/testing.component";
import "./app.css";

export const App = () => {
  return (
    <div className="grid-container">
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
          <Route path="/dvd-shop" element={<DvdsPage></DvdsPage>}></Route>
        </Routes>
      </div>
      <Footer styles="footer"></Footer>
    </div>
  );
};
