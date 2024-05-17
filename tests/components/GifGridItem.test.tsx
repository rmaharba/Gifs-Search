import { render, screen } from "@testing-library/react";

import { GifGridItem } from "../../src/components";

describe("Test on <GifGridItem/>", () => {
  const title = "Saitama";
  const url = "https://example.com/image.png";

  test("should do match with snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show URL and ALT indicated", () => {
    render(<GifGridItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole<HTMLImageElement>("img").src).toBe(url);
    // expect(screen.getByRole<HTMLImageElement>("img").alt).toBe(title);

    const { alt, src } = screen.getByRole<HTMLImageElement>("img");
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test("should show title on the component", () => {
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
