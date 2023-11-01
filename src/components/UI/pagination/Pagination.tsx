import React from "react";
import { usePages } from "../../../hooks/usePages";
import MyButton from "../button/MyButton";

const Pagination = ({
  totalPages,
  page,
  changePage,
}: {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}) => {
  const pagesArray: number[] = usePages(totalPages);

  return (
    <div className="pagination_wrapper">
      {pagesArray.map((p: number) => {
        return (
          <MyButton
            className={page === p ? "page active_page" : "page"}
            key={p}
            onClick={() => changePage(p)}
          >
            {p}
          </MyButton>
        );
      })}
    </div>
  );
};

export default Pagination;
