import Head from "next/head";
import Image from "next/image";
import CryptoTable from "../components/CrytoTable";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";

export default function Home() {
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
  // console.log(data);
  return (
    <div className="block w-full overflow-x-auto">
      <CryptoTable />
    </div>
  );
}
