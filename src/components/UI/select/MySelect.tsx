import React, { ChangeEvent } from "react";

const MySelect = ({
  options,
  defaultValue,
  value,
  onChange,
}: {
  options: { value: number; name: string }[];
  defaultValue: string;
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <select
      value={value}
      onChange={(event: ChangeEvent<HTMLSelectElement>) =>
        onChange(+event.target.value)
      }
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
