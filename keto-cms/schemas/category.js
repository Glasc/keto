import { MdCollectionsBookmark } from "react-icons/md";

export default {
  name: "category",
  title: "Categorías",
  type: "document",
  icon: MdCollectionsBookmark,
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
    },
    {
      name: "products",
      title: "Productos",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
  ],
};
