import { render, screen } from "@testing-library/react";

import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks";

jest.mock("../../src/hooks");

describe("Test on GifGrid", () => {
  const category = "One Punch";

  (useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
    images: [],
    isLoading: true,
  });

  test("should display loading initally", () => {
    render(<GifGrid category={category} />);

    expect(screen.getByText(category)).toBeTruthy();
    expect(screen.getByText("Cargando...")).toBeTruthy();
  });

  test("should show items when useFetchGifs is called", () => {
    const gifs = [
      { id: "abc", title: "Saitama", url: "https://example.com/image1.jpg" },
      {
        id: "123",
        title: "One Punch 2",
        url: "https://example.com/image2.jpg",
      },
    ];

    (useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    const img = screen.getAllByRole<HTMLImageElement>("img");
    const p = screen.getByText(gifs[1].title);

    expect(img?.length).toBe(2);
    expect(p).toBeTruthy();

    // screen.debug();
  });
});
