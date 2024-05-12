import { GifsArrayType } from "../components";

export type ImgTypes = {
  id: string;
  title: string;
  images: { downsized_medium: { url: string } };
};

type GetGifsType = { category: string };

export const getGifs = async ({
  category,
}: GetGifsType): Promise<GifsArrayType[] | undefined> => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZEetvGVdwBuCH9wCT216tPHxiNR32BSL&q=${category}&limit=10`;
    const { data } = await fetch(url).then((resp) => resp.json());

    const gifs = data?.map((img: ImgTypes) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifs;
  } catch (error) {
    console.error(error);
  }
};
