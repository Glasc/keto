import { RiArrowDownSLine } from "react-icons/ri/index.js";
import { useState } from "react";

export type Category = {
  _id: string;
  title: string;
  description: string;
  products: Product[];
  slug: {
    current: string;
  };
};

export type Product = {
  _id: string;
  _type: string;
  price: number;
  priceSmall: number;
  priceMedium: number;
  priceLarge: number;
  title: string;
  description: string;
  image: string | null;
};

const useCategories = (categories: Category[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoriesWithFilter = categories.filter(
    (category) => category._id === selectedCategory
  );

  const categoriesToShow = selectedCategory ? categoriesWithFilter : categories;

  const currentCategoryName = categories.find(
    (category) => category._id === selectedCategory
  )?.title;

  const handleCategoryClick = (_id: Category["_id"] | null) => {
    setSelectedCategory(_id);
  };

  return {
    categoriesToShow,
    currentCategoryName,
    selectedCategory,
    handleCategoryClick,
  };
};

interface CategoriesProps {
  categories: Category[];
}

export const Categories = ({ categories }: CategoriesProps) => {
  const {
    categoriesToShow,
    currentCategoryName,
    selectedCategory,
    handleCategoryClick,
  } = useCategories(categories);

  if (!categories) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="pt-10 pb-10">
      <div className="relative mx-auto max-w-[85rem] px-6 md:flex md:flex-row md:items-start md:gap-8">
        {/* mobile */}
        <section className="sticky top-2 z-50 flex justify-center pb-6 font-medium md:hidden">
          <ul className="menu menu-horizontal mx-auto">
            <li></li>
            <li
              tabIndex={0}
              className="rounded-full bg-primary text-primary-content"
            >
              <div>
                <RiArrowDownSLine size={20} />
                Categoría:
                <span className="block">{currentCategoryName || "Todos"}</span>
              </div>
              <ul className="rounded-box bg-base-100 p-2">
                <li
                  className={`${
                    !selectedCategory && "bg-primary"
                  } text-primary-content`}
                >
                  <a href="#categories">
                    <button
                      className="w-full"
                      onClick={() => handleCategoryClick(null)}
                    >
                      Todos
                    </button>
                  </a>
                </li>
                {categories?.map((category) => {
                  let isSelected = category._id === selectedCategory;
                  return (
                    <li
                      className={`${
                        isSelected && "bg-primary"
                      } m-0 p-0 text-primary-content`}
                      key={category._id}
                    >
                      <a href="#categories">
                        <button
                          className="w-full text-center"
                          onClick={() => handleCategoryClick(category._id)}
                        >
                          {category.title}
                        </button>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li></li>
          </ul>
        </section>

        <section className="sticky top-[1em] z-50 mr-4 hidden w-auto justify-center font-medium shadow md:flex">
          <ul className="menu mx-auto overflow-hidden rounded-md shadow-sm ring-1 ring-slate-900/5 ">
            <li
              className={`${
                !selectedCategory ? "bg-primary" : "bg-base-100"
              } text-primary-content`}
            >
              {/* <a className="no-underline" href="#"> */}
              <a
                className="mx-auto w-full justify-center rounded-none hover:bg-primary/40"
                href="#categories"
                onClick={() => handleCategoryClick(null)}
              >
                Todos
              </a>
              {/* </a> */}
            </li>
            {categories?.map((category) => {
              let isSelected = category._id === selectedCategory;
              return (
                <li
                  className={`${
                    isSelected ? "bg-primary" : "bg-base-100"
                  } border-none text-primary-content`}
                  key={category._id}
                >
                  {/* <a href="#"> */}
                  <a
                    className="mx-auto block w-full justify-center rounded-none border-none py-4 text-center hover:bg-primary/40"
                    href="#categories"
                    onClick={() => handleCategoryClick(category._id)}
                  >
                    {category.title}
                  </a>
                  {/* </a> */}
                </li>
              );
            })}
          </ul>
        </section>

        {/* <div className="flex w-full flex-wrap justify-start gap-4 md:gap-6 "> */}
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] justify-end gap-4 md:gap-6">
          {categoriesToShow?.map((category) => {
            const categoryProducts = category.products;

            return categoryProducts?.map((product) => {
              return (
                <div
                  key={product._id}
                  className="card-compact card w-full rounded-md bg-base-100 shadow ring-1 ring-slate-900/5 "
                >
                  <figure className="border-none">
                    {product.image && (
                      <img
                        className="w-full select-none"
                        src={`${product?.image}?w=400&fm=webp`}
                        alt={product?.description}
                      />
                    )}
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-xl text-neutral-content">
                      {product.title}
                    </h2>
                    <p className="text-sm">{product.description}</p>
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div>
    </section>
  );
};
