import React, { useState } from "react";
import cn from "classnames";
import Button from "./Button";
import { FaSpinner } from "react-icons/fa";

function Realestate(props) {
  const [inquiry, setInquiry] = useState("");
  const [information, setInformation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [location, setLocation] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [property, setProperty] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [minSpace, setMinSpace] = useState("");
  const [numberOfBeds, setNumberOfBeds] = useState("");
  const [numberOfbaths, setNumberOfBaths] = useState("");
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isred, setIsred] = useState(false);

  const onInquiryChange = (e) => {
    const tmp = e.target.value;
    setInquiry(tmp);
    console.log(tmp);
  };

  const onInformationChange = (e) => {
    const tmp = e.target.value;
    setInformation(tmp);
    console.log(tmp);
  };

  const onFirstName = (e) => {
    const tmp = e.target.value;
    setFirstName(tmp);
    console.log(tmp);
  };

  const onLastName = (e) => {
    const tmp = e.target.value;
    setLastName(tmp);
    console.log(tmp);
  };

  const onEmailAddress = (e) => {
    const tmp = e.target.value;
    setEmailAddress(tmp);
    console.log(tmp);
  };

  const onProperty = (e) => {
    const tmp = e.target.value;
    setProperty(tmp);
    console.log(tmp);
  };

  const onLocation = (e) => {
    const tmp = e.target.value;
    setLocation(tmp);
    console.log(tmp);
  };

  const onZipCode = (e) => {
    const tmp = e.target.value;
    setZipCode(tmp);
    console.log(tmp);
  };

  const onMinPrice = (e) => {
    const tmp = e.target.value;
    setMinPrice(tmp);
    console.log(tmp);
  };

  const onMinSpace = (e) => {
    const tmp = e.target.value;
    setMinSpace(tmp);
    console.log(tmp);
  };

  const onNumberOfBeds = (e) => {
    const tmp = e.target.value;
    setNumberOfBeds(tmp);
    console.log(tmp);
  };

  const onNumberOfBaths = (e) => {
    const tmp = e.target.value;
    setNumberOfBaths(tmp);
    console.log(tmp);
  };

  const onSubmit = () => {
    setDisable(true);
    setLoading(true);
    // textInput.map((item, idx) =>
    // {
    //   if(item.trim() == "")
    //   setIsred(true);
    // })

    if (inquiry.trim() == "") {
      setIsred(true);
    }

    if (firstName.trim() == "") {
      setIsred(true);
    }

    if (lastName.trim() == "") {
      setIsred(true);
    }

    if (emailAddress.trim() == "") {
      setIsred(true);
    }

    if (location.trim() == "Select") {
      setIsred(true);
    }

    const data = {
      inquiry,
      information,
      firstName,
      lastName,
      emailAddress,
      location,
      zipCode,
      property,
      minPrice,
      minSpace,
      numberOfBeds,
      numberOfbaths,
      textInput: { inquiry, firstName },
    };
    // code here
    // console.log(data);
    // setDisable(false);
    // setLoading(false);
  };

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
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Select"
                  value={inquiry}
                  onChange={onInquiryChange}
                  className={cn(
                    " border-2 placeholder-gray-700 p-2 rounded w-full mb-1",
                    { "border-red-300": isred }
                  )}
                />
              </div>
              <div className={cn("pt-2")}>
                <label htmlFor="">information</label>

                <form className="inline" action="">
                  <select
                    onChange={onInformationChange}
                    className={cn(
                      "border-2 placeholder-gray-700 p-2 rounded w-full mb-1"
                    )}
                    name=""
                    id=""
                    value={information}
                    onChange={onInformationChange}
                  >
                    <option value="Select">i'm a</option>
                    <option value="Boy">Boy</option>
                    <option value="Girl">Girl</option>
                    <option value="Other">Other</option>
                  </select>
                </form>

                <div className={cn("pt-2")}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                    value={firstName}
                    onChange={onFirstName}
                    className={cn(
                      "w-6/12 border-b-2 border-l-2 border-t-2 placeholder-gray-700 p-2 rounded",
                      { "border-red-300": isred }
                    )}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                    value={lastName}
                    onChange={onLastName}
                    className={cn(
                      "w-6/12 border-2 placeholder-gray-700 p-2  rounded",
                      { "border-red-300": isred }
                    )}
                  />
                </div>
                <div className={cn("pt-2")}>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={emailAddress}
                    placeholder="Email Address"
                    onChange={onEmailAddress}
                    className={cn(
                      "w-full border-2 placeholder-gray-700 p-2 rounded",
                      { "border-red-300": isred }
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
                        "border-t-2 border-b-2 border-l-2 w-6/12 placeholder-gray-700 p-2 rounded",
                        { "border-red-300": isred }
                      )}
                      name=""
                      id=""
                      value={location}
                      onChange={onLocation}
                    >
                      <option value="Select">Select</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </form>
                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-2 w-6/12 placeholder-gray-700 p-2 rounded"
                      )}
                      name=""
                      id=""
                      value={zipCode}
                      onChange={onZipCode}
                    >
                      <option value="zip code">Zip Code</option>
                      <option value="06321">06321</option>
                      <option value="789621">789621</option>
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
                    value={property}
                    placeholder="Select type"
                    onChange={onProperty}
                    className={cn(
                      "border-2 p-2 placeholder-gray-700 rounded w-full mb-1",
                      { "border-red-300": isred }
                    )}
                  />

                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-t-2 border-b-2 border-l-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                      )}
                      name=""
                      id=""
                      value={minPrice}
                      onChange={onMinPrice}
                    >
                      <option value="Min Price">Min Price</option>
                      <option value="500$">500$</option>
                      <option value="800$">800$</option>
                    </select>
                  </form>

                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-2 w-6/12 placeholder-gray-700 p-2 rounded"
                      )}
                      name=""
                      id=""
                      value={minSpace}
                      onChange={onMinSpace}
                    >
                      <option value="Minimum Size (Sq Ft)">
                        Minimum Size (Sq Ft)
                      </option>
                      <option value="2000M">2000m</option>
                      <option value="500M">500m</option>
                    </select>
                  </form>

                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-t-2 border-b-2 border-l-2 p-2 placeholder-gray-700 rounded w-6/12 mb-1"
                      )}
                      name=""
                      value={numberOfbaths}
                      id=""
                      onChange={onNumberOfBaths}
                    >
                      <option value="Number of Beds">Number of beds</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </form>

                  <form className="inline" action="">
                    <select
                      className={cn(
                        "border-2 w-6/12 placeholder-gray-700 p-2 rounded"
                      )}
                      name=""
                      value={numberOfBeds}
                      id=""
                      onChange={onNumberOfBeds}
                    >
                      <option value="nUMBER OF bATHS">Number of baths</option>
                      <option value="4">4</option>
                      <option value="3">3</option>
                    </select>
                  </form>
                </div>
              </div>
              <div className={cn("pt-4 pb-2")}>
                <Button
                  disabled={disable}
                  isLoading={loading}
                  onClick={onSubmit}
                  className={cn(
                    "bg-blue-600 text-white text-sm p-4 w-full rounded text-center"
                  )}
                  buttonName={""}
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
