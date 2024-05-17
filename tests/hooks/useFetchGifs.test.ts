import { renderHook, waitFor } from "@testing-library/react";

import { useFetchGifs } from "../../src/hooks";

describe("Test on useFetchGifs", () => {
  const category = "One Punch";
  test("should return initial state", () => {
    const {
      result: {
        current: { images, isLoading },
      },
    } = renderHook(() => useFetchGifs({ category }));

    expect(images?.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return an array of images an isLoading = false", async () => {
    const { result } = renderHook(() => useFetchGifs({ category }));

    await waitFor(() =>
      expect(result.current?.images?.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images?.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
