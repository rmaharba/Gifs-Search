import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Rick and Morty", "F1"]);

  const onAddCategory = (value: string) => {
    if (categories?.includes(value)) return;
    setCategories([value, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories?.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </>
  );
};
