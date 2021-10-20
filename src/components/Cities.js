import React from "react";
import cn from "classnames";

function Cities(props) {
  return (
    <div className= {cn("cursor-pointer hover:opacity-75")}>
      <div className= {cn("w-60 h-60 opacity-100")} style={{ backgroundImage: `url(${props.imageUrl})` }}>
          
        <p className= {cn("text-white text-2xl transform translate-y-20 text-center")}>{props.city}</p>
        <p className= {cn("text-white text-center transform translate-y-24 text-sm")}>{props.property}</p>
        </div>
      
    </div>
  );
}

export default Cities;
