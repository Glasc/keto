import {
  RiMenuLine,
  RiCloseLine,
  RiHome2Line,
  RiInformationLine,
  RiFilePaper2Line,
  RiContactsLine,
} from "react-icons/ri/index.js";

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

export default routes