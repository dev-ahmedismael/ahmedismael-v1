import Header from "@/components/homepage/Header";
import HomeSecFive from "@/components/homepage/HomeSecFive";
import HomeSecFour from "@/components/homepage/HomeSecFour";
import HomeSecOne from "@/components/homepage/HomeSecOne";
import HomeSecThree from "@/components/homepage/HomeSecThree";
import HomeSecTwo from "@/components/homepage/HomeSecTwo";
import React from "react";

const Home = () => {
  return (
    <main>
      <Header />
      <HomeSecOne />
      <HomeSecTwo />
      <HomeSecThree />
      <HomeSecFour />
      <HomeSecFive />
    </main>
  );
};

export default Home;
