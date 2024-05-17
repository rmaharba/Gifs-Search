import { ChangeEvent, FormEvent, useState } from "react";

type AddCategoryProps = {
  onAddCategory: (value: string) => void;
};

export const AddCategory = ({ onAddCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setInputValue(target.value);

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValueFormated = inputValue.trim();
    if (inputValueFormated.length > 0) {
      onAddCategory(inputValueFormated);
      setInputValue("");
    }
  };

  return (
    <form aria-label="form" onSubmit={onSubmitForm}>
      <input
        type="text"
        value={inputValue}
        onChange={onChangeInput}
        placeholder="Buscar gifs"
      />
    </form>
  );
};
