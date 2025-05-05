import React from "react";
import Banner from "../components/Home/Banner/Banner";
import Introduction from "../components/Home/Introduction/Introduction";
import Blog from "../components/Home/Blog/Blog";

export default function Home() {
  return (
    <div>
      <Banner />
      <Introduction />
      <Blog />
    </div>
  );
}
