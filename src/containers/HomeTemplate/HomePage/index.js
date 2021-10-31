import React from "react";
import Header from "./Header";
import Carousels from "./Carousel";
import NavMovie from "./NavMovie";
import ListMoviePage from "../ListMoviePage";
import Banner from "./Banner";
import Carder from "./Card";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <NavMovie />
      <Carousels />
      <ListMoviePage />
      <Banner />
      <Carder />
      <Footer />
    </>
  );
}
