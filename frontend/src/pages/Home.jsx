import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutUsPage from "./AboutUs";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import FAQ from "../components/FAQ";
import TopRatedDoctors from "../components/TopRatedDoctors";
import OurDepartments from "../components/OurDepartments";
import HospitalVideos from "../components/HospitalVideos";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <OurServices/>
      <OurDepartments/>
      <FAQ/>
      <TopRatedDoctors/>
      <HospitalVideos/>
      <Footer />
      </>
  );
};

export default Home;