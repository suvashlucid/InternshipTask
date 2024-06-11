export interface fetchtype {
  id: string;
  email: string;
  password: string;
  role: string;
  allowedFeature: string[];
  username: string;
  details: {
    firstName: {
      en: string;
      ne: string;
    };
    lastName: {
      en: string;
      ne: string;
    };
    phoneNumber: string;
  };
}
export interface IPagination {
  currentPage: number;
  perPage: number;
  searchTerm: string;
  total: number;
  totalPages: number;
  refreshTable: boolean;
}
