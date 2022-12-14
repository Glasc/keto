import { RiArrowDownSLine } from "react-icons/ri/index.js";
import { useEffect, useState } from "react";

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
  prices: string[];
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

  const [toggleNavbarMenu, setToggleNavbarMenu] = useState(false);

  if (!categories) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="xd pt-10 pb-10">
      <div className="relative mx-auto max-w-[90rem] px-2 sm:px-6 md:flex md:flex-row md:items-start md:gap-8">
        {/* mobile */}
        <section className="sticky top-2 z-50 flex justify-center pb-6 font-medium md:hidden">
          <ul className="menu menu-horizontal mx-auto w-full">
            <li
              tabIndex={0}
              className="rounded-full w-full sm:w-auto mx-auto bg-primary text-sm text-primary-content flex justify-center"
            >
              <div className="text-center w-full sm:w-auto justify-center text-sm md:text-base" onClick={() => setToggleNavbarMenu(prev => !prev  )}>
                <RiArrowDownSLine size={20} />
                Categor??a:
                <span className="block">{currentCategoryName || "Todos"}</span>
              </div>

              <ul
                className={`rounded-box bg-base-100 p-2 text-sm md:text-base ${
                  toggleNavbarMenu ? "flex" : "hidden"
                }`}
              >
                <li
                  className={`${
                    !selectedCategory && "bg-primary"
                  } text-primary-content`}
                >
                  <button
                    onClick={() => {
                      document?.getElementById("categories")?.scrollIntoView();
                      setToggleNavbarMenu(false);
                      handleCategoryClick(null);
                    }}
                  >
                    <div className="w-full text-sm">Todos</div>
                  </button>
                </li>
                {categories?.map((category) => {
                  let isSelected = category?._id === selectedCategory;
                  return (
                    <li
                      className={`${
                        isSelected && "bg-primary"
                      } m-0 p-0 text-primary-content`}
                      key={category._id}
                    >
                      <button
                        onClick={() => {
                          document
                            ?.getElementById("categories")
                            ?.scrollIntoView();

                          setToggleNavbarMenu(false);
                          handleCategoryClick(category._id);
                        }}
                      >
                        <div className="w-full text-center text-sm">
                          {category.title}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </section>

        <section className="sticky top-[1em] z-50 mr-4 hidden w-auto justify-center font-medium shadow-sm md:flex">
          <ul className="menu mx-auto text-sm overflow-hidden rounded-md shadow-sm ring-1 ring-slate-900/5 ">
            <li
              className={`${
                !selectedCategory ? "bg-primary" : "bg-base-100"
              } text-primary-content`}
            >
              {/* <a className="no-underline" href="#"> */}
              <button
                className="mx-auto w-full justify-center rounded-none hover:bg-primary/40"
                onClick={() => {
                  handleCategoryClick(null);
                  document?.getElementById("categories")?.scrollIntoView();
                }}
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
                    isSelected ? "bg-primary" : "bg-base-100"
                  } border-none text-primary-content`}
                  key={category._id}
                >
                  {/* <a href="#"> */}
                  <button
                    className="mx-auto block w-full justify-center rounded-none border-none py-4 text-center hover:bg-primary/40"
                    onClick={() => {
                      handleCategoryClick(category._id);
                      document?.getElementById("categories")?.scrollIntoView();
                    }}
                  >
                    {category.title}
                  </button>
                  {/* </a> */}
                </li>
              );
            })}
          </ul>
        </section>

        {/* TODO: cambiar items-start */}
        <div
          className={`grid w-full grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] items-start justify-end gap-4 md:gap-6`}
          onClick={e => setToggleNavbarMenu(false)}
        >
          {categoriesToShow?.map((category) => {
            const categoryProducts = category.products;

            return categoryProducts?.map((product) => {
              return (
                <div
                  key={product._id}
                  className={`card-compact card ${
                    categoryProducts.length > 1
                      ? "w-full"
                      : "mx-auto sm:w-[250px] md:mx-0"
                  } new-box rounded-md bg-base-100 shadow ring-1 ring-slate-900/5`}
                >
                  <figure className="border-none">
                    {product?.image && (
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
                    <div className="mt-3 text-neutral-content/80 empty:mt-0">
                      {product?.prices?.length > 0 &&
                        product.prices.map((price, idx) => {
                          if (!price) return;
                          return (
                            <p className="text-xs" key={idx}>
                              {price}
                            </p>
                          );
                        })}
                    </div>
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
