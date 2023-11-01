export const getTotalPages = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
};

export const getPages = (totalPages: number) => {
  const pages: number[] = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }
  return pages;
};
