import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded "
      }
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
