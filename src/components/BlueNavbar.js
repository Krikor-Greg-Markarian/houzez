import React from "react";
import cn from "classnames";
import Link from "next/link";
import Button from "./Button";

function BlueNavbar(props) {
  return (
    //         <div className= {cn("bg-blue-900 flex justify-center items-center h-full")}>
    //           <div className={cn("flex w-7/12")}>
    //   <div className={cn("flex-shrink")}>
    //     <li className= {cn("text-white list-none")}><Link href=""><a href="">Home</a></Link></li>
    //   </div>
    //   <div className={cn("flex-shrink")}>
    //   <li className= {cn("text-white list-none pl-3")}><Link href=""><a href="">Properties</a></Link></li>
    //   </div>
    //   <div className={cn("flex-shrink")}>
    //   <li className= {cn("text-white list-none pl-3")}><Link href=""><a href="">Property</a></Link></li>
    //   </div>
    //   <div className={cn("flex-shrink")}>
    //   <li className= {cn("text-white list-none pl-3")}><Link href=""><a href="">Realtor</a></Link></li>
    //   </div>
    //   <div className={cn("flex-shrink")}>
    //   <li className= {cn("text-white list-none pl-3")}><Link href=""><a href="">Others</a></Link></li>
    //   </div>
    //   <div className={cn("flex-shrink")}>
    //   <li className= {cn("text-white list-none pl-3")}><Link href=""><a href="">Contact</a></Link></li>
    //   </div>

    // </div>
    // <div className={cn("float-right")}>
    //   <p className= {cn("text-white inline")}>Login</p>

    //   <p className= {cn("text-white inline pl-4")}>Register</p>

    //   </div>

    //         </div>

    <div className={cn("bg-blue-900 ")}>
      <div className={cn(" p-6 w-11/12 inline")}>
        <li className={cn("text-white list-none inline")}>
          <Link href="">
            <a href="">Home</a>
          </Link>
        </li>
        <li className={cn("text-white list-none pl-3 inline")}>
          <Link href="">
            <a href="">Properties</a>
          </Link>
        </li>
        <li className={cn("text-white list-none pl-3 inline")}>
          <Link href="">
            <a href="">Property</a>
          </Link>
        </li>
        <li className={cn("text-white list-none pl-3 inline")}>
          <Link href="">
            <a href="">Realtor</a>
          </Link>
        </li>
        <li className={cn("text-white list-none pl-3 inline")}>
          <Link href="">
            <a href="">Others</a>
          </Link>
        </li>
        <li className={cn("text-white list-none pl-3 inline")}>
          <Link href="">
            <a href="">Contact</a>
          </Link>
        </li>
        <div className={cn("float-right")}>
          <li className={cn("text-white list-none pl-3 inline")}>
            <Link href="">
              <a href="">Login</a>
            </Link>
          </li>
          <li className={cn("text-white list-none pl-3 inline")}>
            <Link href="">
              <a href="">Register</a>
            </Link>
          </li>
          {/* <Button buttonName={"Create a Listing"} className = {cn("bg-blue-300 text-center text-white p-2 inline")} /> */}
        </div>
      </div>
    </div>
  );
}

export default BlueNavbar;
