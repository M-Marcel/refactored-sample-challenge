import Navbar from "../components/Navbar";
// import Coins from "../components/Coins.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Link from "next/link";
import { useState } from "react";

// export const getStaticProps = async () => {
export async function getServerSideProps() {
  const res = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=2`,
    {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "X-CMC_PRO_API_KEY": "04720ebd-e29a-452a-86db-d5aea8f42b4f",
        // "X-CMC_PRO_API_KEY": process.env.API_PRIVATE_KEY,
        "Content-type": "application/json",
      },
    }
  );
  const data = await res.json();

  return {
    props: { coins: data },
  };
}
const Home = ({ coins }) => {
  // useState{  }
  return (
    <>
      <Navbar />
      {console.log(coins)}

      {coins.data &&
        coins.data.map((coin) => (
          <div className="container">
            {/* <h3>{coin.symbol}</h3> */}

            <Tabs
              defaultActiveKey="profile"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="home" title="Home">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Coin</th>
                      <th></th>
                      <th>Price</th>
                      <th>24h Volume</th>
                      <th>Mrk Cap</th>
                      <th>Last 7 days</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={coin.id}>
                      <td>{coin.length}</td>
                      <td>
                        <span>Logo</span> <span>{coin.name}</span>
                      </td>
                      <td>{coin.symbol}</td>
                      <td>{coin.quote.USD.price}</td>
                      <td>{coin.quote.USD.volume_24h}</td>
                      <td>{coin.quote.USD.market_cap}</td>
                      <td>{coin.quote.USD.percent_change_7d}</td>
                    </tr>
                  </tbody>
                </Table>
                {/* <Coins /> */}
              </Tab>
              <Tab eventKey="wallet" title="Wallet">
                {/* <Wallet /> */}
              </Tab>
            </Tabs>
          </div>
        ))}
    </>
  );
};

export default Home;
