export interface TableProps {
  data: Record<string, any>[];
  titles?: Array<string | titleAdvanced>;
  currentPage?: number, 
  totalPages?: number, 
  onPageChange?: (page: number) => void
}

export type titleAdvanced = {
  text: string;
  value: string;
  options: Array<string>;
  onChange: (value: string) => void
}
