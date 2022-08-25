// Template Pagination & Single Response

interface Paging {
  page: number;
  rowsPerPage: number;
  totalRows: number;
  totalPages: number;
}

interface ResponseEntity<T> {
  code: number;
  message: string;
  data: T
}

class SingleResponse<T> implements ResponseEntity<T> {
  code: number;
  message: string;
  data: T;
}

class PagedResponse<T> implements ResponseEntity<T> {
  code: number;
  message: string;
  data: T;
  paging: Paging
}
