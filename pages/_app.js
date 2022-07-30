// import Layout from "../components/Layout";
import { useEffect } from "react"
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/globals.css"


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <div className="">
      {/* <Layout> */}
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
      {/* </Layout> */}
    </div>
  );
}

export default MyApp;
