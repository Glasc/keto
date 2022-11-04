import { useEffect, useRef, useState } from "react";
import routes from "./routes";

export const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  console.log(isScrolling)

  useEffect(() => {
    setInterval(() => {
      const isScrolling = window.scrollY > 0;
      setIsScrolling(isScrolling);
    }, 200);
  }, []);

  return (
    <nav className={`transition duration-300 ease-in-out z-40 ${isScrolling && "bg-base-100 md:ring-1 md:ring-slate-900/5"}`}>
      <div className="container navbar flex justify-between py-1">
        <div className="grid w-full grid-cols-3 sm:block sm:w-auto">
          {/* <div></div> */}
          <DropDown />
          <a href="/">
            <img
              className={`mx-auto w-12 py-2 sm:w-16`}
              src="/loguito.png"
              alt="Img"
            />
          </a>
          <div></div>
        </div>
        <FullNavbar />
      </div>
    </nav>
  );
};

interface LinksProps {
  icons?: boolean;
}

const Links = ({ icons = false }: LinksProps) => {
  return (
    <>
      {routes.map((route) => (
        <li
          key={route.href}
          className="md:text-md flex text-neutral-content sm:block md:text-md"
        >
          <a href={route.href}>
            {icons && <route.icon size={28} color={"#172b4d"} />}
            {route.title}
          </a>
        </li>
      ))}
    </>
  );
};

const FullNavbar = () => {
  return (
    <div className="hidden sm:flex">
      <ul className="menu menu-horizontal p-0">
        <Links />
      </ul>
    </div>
  );
};

const DropDown = () => {
  return (
    <div className="dropdown sm:hidden">
      <label tabIndex={0} className="btn btn-ghost sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
      >
        <Links icons={true} />
      </ul>
    </div>
  );
};
