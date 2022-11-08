import { RiArrowDownSLine } from "react-icons/ri/index.js";
import React, { useState } from "react";
import { Image, Picture } from "@astrojs/image/components";

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
    <section className="mt-10 pb-10 ">
      <div className="relative mx-auto max-w-[85rem] px-6 md:flex md:flex-row md:items-start md:gap-8">
        {/* mobile */}
        <section className="sticky top-0 z-50 my-6 flex justify-center bg-base-200 py-4 font-medium md:hidden">
          <ul className="menu menu-horizontal mx-auto">
            <li></li>
            <li
              tabIndex={0}
              className="rounded-full bg-secondary text-primary-content"
            >
              <div>
                <RiArrowDownSLine size={20} />
                Categoría:
                <span>{currentCategoryName || "Todos"}</span>
              </div>
              <ul className="rounded-box bg-base-100 p-2">
                <li
                  className={`${
                    !selectedCategory && "bg-secondary"
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
                        isSelected && "bg-secondary"
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

        <section className="sticky top-[1em] z-50 mr-4 hidden w-auto justify-center bg-base-100 font-medium shadow-md md:flex">
          <ul className="menu mx-auto rounded-md bg-base-100 shadow-sm ring-1 ring-slate-900/5">
            <li
              className={`${
                !selectedCategory ? "bg-secondary" : "bg-base-100"
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
                  className={`${
                    isSelected ? "bg-secondary" : "bg-base-100"
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

        {/* <div className="flex w-full flex-wrap justify-start gap-4 md:gap-6 "> */}
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] justify-end gap-4 md:gap-6">
          {categoriesToShow?.map((category) => {
            const categoryProducts = category.products;

            return categoryProducts?.map((product) => {
              return (
                <div
                  key={product._id}
                  className="card-compact card w-full rounded-md bg-base-100 shadow-md ring-1 ring-slate-900/5 "
                >
                  <figure className="border-none">
                    <img
                      className="w-full select-none"
                      src={`${product?.image}?w=400`}
                      alt="Shoes"
                    />
                    {/* <Image
                      format="webp"
                      width={50}
                      height={50}
                      alt="webos"
                      src="data:image/jpeg;base64,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"
                    /> */}
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
