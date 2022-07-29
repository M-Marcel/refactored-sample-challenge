import Head from "next/head";
import Image from "next/image";
import CryptoTable from "../components/CrytoTable";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";

export default function Home() {
  return (
    <div className="block w-full overflow-x-auto">
      <CryptoTable />
    </div>
  );
}
