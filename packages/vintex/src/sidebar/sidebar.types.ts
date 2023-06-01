interface SidebarRoute {
  path: string;
  locale: string;
}

export interface SidebarItems {
  title: string;
  route: SidebarRoute;
}

export interface SidebarList {
  title: string;
  route: SidebarRoute;
  items: SidebarItems[];
}

export interface SideBarMenuProps {
  menu: SidebarList[];
  currentRoute: string;
}
