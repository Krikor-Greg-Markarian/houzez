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
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  className={cn(
                    " border-2 placeholder-gray-700 p-2 rounded w-full mb-1"
                  )}
                />
              </div>
              <div className={cn("pt-2")}>
                <label htmlFor="">information</label>

                <form className="inline" action="">
                  <select
                    className={cn(
                      "border-2 placeholder-gray-700 p-2 rounded w-full mb-1"
                    )}
                    name=""
                    id=""
                  >
                    <option value="Select">i'm a</option>
                    <option value="Select">Boy</option>
                    <option value="Select">Girl</option>
                    <option value="Select">Other</option>
                  </select>
                </form>

                <div className={cn("pt-2")}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    className={cn(
                      "w-6/12 border-b-2 border-l-2 border-t-2 placeholder-gray-700 p-2 rounded"
                    )}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
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
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    className={cn(
                      "w-full border-2 placeholder-gray-700 p-2 rounded"
                    )}
                  />
                </div>
                <div className={cn("pt-2")}>
                  <div>
                    <label htmlFor="">Location</label>
                  </div>

                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-t-2 border-b-2 border-l-2 w-6/12 placeholder-gray-700 p-2 rounded"
                      )}
                      name=""
                      id=""
                    >
                      <option value="Select">Select</option>
                      <option value="Select">Lebanon</option>
                      <option value="Select">USA</option>
                      <option value="Select">Canada</option>
                    </select>
                  </form>
                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-2 w-6/12 placeholder-gray-700 p-2 rounded"
                      )}
                      name=""
                      value=""
                      id=""
                    >
                      <option value="">Zip Code</option>
                      <option value="">06321</option>
                      <option value="">789621</option>
                    </select>
                  </form>
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
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    className={cn(
                      "border-2 p-2 placeholder-gray-700 rounded w-full mb-1"
                    )}
                  />
                  {/* <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Max Price"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    className={cn(
                      "border-t-2 border-b-2 border-l-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                    )}
                  /> */}
                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-t-2 border-b-2 border-l-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                      )}
                      name=""
                      value=""
                      id=""
                    >
                      <option value="">Min Price</option>
                      <option value="">500$</option>
                      <option value="">800$</option>
                    </select>
                  </form>

                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-2 w-6/12 placeholder-gray-700 p-2 rounded"
                      )}
                      name=""
                      value=""
                      id=""
                    >
                      <option value="">Minimum Size (Sq Ft)</option>
                      <option value="">2000m</option>
                      <option value="">500m</option>
                    </select>
                  </form>

                  {/* <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Minimum Size(Sq Ft"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    className={cn(
                      "border-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                    )}
                  /> */}
                  {/* <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Number of beds"
                    onChange={() => {
                      console.log(e.target.value);
                    }}
                    className={cn(
                      "border-t-2 border-b-2 border-l-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                    )}
                  /> */}
                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-t-2 border-b-2 border-l-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                      )}
                      name=""
                      value=""
                      id=""
                    >
                      <option value="">Number of beds</option>
                      <option value="">3</option>
                      <option value="">4</option>
                    </select>
                  </form>
                  {/* <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Number of baths"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    className={cn(
                      "border-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                    )}
                  /> */}
                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-2 w-6/12 placeholder-gray-700 p-2 rounded"
                      )}
                      name=""
                      value=""
                      id=""
                    >
                      <option value="">Number of baths</option>
                      <option value="">4</option>
                      <option value="">3</option>
                    </select>
                  </form>
                </div>
              </div>
              <div onClick={() => console.log("")} className={cn("pt-4 pb-2")}>
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
