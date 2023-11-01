import React, { MouseEventHandler } from "react";

const MyButton = ({
  children,
  ...props
}: {
  children: JSX.Element | JSX.Element[] | string | number;
  onClick?: MouseEventHandler;
  className?: string;
}) => {
  return <button {...props}>{children}</button>;
};

export default MyButton;
