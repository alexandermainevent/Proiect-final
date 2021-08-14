import React from "react";
import { Search, HomeContainer } from "../components/Homepage.style";
import ImageSlider from "../components/ImageSlider";

export const HomePage = () => {
  return (
    <HomeContainer>
      <Search />
      <ImageSlider />
    </HomeContainer>
  );
};
