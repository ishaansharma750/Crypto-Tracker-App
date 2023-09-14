import React from "react";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import LandingPageComponent from "../components/LandingPage/Intro";

function HomePage() {
  return (
    <div>
      <Header />
      <LandingPageComponent />
      <Footer />
    </div>
  );
}

export default HomePage;
