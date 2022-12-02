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
    href: "/blog/1",
    title: "Blog",
    icon: RiFilePaper2Line,
  },
  {
    href: "mailto: biosante.nut@gmail.com",
    title: "Contacto",
    icon: RiMailSendLine,
  },
];

export default routes;
