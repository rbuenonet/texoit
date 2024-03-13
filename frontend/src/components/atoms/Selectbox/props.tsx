export interface SelectboxProps {
  options: Array<any>;
  value?: string;
  onSelect: (value: string) => void
}