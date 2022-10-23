import { MdDining } from "react-icons/md";

export default {
  name: "product",
  title: "Productos",
  type: "document",
  icon: MdDining,
  fieldsets: [
    { name: "singleSize", title: "Un tamaño" },
    { name: "multipleSizes", title: "Múltiples tamaños" },
  ],
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción",
      type: "string",
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
      fieldset: "singleSize",
    },
    {
      name: "priceSmall",
      title: "Precio tamaño chico",
      type: "number",
      fieldset: "multipleSizes",
    },
    {
      name: "priceMedium",
      title: "Precio tamaño mediano",
      type: "number",
      fieldset: "multipleSizes",
    },
    {
      name: "priceLarge",
      title: "Precio tamaño grande",
      type: "number",
      fieldset: "multipleSizes",
    },
  ],
};
