import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative flex-grow flex-1">
            <Link href="/">
              <a className={"font-semibold text-lg"}>Home</a>
            </Link>
          </div>
          <div className="relative flex-grow flex-1">
            <Link href="/wallet">
              <a className={"font-semibold text-lg"}>Wallet</a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Link href="#">
          <a>Light/Dark mode</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
