import React from "react";
import Intro from "../components/Intro";
import Trending from "../components/Trending";
import Tentang from "../components/Tentang";

function Home() {
  return (
    <div>
      <Intro />
      <Trending />
      <Tentang />
    </div>
  );
}

export default Home;
