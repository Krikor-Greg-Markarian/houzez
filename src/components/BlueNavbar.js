import React from "react";
import cn from "classnames";
import Link from "next/link";
import Button from "./Button";

function BlueNavbar(props) {
  return (
    <div className={cn("bg-blue-900 py-2")}>
      <div className={cn("flex justify-center")}>
        <div className={cn(" flex justify-start items-center w-8/12 pl-6")}>
          <li
            className={cn(
              "text-white list-none pl-3 inline hover:text-blue-300"
            )}
          >
            <Link href="/">
              <a href="/">Home</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-white list-none pl-3 inline hover:text-blue-300"
            )}
          >
            <Link href="/">
              <a href="/">Properties</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-white list-none pl-3 inline hover:text-blue-300"
            )}
          >
            <Link href="property">
              <a href="/">Property</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-white list-none pl-3 inline hover:text-blue-300"
            )}
          >
            <Link href="/">
              <a href="/">Realtor</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-white list-none pl-3 inline hover:text-blue-300"
            )}
          >
            <Link href="/">
              <a href="/">Others</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-white list-none pl-3 inline hover:text-blue-300"
            )}
          >
            <Link href="/">
              <a href="/">Contact</a>
            </Link>
          </li>

          <div className={cn("flex justify-end w-7/12 mr-44")}>
            <li
              className={cn(
                "text-white list-none mt-2 pl-3 inline hover:text-blue-300"
              )}
            >
              <Link href="/">
                <a href="">Login</a>
              </Link>
            </li>
            <li
              className={cn(
                "text-white  pr-3 mt-2 list-none pl-3 inline hover:text-blue-300"
              )}
            >
              <Link href="/">
                <a href="/">Register</a>
              </Link>
            </li>

            <Button
              className={cn(
                "bg-blue-400 py-3 px-4 text-center rounded text-white text-sm font-bold"
              )}
              buttonName={"Create a listing"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueNavbar;
