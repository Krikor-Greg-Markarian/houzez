import React from "react";
import cn from "classnames";

function Button(props) {
  return (
    <div>
      <button className={cn(props.className)}>{props.buttonName}</button>
    </div>
  );
}

export default Button;
