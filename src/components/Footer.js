import React from "react";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPhoneVolume,
  FaEnvelope,
  FaLocationArrow,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYelp,
  FaYoutube,
} from "react-icons/fa";
import cn from "classnames";
import Link from "next/dist/client/link";
import Button from "./Button";

function Footer(props) {
  return (
    <div className={cn("")}>
      <div className={cn("bg-blue-800 ")}>
        <div className={cn("container mx-auto")}>
          <div className={cn("w-11/12 p-20")}>
            <div className={cn("grid md:grid-cols-6")}>
              <div className={cn("col-span-2")}>
                <p className={cn("pb-6 text-white")}>Discover</p>
                <li className={cn("text-white text-sm list-none")}>
                  <Link href="">
                    <a href="">
                      {" "}
                      <FaChevronRight className={cn("inline")} /> Miami
                    </a>
                  </Link>
                </li>
                <li className={cn("text-white text-sm list-none pt-4")}>
                  <Link href="">
                    <a href="">
                      {" "}
                      <FaChevronRight className={cn("inline")} /> Miami
                    </a>
                  </Link>
                </li>
                <li className={cn("text-white text-sm list-none pt-4")}>
                  <Link href="">
                    <a href="">
                      {" "}
                      <FaChevronRight className={cn("inline")} /> Los Angeles
                    </a>
                  </Link>
                </li>
                <li className={cn("text-white text-sm list-none pt-4")}>
                  <Link href="">
                    <a href="">
                      {" "}
                      <FaChevronRight className={cn("inline")} /> Chicago
                    </a>
                  </Link>
                </li>
                <li className={cn("text-white text-sm list-none pt-4")}>
                  <Link href="">
                    <a href="">
                      {" "}
                      <FaChevronRight className={cn("inline")} /> New York
                    </a>
                  </Link>
                </li>
              </div>
              <div className={cn("col-span-1")}>
                <p className={cn("pb-6 text-white")}>Contact Us</p>

                <div className={cn("flex")}>
                  <div className={cn("flex-shrink pb-4")}>
                    <FaMapMarkerAlt className={cn("text-white text-sm")} />
                  </div>
                  <div className={cn("flex-shrink pl-1")}>
                    <p className={cn("text-white text-xs")}>
                      774 NE 84th St Miami, FL 33879
                    </p>
                  </div>
                </div>
                <div className={cn("flex pt-4")}>
                  <div className={cn("flex-shrink pb-4")}>
                    <FaPhoneAlt className={cn("text-white text-sm")} />
                  </div>
                  <div className={cn("flex-shrink pl-1")}>
                    <p className={cn("text-white text-xs")}>987 654 9875</p>
                  </div>
                </div>
                <div className={cn("flex pt-4")}>
                  <div className={cn("flex-shrink pb-4")}>
                    <FaPhoneVolume className={cn("text-white text-sm")} />
                  </div>
                  <div className={cn("flex-shrink pl-1")}>
                    <p className={cn("text-white text-xs")}>879 456 1349</p>
                  </div>
                </div>
                <div className={cn("flex pt-4")}>
                  <div className={cn("flex-shrink pb-4")}>
                    <FaEnvelope className={cn("text-white text-sm")} />
                  </div>
                  <div className={cn("flex-shrink pl-1")}>
                    <p className={cn("text-white text-xs")}>email@houzez.co</p>
                  </div>
                </div>
              </div>
              <div className={cn("col-span-3 ml-40 sm:ml-2 md:ml-0")}>
                <p className={cn("pb-6 text-white")}>Newsletter</p>

                <div className={cn("flex")}>
                  <div className={cn("flex-shrink")}>
                    <input
                      className={cn(
                        "bg-white p-2 rounded px-28 placeholder-text-left"
                      )}
                      placeholder="Enter Your email"
                      type="text"
                    />
                  </div>
                  <div className={cn("flex-shrink")}>
                    <Button
                      className={cn(
                        "bg-blue-500 p-2 ml-2 px-10 rounded text-center text-white"
                      )}
                      buttonName={"Submit"}
                    />
                  </div>
                </div>

                <p className={cn("text-white text-sm pt-4")}>
                  Houzez is a premium WordPress theme for Designers &amp; Real
                  Estate Agents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn("bg-blue-900 py-6")}>
        <div className={cn("flex justify-center items-center")}>
          <div className={cn("flex")}>
            <div className={cn("flex-shrink pt-1")}>
              <FaFacebookF className={cn("text-white text-sm")} />
            </div>
            <div className={cn("flex-shrink pl-3")}>
              <li className={cn("text-white list-none")}>
                <Link href="">
                  <a href="">Facebook</a>
                </Link>
              </li>
            </div>
            <div className={cn("flex-shrink pl-3 pt-1")}>
              <FaTwitter className={cn("text-white text-sm")} />
            </div>
            <div className={cn("flex-shrink pl-3")}>
              <li className={cn("text-white list-none")}>
                <Link href="">
                  <a href="">Twitter</a>
                </Link>
              </li>
            </div>
            <div className={cn("flex-shrink pl-3 pt-1")}>
              <FaGooglePlusG className={cn("text-white text-sm")} />
            </div>
            <div className={cn("flex-shrink pl-3")}>
              <li className={cn("text-white list-none")}>
                <Link href="">
                  <a href="">Google +</a>
                </Link>
              </li>
            </div>
            <div className={cn("flex-shrink pl-3 pt-1")}>
              <FaLinkedinIn className={cn("text-white text-sm")} />
            </div>
            <div className={cn("flex-shrink pl-3")}>
              <li className={cn("text-white list-none")}>
                <Link href="">
                  <a href="">Linkedin</a>
                </Link>
              </li>
            </div>
            <div className={cn("flex-shrink pl-3 pt-1")}>
              <FaInstagram className={cn("text-white text-sm")} />
            </div>
            <div className={cn("flex-shrink pl-3")}>
              <li className={cn("text-white list-none")}>
                <Link href="">
                  <a href="">Instagram</a>
                </Link>
              </li>
            </div>
            <div className={cn("flex-shrink pl-3 pt-1")}>
              <FaPinterestP className={cn("text-white text-sm")} />
            </div>
            <div className={cn("flex-shrink pl-3")}>
              <li className={cn("text-white list-none")}>
                <Link href="">
                  <a href="">Pinteres</a>
                </Link>
              </li>
            </div>
            <div className={cn("flex-shrink pl-3 pt-1")}>
              <FaYelp className={cn("text-white text-sm")} />
            </div>
            <div className={cn("flex-shrink pl-3")}>
              <li className={cn("text-white list-none")}>
                <Link href="">
                  <a href="">Yelp</a>
                </Link>
              </li>
            </div>
            <div className={cn("flex-shrink pl-3 pt-1")}>
              <FaYoutube className={cn("text-white text-sm")} />
            </div>
            <div className={cn("flex-shrink pl-3")}>
              <li className={cn("text-white list-none")}>
                <Link href="">
                  <a href="">Youtube</a>
                </Link>
              </li>
            </div>
          </div>
        </div>
        <div className={cn("flex justify-center items-center")}>
          <div className={cn("flex-shrink pb-5 pt-5")}>
            <FaMapMarkerAlt className={cn("text-white text-2xl")} />
          </div>
          <div className={cn("flex-shrink")}>
            <p className={cn("text-white text-3xl pt-5 pb-5 pl-2")}>houzez</p>
          </div>
        </div>

        <p className={cn(" text-white flex justify-center")}>
          &copy; Houzez - All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
