import React from "react";
import cn from "classnames";
import {
  MdOutlineBedroomChild,
  MdOutlineBathroom,
  MdRoofing,
} from "react-icons/md";
import { FaHeart, FaPlusCircle, FaExpandAlt } from "react-icons/fa";

function FeaturedListingsitem(props) {
  return (
    <div className={cn("border-2")}>
      <div
        className={cn("relative w-96 h-60 rounded-t")}
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      >
        {props.featureIsSelected ? (
          <p
            className={cn(
              "absolute bg-green-600 rounded text-xs text-white p-1 font-bold top-5 left-5"
            )}
          >
            {props.featured}
          </p>
        ) : null}
        {props.rentIsSelected ? (
          <p
            className={cn(
              "absolute bg-gray-600 opacity-80 text-xs rounded text-white p-1 font-bold top-5 right-5"
            )}
          >
            {props.forRent}
          </p>
        ) : null}

        <p className={cn("absolute text-white bottom-3 font-bold  left-3")}>
          {props.price}
        </p>
        <div className={cn("absolute bottom-5 right-5")}>
          <div
            className={cn(
              " inline rounded bg-gray-800 opacity-75 px-2 py-1 cursor-pointer hover:opacity-90"
            )}
          >
            <FaExpandAlt className={cn("inline text-white text-sm mb-1")} />
          </div>
          <div
            className={cn(
              "inline rounded bg-gray-800 opacity-75 px-2 ml-1 py-1 cursor-pointer hover:opacity-90"
            )}
          >
            <FaHeart className={cn("inline text-white text-sm mb-1")} />
          </div>
          <div
            className={cn(
              "inline rounded bg-gray-800 opacity-75 px-2 ml-1 py-1 cursor-pointer hover:opacity-90"
            )}
          >
            <FaPlusCircle className={cn("inline text-white text-sm mb-1")} />
          </div>
        </div>
      </div>
      <div className={cn("ml-3 p-2")}>
        <p className={cn("cursor-pointer text-lg pb-1 hover:text-blue-700")}>
          {props.title}
        </p>
        <p className={cn("text-sm text-gray-500 ")}>{props.location}</p>
        <div className={cn("flex pt-2 ")}>
          <div className={cn("flex-shrink ")}>
            <p className={cn("text-center ")}>{props.numberOfBedroom}</p>
          </div>
          <div className={cn("flex-shrink border-r-2 pl-1 pt-1 pr-2")}>
            <p>
              <MdOutlineBedroomChild />
            </p>
            <p className={cn("mr-1")}>{props.bedrooms}</p>
          </div>
          <div className={cn("flex-shrink pl-2 ")}>
            <p>{props.numberOfBathroom}</p>
          </div>
          <div className={cn("flex-shrink border-r-2 pl-1 pt-1 pr-2")}>
            <p>
              <MdOutlineBathroom />
            </p>
            <p className={cn("mr-1")}>{props.bathroom}</p>
          </div>
          <div className={cn("flex-shrink pl-2")}>
            <p>{props.spaceMeters}</p>
          </div>
          <div className={cn("flex-shrink pl-1 pt-1")}>
            <p>
              <MdRoofing />
            </p>
            <p className={cn("mr-1")}>{props.space}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedListingsitem;
