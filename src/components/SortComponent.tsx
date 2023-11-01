import React from "react";
import MyInput from "./UI/input/MyInput";
import {sortOptions} from "../types";

const SortComponent = ({
  filter,
  setFilter,
}: {
  filter: { sortByPrice: boolean; query: string };
  setFilter: React.Dispatch<React.SetStateAction<sortOptions>>;
}) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        type="text"
        value={filter.query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilter({ ...filter, query: e?.target?.value })}
        style={{ margin: "20px" }}
      />
      <label htmlFor="sortByPrice">
        <MyInput
          type="checkbox"
          value="price"
          checked={filter.sortByPrice}
          id="sortByPrice"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFilter({ ...filter, sortByPrice: e?.target?.checked });
          }}
        />
        Сортировка по цене
      </label>
    </div>
  );
};

export default SortComponent;
