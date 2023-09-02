import React from 'react'
import "../Retail/Retail.css";
const Button = ({ children, style, onClick  }) => {
    
    return (
      <button className="btn  BgcolorOrange " onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default Button;
  
  