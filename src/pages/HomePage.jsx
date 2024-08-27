import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("products");
  }

  return (
    <main>
      <h1>this is my home page</h1>
      <p className="mt">
        go to <button onClick={handleNavigate}>Products Page By Click Handler</button>
      </p>
    </main>
  );
}

export default HomePage;
