export interface SidebarItems {
  title: string;
  route: string;
}

export interface SidebarList {
  title: string;
  route: string;
  items: SidebarItems[];
}

export interface SideBarMenuProps {
  menu: SidebarList[];
  // currentRoute: string;
}
