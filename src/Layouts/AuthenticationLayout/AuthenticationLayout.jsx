import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const AuthenticationLayout = () => {
  const { state } = useNavigation();
  return (
    <section className="bg-gradient-to-b min-h-screen from-[#87CEEB] to-white">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <ScrollToTop></ScrollToTop>
        {state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default AuthenticationLayout;
