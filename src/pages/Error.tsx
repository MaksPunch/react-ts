import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error({ path }: { path: string }) {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate(path, { replace: true });
  }, 2000);
  return (
    <h1 style={{ color: "red" }}>Вы перешли на несуществующую страницу</h1>
  );
}
