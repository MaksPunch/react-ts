import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <nav className="navbar">
      {isAuth ? (
        <MyButton
          onClick={() => {
            setIsAuth(false);
            localStorage.removeItem("auth");
          }}
        >
          Выйти
        </MyButton>
      ) : null}
      <div className="navbar_links">
        <Link to="/about">О нас</Link>
        <Link to="/products">Продукты</Link>
      </div>
    </nav>
  );
}
