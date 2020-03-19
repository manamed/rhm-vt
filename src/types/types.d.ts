export interface DropdownData {
  text: string;
  path: string;
  sub?: DropdownData[];
  external?: boolean;
}
