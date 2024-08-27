import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <h1>this is my home page</h1>
      <p>
        go to <Link to={"/products"}>products page</Link>
      </p>
    </main>
  );
}

export default HomePage;
