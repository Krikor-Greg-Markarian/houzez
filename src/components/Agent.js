import React from "react";
import cn from "classnames";

function Agent(props) {
  return (
    <div
      className={cn(
        "p-12 bg-white border-r-2 border-gray-50 hover:transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
      )}
    >
      <img
        className={cn("rounded-full cursor-pointer")}
        src={props.imageUrl}
        alt=""
      />
      <p className={cn("text-blue-600 text-center pt-4 cursor-pointer")}>
        {props.title}
      </p>
      <p className={cn("font-bold text-center pt-2 pb-4 text-sm")}>
        {props.description}
      </p>
      <p className={cn("text-gray-500 text-center pt-2 pb-1 text-sm")}>
        {props.text}
      </p>
      <p className={cn("text-blue-600 text-center pt-4")}>{props.ViewButton}</p>
    </div>
  );
}

export default Agent;
