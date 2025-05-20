import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Loader from "../../Components/Loader/Loader";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <section className="bg-gradient-to-b from-[#87ceeb] to-white">
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <ScrollToTop></ScrollToTop>
        {state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default HomeLayout;
