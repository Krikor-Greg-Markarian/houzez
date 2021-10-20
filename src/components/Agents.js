import React from "react";
import cn from "classnames";

function Agents(props) {
  return (
      <div className= {cn("")}>
    <div className={cn("bg-white")}>
      <div className={cn("flex justify-center items-center")}>
        <img className= {cn("rounded-full")} src={props.imageUrl} alt="" />
      </div>
      <p className={cn("text-blue-600 text-center")}>{props.title}</p>
      <p className={cn("font-bold text-center")}>{props.description}</p>
      <p className={cn("text-gray-500 text-center")}>{props.text}</p>
      <p className={cn("text-blue-600 text-center")}>{props.viewButton}</p>
      </div>
    </div>
  );
}

export default Agents;
