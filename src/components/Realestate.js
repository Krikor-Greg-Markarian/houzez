import React from "react";
import cn from "classnames";
import Button from "./Button";

function Realestate(props) {
  return (
    <div className={cn("blueOpacityBackground bg-fixed")}>
      <div className={cn("bg-blue-900 opacity-95 py-32")}>
        <div className={cn("grid md:grid-cols-2")}>
          <div className={cn("col-span-1")}>
            <div className={cn("grid md:grid-cols-2")}>
              <div className={cn("cols-span-1 p-24 mt-80 ")}>
                <p className={cn("text-white text-3xl pb-12")}>
                  Why Houzez Is The Perfect Choice?
                </p>
                <hr className={cn("w-4/12 pb-4")} />
                <p className={cn("text-white text-3xl")}>01.</p>
                <p className={cn("text-white text-2xl pt-2")}>
                  Perfect Solution For Designers And Agents
                </p>
                <p className={cn("text-gray-500 pb-12 pt-4")}>
                  Never miss a sale! It's never been easier to turn leads into
                  real customers
                </p>
                <hr className={cn("w-4/12")} />
              </div>
              <div className={cn("col-span-1 w-8/12 mt-80")}>
                <p className={cn("text-white text-3xl")}>02.</p>
                <p className={cn("text-white text-2xl pt-2")}>
                  Design Custom Leads Capture Forms
                </p>
                <p className={cn("text-gray-500 pb-12 pt-4")}>
                  Someone asked a question? Get back to them right away
                </p>
                <hr className={cn("w-4/12")} />
                <div className={cn("col-span-1 pt-5 w-11/12")}>
                  <p className={cn("text-white text-3xl")}>03.</p>
                  <p className={cn("text-white text-2xl pt-2")}>
                    Customer Relationship Management
                  </p>
                  <p className={cn("text-gray-500 pb-12 pt-4")}>
                    Keep track of your leads without having to pay for an
                    external CRM
                  </p>
                  <hr className={cn("w-4/12")} />
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn("p-14 bg-white rounded-lg w-7/12", props.className)}
          >
            <div className={cn("mt-10")}>
              <p className={cn("font-bold text-2xl mb-4")}>
                Real Estate Inquiry Form
              </p>
              <p className={cn("text-sm text-gray-500 mb-4")}>
                Design custom lead capture forms that integrate with the Houzez
                CRM
              </p>
              <div className={cn("inline")}>
                <label htmlFor="">Inquiry Type</label>
                <div></div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Select"
                  className={cn(
                    " border-2 placeholder-gray-700 p-2 rounded w-full mb-1"
                  )}
                />
              </div>
              <div className={cn("pt-2")}>
                <label htmlFor="">information</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="I'm a"
                  className={cn(
                    "border-2 placeholder-gray-700 p-2 rounded w-full mb-1"
                  )}
                />

                <div className={cn("pt-2")}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                    className={cn(
                      "w-6/12 border-b-2 border-l-2 border-t-2 placeholder-gray-700 p-2 rounded"
                    )}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                    className={cn(
                      "w-6/12 border-2 placeholder-gray-700 p-2  rounded"
                    )}
                  />
                </div>
                <div className={cn("pt-2")}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email Address"
                    className={cn(
                      "w-full border-2 placeholder-gray-700 p-2 rounded"
                    )}
                  />
                </div>
                <div className={cn("pt-2")}>
                  <div>
                    <label htmlFor="">Location</label>
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Select City"
                    className={cn(
                      "border-2 w-6/12 placeholder-gray-700 p-2 rounded"
                    )}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Zip Code"
                    className={cn(
                      "border-t-2 border-b-2 border-r-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                    )}
                  />
                </div>
                <div className={cn("pt-2")}>
                  <div>
                    <label htmlFor="">Property</label>
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Select type"
                    className={cn(
                      "border-2 p-2 placeholder-gray-700 rounded w-full mb-1"
                    )}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Max Price"
                    className={cn(
                      "border-t-2 border-b-2 border-l-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                    )}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Minimum Size(Sq Ft"
                    className={cn(
                      "border-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                    )}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Number of beds"
                    className={cn(
                      "border-t-2 border-b-2 border-l-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                    )}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Number of baths"
                    className={cn(
                      "border-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                    )}
                  />
                </div>
              </div>
              <div className={cn("pt-4 pb-2")}>
                <Button
                  className={cn(
                    "bg-blue-600 text-white text-sm p-4 w-full rounded text-center"
                  )}
                  buttonName={"Submit"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realestate;
