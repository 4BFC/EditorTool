import React from "react"

interface ButtonProps{
  className?: string;
  id?: string;
  link: React.ReactNode;
}

const Button : React.FC<ButtonProps> = ({ className, id, link}) => { 
  return (
    <div className={ className} id={ id }>
      {link}
    </div>
  );
}

export default Button;