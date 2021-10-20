import React from "react";
import cn from "classnames";
import styles from "../../styles/card.module.css";

function HouzezCard(props) {
  return (
    <div className={cn("p-12", styles.mainContainer, props.className)}>
      {props.children}
      <img
        className={cn(
          "w-full    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-90   "
        )}
        src={props.imageUrl}
        alt="Renting image"
      />
      <p className={cn("text-2xl text-center pb-4 pt-4")}>{props.title}</p>
      <p className={cn("text-sm text-gray-500 text-center")}>
        {props.description}
      </p>
    </div>
  );
}

export default HouzezCard;
