"use client"

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";
import Services from "./components/Services";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

AOS.init();

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Location />
      <Footer />
    </>
  );
}
