import {
  RiHome2Line,
  RiInformationLine,
  RiFilePaper2Line,
  RiMailSendLine,
} from "react-icons/ri/index.js";

const routes = [
  {
    href: "/",
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
    href: "mailto: lanutris@hotmail.com",
    title: "Contacto",
    icon: RiMailSendLine,
  },
];

export default routes;
