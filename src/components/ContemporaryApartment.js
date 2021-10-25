import React from "react";
import cn from "classnames";
import { MdBed, MdOutlineWaterDrop, MdOutlineMap } from "react-icons/md";
import Button from "./Button";

function ContemporaryApartment(props) {
  return (
    <div className={cn("container mx-auto pt-60")}>
      <div className={cn("bg-white w-4/12 relative p-6 rounded")}>
        <div className={cn("grid grid-cols-2")}>
          <div className={cn("col-span-1")}>
            <p>{props.title}</p>
          </div>
          <div className={cn("col-span-1")}>
            <p className={cn("float-right font-bold text-lg")}>{props.price}</p>
          </div>
        </div>
        <p className={cn("text-gray-500 text-sm pb-2")}>{props.description}</p>
        <div className={cn("flex")}>
          <div className={cn("flex-shrink")}>
            <MdBed className={cn("inline")} />
            <p className={cn("inline pl-1")}>{props.MdBed}</p>
          </div>
          <div className={cn("flex-shrink pl-2")}>
            <MdOutlineWaterDrop className={cn("inline")} />
            <p className={cn("inline")}>{props.MdOutlineWaterDrop}</p>
          </div>
          <div className={cn("flex-shrink pl-2")}>
            <MdOutlineMap className={cn("inline")} />
            <p className={cn("inline")}>{props.MdOutlineMap}</p>
          </div>
        </div>
        <p className={cn("font-bold")}>{props.apartment}</p>
        <div className={cn("absolute bottom-0 right-0")}>
          <Button
            className={cn(
              "bg-blue-400 p-2 text-center text-white rounded-tl rounded-br"
            )}
            buttonName={"Details"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContemporaryApartment;
