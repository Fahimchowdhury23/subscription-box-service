import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import ResetContext from "../../Contexts/ResetContext";

const AuthenticationLayout = () => {
  const [resetEmail, setResetEmail] = useState("");

  return (
    <section className="bg-gradient-to-b min-h-screen from-[#87CEEB] to-white">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <ScrollToTop></ScrollToTop>

        <ResetContext value={{ resetEmail, setResetEmail }}>
          <Outlet></Outlet>
        </ResetContext>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default AuthenticationLayout;
