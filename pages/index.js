import cn from "classnames";
import ImageSwiper from "../src/components/ImageSwiper";
import BlueNavbar from "../src/components/BlueNavbar";
import WhiteNavbar from "../src/components/WhiteNavbar";
import HouzezCard from "../src/components/HouzezCard";
import axios from "axios";
import Swiper from "swiper";
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import Cities from "../src/components/Cities";
import Agents from "../src/components/Agents";

export default function Home({ houzez, cities, agents }) {
  return (
    <div className={cn("bg-white")}>
      <section>
        <WhiteNavbar />
      </section>

      <section>
        <BlueNavbar />
      </section>

      <section>
        <ImageSwiper />
      </section>

      <section className={cn("flex justify-center ")}>
        <div>
          <input
            className={cn("px-56 p-2 inline")}
            placeholder="Enter Keyword..."
            type="text"
            name=""
            id=""
          />
          <p className={cn("text-gray-500 px-4 p-2 inline border-2 bg-white")}>
            Status
          </p>
          <p
            className={cn(
              "text-gray-500 p-2 inline px-4 border-r-2 border-t-2 border-b-2 bg-white"
            )}
          >
            Type
          </p>
          <p
            className={cn(
              "text-gray-500 p-2 inline px-4 border-r-2 border-t-2 border-b-2 bg-white"
            )}
          >
            Bedrooms
          </p>
          <p
            className={cn(
              "text-gray-500 p-2 inline px-4 border-r-2 border-t-2 border-b-2 bg-white"
            )}
          >
            Bathrooms
          </p>
          <p
            className={cn(
              "text-gray-500 p-2 inline px-4 border-r-2 border-t-2 border-b-2 bg-white"
            )}
          >
            Advanced
          </p>
          <p
            className={cn(
              "text-white p-2 inline  border-r-2 rounded-r-lg px-5 bg-yellow-600"
            )}
          >
            Go
          </p>
        </div>
      </section>

      <section className={cn("pt-2")}>
        <div className={cn("bg-gray-100")}>
          <p className={cn("text-3xl text-center")}>Welcome To Houzez</p>
          <p className={cn("text-gray-500 text-center pt-4")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>

          <div className={cn("flex justify-center items-center pt-12")}>
            <div className={cn("grid md:grid-cols-3 gap-10 w-7/12")}>
              {houzez.map((item, idx) => (
                <div key={idx} className={cn("col-span-1")}>
                  <HouzezCard
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-100")}>
          <p className={cn("text-3xl text-center")}>
            Check Our Featured Listings
          </p>
          <p className={cn("text-gray-500 text-center")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>

          <div className={cn("flex justify-center items-center")}></div>
        </div>
      </section>

      <section>
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
      </section>

      <section>
        <div className={cn("bg-gray-100")}>
          <p className={cn("text-3xl text-center")}>Explore Lifestyles</p>
          <p className={cn("text-gray-500 text-center")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>

          <div className={cn("flex justify-center items-center")}></div>
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-100")}>
          <p className={cn("text-3xl text-center")}>Properties For Sale</p>
          <p className={cn("text-gray-500 text-center")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>

          <div className={cn("flex justify-center items-center")}></div>
        </div>
      </section>

      <section>
        <div className={cn("p-8")}>
          <p className={cn("text-3xl text-center")}>Explore Cities</p>
          <p className={cn("text-gray-500 pt-4 text-center")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div className={cn("flex justify-center items-center py-24")}>
            <div className={cn("grid grid-cols-4 gap-4")}>
              {cities.map((item, idx) => (
                <div key={idx} className={cn("col-span-1")}>
                  <Cities
                    imageUrl={item.imageUrl}
                    city={item.city}
                    property={item.property}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className={cn("p-8")}>
          <p className={cn("text-3xl text-center")}>Explore Cities</p>
          <p className={cn("text-gray-500 pt-4 text-center")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div className={cn("flex justify-center items-center py-24")}>
            <div className={cn("grid grid-cols-4 gap-4")}>
              {agents.map((item, idx) => (
                <div key={idx} className={cn("col-span-1")}>
                  <Agents
                    
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                    text={item.text}
                    ViewButton={item.ViewButton}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className={cn("bg-gray-100")}>
          <p className={cn("text-3xl text-center")}>Get In Touch With Us</p>
          <p className={cn("text-gray-500 text-center")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div className={cn("flex justify-center")}>
            <div className={cn("grid grid-cols-4")}>
              {agents.map((item, idx) => (
                <div key={idx} className={cn("col-span-1")}>
                  <Agents
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                    text={item.text}
                    ViewButton={item.ViewButton}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={cn("bg-white py-6")}>
        <div className={cn("flex justify-center items-center")}>
          <div className={cn("grid grid-cols-5 gap-16")}>
            <div className={cn("col-span-1")}>
              <img
                src="https://432351-1355223-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/03/partner-01-e1582734705113.jpg"
                alt=""
              />
            </div>
            <div className={cn("col-span-1")}>
              <img
                src="https://432351-1355223-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/03/partner-02-e1582734691936.jpg"
                alt=""
              />
            </div>
            <div className={cn("col-span-1")}>
              <img
                src="https://432351-1355223-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/03/partner-04-e1582734649458.jpg"
                alt=""
              />
            </div>
            <div className={cn("col-span-1")}>
              <img
                src="https://432351-1355223-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/03/partner-03-e1582734671602.jpg"
                alt=""
              />
            </div>

            <div className={cn("col-span-1")}>
              <img
                src="https://432351-1355223-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/03/partner-05-e1582734603812.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const houzezResponse = await axios.get(
    "https://ea50086b-af54-4718-ab27-001ee37d4e28.mock.pstmn.io/houzez"
  );
  const citiesResponse = await axios.get(
    "https://ea50086b-af54-4718-ab27-001ee37d4e28.mock.pstmn.io/cities"
  );
  const agentsResponse = await axios.get(
    "https://ea50086b-af54-4718-ab27-001ee37d4e28.mock.pstmn.io/agents"
  );

  return {
    props: {
      houzez: houzezResponse.data,
      cities: citiesResponse.data,
      agents: agentsResponse.data,
    }, // will be passed to the page component as props
  };
}
