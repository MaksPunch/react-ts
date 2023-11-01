import { useState } from "react";

type restArgs = string[]

export const useFetching = (
  callback: (...args: restArgs) => void,
): [(...args: restArgs) => void, boolean, string] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetching = async (...args: restArgs) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      if (typeof e === "string") {
        setError(e.toUpperCase());
      } else if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
