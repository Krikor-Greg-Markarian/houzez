import React from "react";
import cn from "classnames";
import styles from "../../styles/card.module.css";

function Card(props) {
  return (
    <div className={cn("p-4", styles.mainContainer, props.className)}>
      {props.children}
    </div>
  );
}

export default Card;
