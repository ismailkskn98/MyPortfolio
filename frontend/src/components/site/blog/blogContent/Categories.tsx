import React from "react";

type Categories = {
  _id: string | number;
  name: string;
};

type CategoriesProps = {
  categories: Categories[];
};

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <article className="flex items-center gap-6">
      {categories?.map((category: Categories) => (
        <div key={category._id} className="flex items-center justify-center flex-nowrap bg-Grey rounded-2xl px-2 py-1 Label-u-l h-min w-min">
          <p className="whitespace-nowrap">{category.name}</p>
        </div>
      ))}
    </article>
  );
};

export default Categories;
