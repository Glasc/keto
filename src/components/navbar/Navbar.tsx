import styles from "./Navbar.module.scss";
import {
  RiMenuLine,
  RiCloseLine,
  RiHome2Line,
  RiInformationLine,
  RiFilePaper2Line,
  RiContactsLine,
} from "react-icons/ri";
import { useState } from "react";

const routes = [
  {
    href: "/inicio",
    title: "Inicio",
    icon: RiHome2Line,
  },
  {
    href: "/sobre-nosotros",
    title: "Sobre nosotros",
    icon: RiInformationLine,
  },
  {
    href: "/blog",
    title: "Blog",
    icon: RiFilePaper2Line,
  },
  {
    href: "/contacto",
    title: "Contacto",
    icon: RiContactsLine,
  },
];

export const Navbar = () => {
  const [areLinksShowing, setAreLinksShowing] = useState(false);

  const handleToggleClick = () => {
    setAreLinksShowing((prev) => !prev);
  };

  return (
    <nav>
      <div className={styles.container}>
        <img className={styles.logo} src="/assets/logo.png" alt="logo" />
        <Links
          areLinksShowing={areLinksShowing}
          setAreLinksShowing={setAreLinksShowing}
        />
        <button
          className={styles.toggleNavbarButton}
          onClick={handleToggleClick}
        >
          {areLinksShowing ? (
            <RiCloseLine size={30} />
          ) : (
            <RiMenuLine size={28} />
          )}
        </button>
      </div>
    </nav>
  );
};

interface LinksProps {
  areLinksShowing: boolean;
  setAreLinksShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

const Links = ({ areLinksShowing, setAreLinksShowing }: LinksProps) => {
  const active = areLinksShowing ? styles.active : "";

  return (
    <ul className={`${styles.links} ${active}`}>
      {routes.map((route, idx) => {
        return (
          <li
            key={idx}
            className={styles.link}
            // onClick={() => setAreLinksShowing(false)}
          >
            <a href={route.href}>
              <div className={styles.linkIcon}>
                <route.icon size={28} color={"#172b4d"} />
              </div>
              <p>{route.title}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
