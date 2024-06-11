import { useState } from "react";
import { IPagination } from "../interface/global.interface";

const usePagination = (): [
  IPagination,
  React.Dispatch<React.SetStateAction<IPagination>>
] => {
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    perPage: 1,
    searchTerm: "",
    total: 1,
    totalPages: 8,
    refreshTable: false,
  });

  return [pagination, setPagination];
};

export default usePagination;
