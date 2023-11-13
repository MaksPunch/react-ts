import React, { useContext, SyntheticEvent } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
    navigate("/products");
  };
  return (
    <>
      <h1>Авторизация</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Вход</MyButton>
      </form>
    </>
  );
}
