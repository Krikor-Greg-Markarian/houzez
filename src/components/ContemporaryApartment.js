import React from "react";
import cn from "classnames";
import { MdBed, MdOutlineWaterDrop, MdOutlineMap } from "react-icons/md";
import Button from "./Button";

function ContemporaryApartment(props) {
  return (
    <div className={cn("bg-white w-5/12 relative p-6 rounded")}>
      <div className={cn("grid grid-cols-2")}>
        <div className={cn("col-span-1")}>
          <p>{props.title}</p>
        </div>
        <div className={cn("col-span-1")}>
          <p className={cn("float-right")}>{props.title}</p>
        </div>
      </div>
      <p>{props.description}</p>
      <div className={cn("flex")}>
        <div className={cn("flex-shrink")}>
          <MdBed className={cn("inline")} />
          <p className={cn("inline")}>{props.MdBed}</p>
        </div>
        <div className={cn("flex-shrink")}>
          <MdOutlineWaterDrop className={cn("inline")} />
          <p className={cn("inline")}>{props.MdOutlineWaterDrop}</p>
        </div>
        <div className={cn("flex-shrink")}>
          <MdOutlineMap className={cn("inline")} />
          <p className={cn("inline")}>{props.MdOutlineMap}</p>
        </div>
      </div>
      <p className={cn("font-bold")}>{props.apartment}</p>
      <div className={cn("absolute bottom-0 right-0")}>
        <Button
          className={cn(
            "bg-blue-400 p-2 text-center text-white rounded-tl-lg rounded-br-lg"
          )}
          buttonName={"Details"}
        />
      </div>
    </div>
  );
}

export default ContemporaryApartment;
