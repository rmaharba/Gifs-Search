import { fireEvent, render, screen } from "@testing-library/react";

import { AddCategory } from "../../src/components";

const onAddCategoryMock = jest.fn();

describe("Test on <AddCategory />", () => {
  test("should change input value", () => {
    render(<AddCategory onAddCategory={onAddCategoryMock} />);
    const input = screen.getByRole<HTMLInputElement>("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });

  test("should call onNewCategory if the input has a value", () => {
    const inputValue = "Saitama";

    render(<AddCategory onAddCategory={onAddCategoryMock} />);
    const input = screen.getByRole<HTMLInputElement>("textbox");
    const form = screen.getByRole<HTMLInputElement>("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(onAddCategoryMock).toHaveBeenCalled();
    expect(onAddCategoryMock).toHaveBeenCalledTimes(1);
    expect(onAddCategoryMock).toHaveBeenCalledWith(inputValue);
  });

  test("should not be called when the input is empty", () => {
    onAddCategoryMock.mockClear();

    render(<AddCategory onAddCategory={onAddCategoryMock} />);
    const form = screen.getByRole<HTMLInputElement>("form");

    fireEvent.submit(form);

    expect(onAddCategoryMock).not.toHaveBeenCalled();
    expect(onAddCategoryMock).toHaveBeenCalledTimes(0);
  });
});
