export interface NavItem {
  label: string;
  route?: string;
  iconName?: string;
  children?: NavItem[];
  id?: string;
}
