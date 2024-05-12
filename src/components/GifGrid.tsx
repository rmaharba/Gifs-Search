import { useFetchGifs } from "../hooks";

import { GifGridItem } from "./GifGridItem";
import { LoadingMessage } from "./LoadingMessage";

type GifGridTypes = { category: string };

export type GifsArrayType = {
  id: string;
  title: string;
  url: string;
};

export const GifGrid = ({ category }: GifGridTypes) => {
  const { isLoading, images } = useFetchGifs({ category });

  return (
    <>
      <LoadingMessage isLoading={isLoading} />
      <h3>{category}</h3>
      <div className="card-grid">
        {images?.map((image) => (
          <GifGridItem key={image?.id} {...image} />
        ))}
      </div>
    </>
  );
};
