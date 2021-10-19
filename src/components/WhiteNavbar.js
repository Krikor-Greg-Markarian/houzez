import React from "react";
import cn from "classnames";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaRegSnowflake,
} from "react-icons/fa";

function WhiteNavbar(props) {
  return (
    <div className={cn("p-6")}>
      <div className={cn("flex justify-center items-center")}>
        <div className={cn("flex-shrink")}>
          <FaMapMarkerAlt className={cn("text-blue-500 mt-2")} />
        </div>
        <div className={cn("flex-shrink")}>
          <p className={cn("font-bold text-3xl text-blue-900 pl-2")}>houzez</p>
        </div>
        <div className={cn("flex ml-40")}>
          <div className={cn("flex-shrink")}>
            <FaPhoneAlt className={cn("text-blue-500 mt-2 text-3xl")} />
          </div>
          <div className={cn("flex-shrink ml-3")}>
            <p className={cn("font-bold text-blue-900")}>1 800 987 6543</p>
            <p>info@houzez.com</p>
          </div>
          <div className={cn("flex-shrink")}></div>
        </div>
        <div className={cn("flex ml-4")}>
          <div className={cn("flex-shrink")}>
            <FaMapMarkerAlt className={cn("text-blue-500 mt-2 text-3xl")} />
          </div>
          <div className={cn("flex-shrink ml-3")}>
            <p className={cn("font-bold text-blue-900")}>Oceanview Hall</p>
            <p>Miami, FL 33141</p>
          </div>
          <div className={cn("flex-shrink")}></div>
        </div>
        <div className={cn("flex ml-4")}>
          <div className={cn("flex-shrink")}>
            <FaRegClock className={cn("text-blue-500 mt-2 text-3xl")} />
          </div>
          <div className={cn("flex-shrink ml-3")}>
            <p className={cn("font-bold text-blue-900")}>9 am to 6 pm</p>
            <p>Monday to Friday</p>
          </div>
          <div className={cn("flex-shrink")}></div>
        </div>

        <div className={cn("flex ml-12")}>
          <div className={cn("flex-shrink")}>
            <FaFacebookF className={cn("text-blue-900 text-2xl")} />
          </div>
          <div className={cn("flex-shrink pl-2")}>
            <FaTwitter className={cn("text-blue-900 text-2xl")} />
          </div>
          <div className={cn("flex-shrink pl-2")}>
            <FaInstagram className={cn("text-blue-900 text-2xl")} />
          </div>
          <div className={cn("flex-shrink pl-2")}>
            <FaPinterestP className={cn("text-blue-900 text-2xl")} />
          </div>
          <div className={cn("flex-shrink pl-2")}>
            <FaYoutube className={cn("text-blue-900 text-2xl")} />
          </div>
          <div className={cn("flex-shrink pl-2")}>
            <FaRegSnowflake className={cn("text-blue-900 text-2xl")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhiteNavbar;
