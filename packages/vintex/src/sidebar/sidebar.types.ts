export interface SidebarItems {
  title: string;
  path?: string;
  children?: SidebarItems[];
}

export interface SideBarMenuProps {
  items: SidebarItems[];
}
