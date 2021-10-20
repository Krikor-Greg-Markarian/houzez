import React from "react";
import cn from "classnames";
import {
  MdOutlineBedroomChild,
  MdOutlineBathroom,
  MdRoofing,
} from "react-icons/md";

function FeaturedListingsitem(props) {
  return (
    <div className={cn("rounded-t")}>
      <div
        className={cn("relative")}
        style={{
          width: "100%",
          height: "50px",
          backgroundImage: `url(${props.imageUrl})`,
        }}
      >
        {props.featureIsSelected ? (
          <p
            className={cn(
              "absolute bg-green-500 text-xs text-white p-1 top-3 right-3"
            )}
          >
            {props.featured}
          </p>
        ) : null}
        {props.rentIsSelected ? (
          <p
            className={cn(
              "absolute bg-gray-100 text-xs text-white p-1 top-3 right-3"
            )}
          >
            {props.forRent}
          </p>
        ) : null}

        <p className={cn("absolute text-white bottom-3 right-3")}>
          {props.price}
        </p>
      </div>
      <p>{props.Title}</p>
      <p>{props.location}</p>
      <div className={cn("flex")}>
        <div className={cn("flex-shrink")}>
          <p>{props.numberOfBedroom}</p>
        </div>
        <div className={cn("flex-shrink")}>
          <p>
            <MdOutlineBedroomChild />
          </p>
          <p className={cn("mr-1")}>{props.bedrooms}</p>
        </div>
        <div className={cn("flex-shrink")}>
          <p>{props.numberOfBathroom}</p>
        </div>
        <div className={cn("flex-shrink")}>
          <p>
            <MdOutlineBathroom />
          </p>
          <p className={cn("mr-1")}>{props.bathroom}</p>
        </div>
        <div className={cn("flex-shrink")}>
          <p>{props.spaceMeters}</p>
        </div>
        <div className={cn("flex-shrink")}>
          <p>
            <MdRoofing />
          </p>
          <p className={cn("mr-1")}>{props.space}</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedListingsitem;
