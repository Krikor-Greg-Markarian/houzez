import React from "react";
import cn from "classnames";

function LifeStyle(props) {
  return (
    <div>
      <div className={cn("flex justify-center items-center")}>
        <div className={cn("grid grid-cols-4 gap-8 w-7/12")}>
          <div className={cn("col-span-2")}>
            <div
              className={cn("w-full h-60 cursor-pointer opacity-80 hover:opacity-100")}
              style={{ backgroundImage: `url(${props.apartmentImageUrL})` }}
            >
              <p
                className={cn(
                  "text-center text-white font-bold transform translate-y-24 "
                )}
              >
                {props.apartment}
              </p>
              <p
                className={cn(
                  "text-center text-sm text-white  transform translate-y-24"
                )}
              >
                {props.properties}
              </p>
            </div>
          </div>
          <div className={cn("col-span-1")}>
            <div
              className={cn("w-full h-60 cursor-pointer opacity-80 hover:opacity-100")}
              style={{ backgroundImage: `url(${props.singleImageUrl})` }}
            >
              <p
                className={cn(
                  "text-center text-white font-bold transform translate-y-24"
                )}
              >
                {props.single}
              </p>
              <p
                className={cn(
                  "text-center text-sm text-white transform translate-y-24 "
                )}
              >
                {props.secondProperties}
              </p>
            </div>
          </div>
          <div className={cn("col-span-1")}>
            <div
              className={cn("w-full h-60 cursor-pointer opacity-80 hover:opacity-100")}
              style={{ backgroundImage: `url(${props.studioImageUrl})` }}
            >
              <p
                className={cn(
                  "text-center text-white font-bold transform translate-y-24"
                )}
              >
                {props.studio}
              </p>
              <p
                className={cn(
                  "text-center text-sm text-white transform translate-y-24"
                )}
              >
                {props.thirdProperties}
              </p>
            </div>
          </div>
          <div className={cn("col-span-1")}>
            <div
              className={cn("w-full h-60 cursor-pointer opacity-80 hover:opacity-100")}
              style={{ backgroundImage: `url(${props.officeImageUrl})` }}
            >
              <p
                className={cn(
                  "text-center text-white font-bold transform translate-y-24"
                )}
              >
                {props.office}
              </p>
              <p
                className={cn(
                  "text-center text-sm text-white transform translate-y-24 "
                )}
              >
                {props.forthProperties}
              </p>
            </div>
          </div>
          <div className={cn("col-span-1")}>
            <div
              className={cn("w-full h-60 cursor-pointer opacity-80 hover:opacity-100")}
              style={{ backgroundImage: `url(${props.shopImageUrl})` }}
            >
              <p
                className={cn(
                  "text-center text-white font-bold transform translate-y-24"
                )}
              >
                {props.shop}
              </p>
              <p
                className={cn(
                  "text-center text-sm text-white transform translate-y-24 "
                )}
              >
                {props.fifthProperties}
              </p>
            </div>
          </div>
          <div className={cn("col-span-2")}>
            <div
              className={cn("w-full h-60 cursor-pointer opacity-80 hover:opacity-100")}
              style={{ backgroundImage: `url(${props.villaImageUrl})` }}
            >
              <p
                className={cn(
                  "text-center text-white font-bold transform translate-y-24"
                )}
              >
                {props.villa}
              </p>
              <p
                className={cn(
                  "text-center text-sm text-white transform translate-y-24 "
                )}
              >
                {props.sixthProperties}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeStyle;
