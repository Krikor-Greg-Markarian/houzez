import cn from "classnames";
import ImageSwiper from "../src/components/ImageSwiper";
import BlueNavbar from "../src/components/BlueNavbar";
import WhiteNavbar from "../src/components/WhiteNavbar";
import HouzezCard from "../src/components/HouzezCard";
import axios from "axios";
import Footer from "../src/components/Footer";
import Cities from "../src/components/Cities";
import Agent from "../src/components/Agent";
import Realestate from "../src/components/Realestate";
import HouseRentBuySwiper from "../src/components/HouseRentBuySwiper";
import LifeStyle from "../src/components/LifeStyle";

export default function Home({
  houzez,
  cities,
  agent,
  featuredListingsItems,
  lifestyle,
}) {
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
        <div className={cn("p-2")}>
          <input
            className={cn("px-56 p-1.5 inline border-2")}
            placeholder="Enter Keyword..."
            type="text"
            name=""
            id=""
          />
          <p
            className={cn(
              "text-gray-500 px-4 p-2 inline border-t-2 border-b-2 border-r-2 bg-white"
            )}
          >
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
        <div className={cn("bg-gray-100 py-12")}>
          <p className={cn("text-3xl text-center")}>Welcome To Houzez</p>
          <p className={cn("text-gray-500 text-center pt-2")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>

          <div className={cn("flex justify-center items-center pt-12 py-12")}>
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
        <div className={cn("bg-white py-12")}>
          <p className={cn("text-3xl text-center ")}>
            Check Our Featured Listings
          </p>
          <p className={cn("text-gray-500 pt-4 text-center")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>

          <div className={cn("flex justify-center items-center space-x-4")}>
            <div className={cn("bg-blue-300")}>1</div>
            <div className={cn("bg-blue-700")}>2</div>
            <div className={cn("bg-blue-900")}>3</div>
          </div>
        </div>

        <HouseRentBuySwiper featuredListingsItems={featuredListingsItems} />
      </section>

      <section>
        <Realestate />
      </section>

      <section>
        <div className={cn("bg-white py-12")}>
          <p className={cn("text-3xl text-center")}>Explore Lifestyles</p>
          <p className={cn("text-gray-500 pt-4 text-center py-12")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>

          <LifeStyle
            apartmentImageUrL={
              "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg"
            }
            apartment={"Apartment"}
            properties={"17 PROPERTIES"}
            singleImageUrl={
              "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060__340.jpg"
            }
            single={"Single Family Home"}
            secondProperties={"12 PROPERTIES"}
            studioImageUrl={
              "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062__340.jpg"
            }
            studio={"Studio"}
            thirdProperties={"7 PROPERTIES"}
            officeImageUrl={
              "https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376__340.jpg"
            }
            office={"Office"}
            forthProperties={"3 PROPERTIES"}
            shopImageUrl={
              "https://cdn.pixabay.com/photo/2018/08/15/20/53/bathtub-3609070__340.jpg"
            }
            shop={"Shop"}
            fifthProperties={"3 PROPERTIES"}
            villaImageUrl={
              "https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037__340.jpg"
            }
            villa={"Villa"}
            sixthProperties={"10 PROPERTIES"}
          />
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-100 py-12")}>
          <p className={cn("text-3xl text-center")}>Properties For Sale</p>
          <p className={cn("text-gray-500 text-center")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>

          <div className={cn("py-18")}>
            <HouseRentBuySwiper featuredListingsItems={featuredListingsItems} />
          </div>
        </div>
      </section>

      <section>
        <div className={cn("p-8")}>
          <p className={cn("text-3xl text-center")}>Explore Cities</p>
          <p className={cn("text-gray-500 pt-4 text-center")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div className={cn("flex justify-center items-center py-24")}>
            <div className={cn("grid md:grid-cols-4 gap-4")}>
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

      <section className={cn("pt-2")}>
        <div className={cn("bg-gray-100 py-10 pb-20")}>
          <p className={cn("text-3xl text-center")}>Get In Touch With Us</p>
          <p className={cn("text-gray-500 text-center pt-4")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>

          <div className={cn("flex justify-center items-center pt-12")}>
            <div className={cn("grid md:grid-cols-4 w-7/12")}>
              {agent.map((item, idx) => (
                <div key={idx} className={cn("col-span-1")}>
                  <Agent
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
          <div className={cn("grid md:grid-cols-5 w-7/12")}>
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

  const agentResponse = await axios.get(
    "https://ea50086b-af54-4718-ab27-001ee37d4e28.mock.pstmn.io/agent"
  );

  const featuredListingsItemResponse = await axios.get(
    "https://ea50086b-af54-4718-ab27-001ee37d4e28.mock.pstmn.io/featuredListingsItem"
  );

  const houzez = houzezResponse.data.data || [];
  const cities = citiesResponse.data.data || [];
  const agent = agentResponse.data.data || [];
  const featuredListingsItem = featuredListingsItemResponse.data.data || [];

  return {
    props: {
      houzez: houzez,
      cities: cities,
      agent: agent,
      featuredListingsItems: featuredListingsItem,
    }, // will be passed to the page component as props
  };
}
