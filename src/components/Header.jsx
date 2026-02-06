import { Link } from "react-router-dom";
import React from "react";

export const Header = () => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Link to="/">Главная</Link> | <Link to="/About">О нас</Link> |{" "}
      <Link to="/Log_in">Вход</Link> | <Link to="/Sign_in">Регистрация</Link>
    </nav>
  );
};
