import cn from "classnames";
import Link from "next/dist/client/link";
import BlueNavbar from "../src/components/BlueNavbar";
import WhiteNavbar from "../src/components/WhiteNavbar";
import axios from "axios";
import Footer from "../src/components/Footer";
import { FaAngleRight } from "react-icons/fa";
import GridFullWidth from "../src/components/GridFullWidth";

export default function Home({ gridfullwidth }) {
  return (
    <div className={cn("bg-white")}>
      <section>
        <WhiteNavbar />
      </section>

      <section>
        <BlueNavbar />
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

      <section>
        <div className={cn("bg-gray-100 py-40")}>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn(" w-8/12")}>
              <li className={cn("text-blue-600 list-none inline")}>
                <Link href="/">
                  <a href="">
                    Home{" "}
                    <FaAngleRight
                      className={cn("inline text-gray-500 text-sm")}
                    />{" "}
                  </a>
                </Link>
              </li>
              <span className={cn("text-gray-500 inline text-base")}>
                Grid Full Width 4 Cols
              </span>
              <div>
                <p className={cn("text-3xl pt-3")}>Grid Full Width 4 Cols</p>
              </div>
              <div>
                <p className={cn(" pt-8")}> 52 Properties </p>
              </div>
              <div>
                <div className={cn("grid grid-cols-4 gap-6")}>
                  {gridfullwidth.map((item, idx) => (
                    <div className={cn("col-span-1")}>
                      <GridFullWidth
                        key={idx}
                        imageUrl={item.imageUrl}
                        featureIsSelected={item.featureIsSelected}
                        featured={item.featured}
                        rentIsSelected={item.rentIsSelected}
                        forRent={item.forRent}
                        isVisible={item.isVisible}
                        price={item.price}
                        perSquarPrice={item.perSquarPrice}
                        title={item.title}
                        location={item.location}
                        numberOfBedroom={item.numberOfBedroom}
                        bedrooms={item.bedrooms}
                        numberOfBathroom={item.numberOfBathroom}
                        bathroom={item.bathroom}
                        spaceMeters={item.spaceMeters}
                        space={item.space}
                      />
                    </div>
                  ))}
                </div>
              </div>
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
  const gridfullwidthResponse = await axios.get(
    "https://ea50086b-af54-4718-ab27-001ee37d4e28.mock.pstmn.io/gridfullwidth"
  );

  const gridfullwidth = gridfullwidthResponse.data.data || [];

  return {
    props: {
      gridfullwidth: gridfullwidth,
    }, // will be passed to the page component as props
  };
}
