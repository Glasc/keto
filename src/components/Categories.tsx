import { RiArrowDownSLine } from "react-icons/ri/index.js";
import React, { useState } from "react";

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
};

export const Categories = ({ categories }: { categories: Category[] }) => {
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

  if (!categories) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="mt-10 pb-10">
      <div className="container relative md:flex md:flex-row md:items-start md:gap-8">
        {/* mobile */}
        <section className="sticky top-0 z-50 my-6 flex justify-center bg-base-200 py-4 font-medium md:hidden">
          <ul className="menu menu-horizontal mx-auto">
            <li></li>
            <li
              tabIndex={0}
              className="rounded-full bg-primary text-primary-content"
            >
              <div>
                <RiArrowDownSLine size={20} />
                Categoría:
                <span>{currentCategoryName || "Todos"}</span>
              </div>
              <ul className="rounded-box bg-base-100 p-2">
                <li
                  className={`${
                    !selectedCategory && "bg-primary"
                  } text-primary-content`}
                >
                  <button
                    className="w-full"
                    onClick={() => handleCategoryClick(null)}
                  >
                    <a>Todos</a>
                  </button>
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
                      <a className="">
                        <button
                          className="w-full text-left"
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

        <section className="sticky top-[1em] z-50 hidden w-auto justify-center bg-base-100 font-medium md:flex mr-4">
          <ul className="menu mx-auto rounded-md bg-base-100 shadow-sm ring-1 ring-slate-900/5">
            <li
              className={`bg-base-100 ${
                !selectedCategory && "bg-primary"
              } text-primary-content`}
            >
              {/* <a className="no-underline" href="#"> */}
              <button
                className="mx-auto w-full justify-center"
                onClick={() => handleCategoryClick(null)}
              >
                Todos
              </button>
              {/* </a> */}
            </li>
            {categories?.map((category) => {
              let isSelected = category._id === selectedCategory;
              return (
                <li
                  className={`bg-base-100 ${
                    isSelected && "bg-primary"
                  } text-primary-content`}
                  key={category._id}
                >
                  {/* <a href="#"> */}
                  <button
                    className="mx-auto w-full justify-center"
                    onClick={() => handleCategoryClick(category._id)}
                  >
                    {category.title}
                  </button>
                  {/* </a> */}
                </li>
              );
            })}
          </ul>
        </section>

        <div className="flex w-full flex-wrap items-center justify-start gap-4 md:gap-6 ">
          {categoriesToShow?.map((category) => {
            const categoryProducts = category.products;

            return categoryProducts.map((product) => {
              return (
                <div
                  key={product._id}
                  className="card w-56 rounded-md bg-base-100 shadow ring-1 ring-slate-900/5 md:w-72"
                >
                  <figure className="border-none">
                    <img className="select-none" src="https://placeimg.com/400/225/arch" alt="Shoes" />
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
