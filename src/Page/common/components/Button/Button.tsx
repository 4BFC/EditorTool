import React from "react";

interface ButtonProps {
  className?: string;
  id?: string;
  link?: React.ReactNode | string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, id, link, onClick }) => {
  return (
    <div className={className} id={id} onClick={onClick}>
      {link}
    </div>
  );
};

export default Button;
