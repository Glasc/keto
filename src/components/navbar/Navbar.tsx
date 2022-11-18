import { useEffect, useState } from "react";
import { SiFacebook, SiUbereats, SiInstagram } from "react-icons/si/index.js";
import routes from "./routes";

type NavbarProps = {
  facebookUrl?: string;
  instagramUrl?: string;
  uberEatsUrl?: string;
};

export const Navbar = ({
  facebookUrl,
  instagramUrl,
  uberEatsUrl,
}: NavbarProps) => {
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
          <div className="flex items-center justify-center gap-4">
            <a href="/">
              <img
                className={`mx-auto w-16 py-2 sm:w-20`}
                src="/ketologo.webp"
                alt="Img"
              />
            </a>
            <ul className="hidden sm:flex flex-col gap-2 ">
              {facebookUrl && (
                <li>
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    href={facebookUrl}
                    aria-label="Visita nuestra pagina de Facebook"
                  >
                    <SiFacebook size={15} color="#1871E7" />
                  </a>
                </li>
              )}
              {uberEatsUrl && (
                <li>
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    href={uberEatsUrl}
                    aria-label="Haz tu pedido en uber eats"
                  >
                    <SiUbereats size={15} color="#06C167" />
                  </a>
                </li>
              )}
              {instagramUrl && (
                <li>
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    href={instagramUrl}
                    aria-label="Visitra nuestra pagina de Instagram"
                  >
                    <SiInstagram size={15} color="#AF36A7" />
                  </a>
                </li>
              )}
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
