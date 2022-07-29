import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";

// export const getStaticProps = async () => {
// export async function getServerSideProps() {
// const res = await fetch(
//   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=4`,
//   {
//     method: "get",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "X-CMC_PRO_API_KEY": "04720ebd-e29a-452a-86db-d5aea8f42b4f",
//       // "X-CMC_PRO_API_KEY": process.env.API_PRIVATE_KEY,
//       "Content-type": "application/json",
//     },
//   }
// );
// const data = await res.json();

// for(data)
// return {
//   props: { coins: data },
// };
// }
const Home = () => {
  // useState{  }
  return (
    <>
      <Navbar />
      <table className="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
              }
            >
              {/* Project {console.log(coins)} */}
              {/* Project
                        {coins && coins.map(coin => (

                            <div key={coin.id}>
                                <a>
                                    <h3>{coin.symbol}</h3>
                                </a>
                            </div>
                        ))} */}
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
              }
            >
              Budget
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
              }
            >
              Status
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
              }
            >
              Users
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
              }
            >
              Completion
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
              }
            ></th>
          </tr>
        </thead>
        <Link href={"/coin/1"}>
          <a>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/bootstrap.jpg"
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  />
                  <span className={"ml-3 font-bold "}>Argon Design System</span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $2,500 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-orange-500 mr-2"></i> pending
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex"></div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "60%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"></td>
              </tr>
            </tbody>
          </a>
        </Link>
      </table>
    </>
  );
};

export default Home;
