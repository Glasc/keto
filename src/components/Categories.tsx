import { RiArrowDownSLine } from "react-icons/ri";
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
    <section className="pb-10">
      <div className="container relative">
        <section className="sticky top-0 z-10 my-6 hidden justify-center bg-base-100 py-4 font-medium md:flex">
          <ul className="menu rounded-box menu-horizontal mx-auto bg-base-100">
            <li
              className={`bg-base-300 ${
                !selectedCategory && "bg-primary"
              } text-primary-content`}
            >
              <button onClick={() => handleCategoryClick(null)}>
                <a href="#categories">Todos</a>
              </button>
            </li>
            {categories?.map((category) => {
              let isSelected = category._id === selectedCategory;
              return (
                <li
                  className={`bg-base-300 ${
                    isSelected && "bg-primary"
                  } text-primary-content`}
                  key={category._id}
                >
                  <button onClick={() => handleCategoryClick(category._id)}>
                    <a href="#categories">{category.title}</a>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="sticky top-0 z-10 my-6 flex justify-center bg-base-100 py-4 font-medium md:hidden">
          <ul className="menu menu-horizontal mx-auto bg-base-100">
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
                    <a href="#categories">Todos</a>
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
                      <a className="" href="#categories">
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

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categoriesToShow?.map((category) => {
            const categoryProducts = category.products;

            return categoryProducts.map((product) => {
              return (
                <div
                  key={product._id}
                  className="card w-64 border border-gray-200 bg-base-200 shadow-sm md:w-80"
                >
                  <figure className="border-none">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-xl text-neutral-content">
                      {product.title}
                    </h2>
                    <p>{product.description}</p>
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
