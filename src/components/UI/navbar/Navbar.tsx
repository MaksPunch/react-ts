import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_links">
        <Link to="/about">О нас</Link>
        <Link to="/products">Продукты</Link>
      </div>
    </nav>
  );
}
