import {useMemo} from "react";
import {getPages} from "../utils/pages";

export const usePages = (totalPages: number): number[] => {
  return useMemo(() => {
    return getPages(totalPages);
  }, [totalPages]);
};
