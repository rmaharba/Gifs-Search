import { useEffect, useState } from "react";

import { getGifs } from "../helpers";
import { GifsArrayType } from "../components";

export const useFetchGifs = ({ category }: { category: string }) => {
  const [gifs, setGifs] = useState<Array<GifsArrayType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getGifsData = async () => {
    setIsLoading(true);
    try {
      const gifsResponse = await getGifs({ category });
      setGifs([...(gifsResponse || [])]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGifsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { images: gifs, isLoading };
};
