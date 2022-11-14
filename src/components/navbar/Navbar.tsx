import { useEffect, useState } from "react";
import { SiFacebook, SiUbereats, SiInstagram } from "react-icons/si/";
import routes from "./routes";

export const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const isScrolling = window?.scrollY > 0;
      setIsScrolling(isScrolling);
    }, 200);
  }, []);

  return (
    <nav
      className={`relative z-40 transition duration-300 ease-in-out ${
        isScrolling && "md:ring-1 md:ring-slate-900/5"
      }`}
    >
      <div className="container navbar flex justify-between py-1">
        <div className="grid w-full grid-cols-3 sm:block sm:w-auto">
          {/* <div></div> */}
          <DropDown />
          <div className="flex gap-4 items-center">
            <img
              className={`mx-auto w-12 py-2 sm:w-16`}
              src="/ketologo.webp"
              alt="Img"
            />
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="cursor-pointer"
                  href="https://www.ubereats.com/mx/store/keto-bakery-%26-coffee/TkQuBhmqXfeWlBszmLDVnA?utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
                >
                  <SiFacebook size={15} color="#1871E7" />
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  href="https://www.ubereats.com/mx/store/keto-bakery-%26-coffee/TkQuBhmqXfeWlBszmLDVnA?utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
                >
                  <SiUbereats size={15} color="#06C167" />
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  href="https://www.ubereats.com/mx/store/keto-bakery-%26-coffee/TkQuBhmqXfeWlBszmLDVnA?utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
                >
                  <SiInstagram size={15} color="#AF36A7" />
                </a>
              </li>
            </ul>
          </div>
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
          className="md:text-md md:text-md flex text-neutral-content sm:block"
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
