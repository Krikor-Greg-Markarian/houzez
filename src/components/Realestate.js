import React from 'react'
import cn
 from 'classnames'
 import Button from './Button'

function Realestate(props) {
    return (
        <div>
             <div className={cn("bg-blue-900 py-32 ")}>
          <div className={cn("grid grid-cols-2")}>
            <div className={cn("col-span-1")}>
              <div className={cn("grid grid-cols-2")}>
                <div className={cn("cols-span-1 p-24 mt-80")}>
                  <p className={cn("text-white text-3xl pb-12")}>
                    Why Houzez Is The Perfect Choice?
                  </p>
                  <hr className={cn("w-4/12 pb-4")} />
                  <p className={cn("text-white text-3xl")}>01.</p>
                  <p className={cn("text-white text-2xl pt-2")}>
                    Perfect Solution For Designers And Agents
                  </p>
                  <p className={cn("text-gray-500 text-sm pb-12 pt-4")}>
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
                  <p className={cn("text-gray-500 text-sm pb-12 pt-4")}>
                    Someone asked a question? Get back to them right away
                  </p>
                  <hr className={cn("w-4/12")} />
                  <div className={cn("col-span-1 pt-5 w-11/12")}>
                    <p className={cn("text-white text-3xl")}>03.</p>
                    <p className={cn("text-white text-2xl pt-2")}>
                      Customer Relationship Management
                    </p>
                    <p className={cn("text-gray-500 text-sm pb-12 pt-4")}>
                      Keep track of your leads without having to pay for an
                      external CRM
                    </p>
                    <hr className={cn("w-4/12")} />
                  </div>
                </div>
              </div>
            </div>
            <div className={cn("bg-white w-6/12 p-6 mb-10 py-40 ")}>
              <p className={cn("text-lg font-bold text-center")}>
                Real Estate Inquiry Form
              </p>
              <p className={cn("text-gray-500 text-center")}>
                Design custom lead capture forms that integrate with the Houzez
                CRM
              </p>

              <p className={cn("pt-3 text-center")}>inquiry Type</p>

              <div className={cn("flex justify-center items-center")}>
                <input
                  className={cn("border-2 p-1 border-gray-100 w-8/12")}
                  placeholder="Select"
                  type="text"
                  name=""
                  id=""
                />
              </div>

              <p className={cn("pt-3 text-center")}>information</p>
              <div className={cn("flex justify-center items-center")}>
                <input
                  className={cn("border-2 p-1 border-gray-100 mb-1 w-8/12")}
                  placeholder="I'm a"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className={cn("flex justify-center items-center")}>
                <input
                  className={cn("border-2 p-1 border-gray-100 mb-1 w-4/12")}
                  placeholder="First Name"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  className={cn("border-2 p-1 border-gray-100 ml-1 w-4/12")}
                  placeholder="Last Name"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className={cn("flex justify-center items-center")}>
                <input
                  className={cn("border-2 p-1 border-gray-100 w-8/12")}
                  placeholder="Email Address"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <p className={cn("text-center")}>Location</p>
              <div className={cn("flex justify-center items-center")}>
                <input
                  className={cn("border-2 p-1 border-gray-100  w-4/12")}
                  placeholder="Select City"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  className={cn("border-2 p-1 border-gray-100 ml-1 w-4/12")}
                  placeholder="Zip Code"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <p className={cn("text-center")}>Property</p>
              <div className={cn("flex justify-center items-center")}>
                <input
                  className={cn("border-2 p-1 border-gray-100 mb-1 w-8/12")}
                  placeholder="Select type"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div>
                <div className={cn("flex justify-center items-center")}>
                  <input
                    className={cn("border-2 p-1 border-gray-100 w-4/12")}
                    placeholder="Max Price"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className={cn(
                      "border-2 p-1 border-gray-100 ml-1 mb-1 w-4/12"
                    )}
                    placeholder="Minimum Size(Sq Ft)"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div>
                <div className={cn("flex justify-center items-center")}>
                  <input
                    className={cn("border-2 p-1 border-gray-100 w-4/12")}
                    placeholder="Number of Beds"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className={cn("border-2 p-1 border-gray-100 ml-1 w-4/12")}
                    placeholder="Number Of baths"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>

              <div className={cn("flex justify-center items-center mt-2")}>
                <Button
                  className={cn(
                    "bg-blue-500 p-2 text-white text-center px-28 rounded"
                  )}
                  buttonName={"Submit"}
                />
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Realestate
