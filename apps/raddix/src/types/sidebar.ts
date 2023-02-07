export interface SidebarItems {
  title: string;
  route: {
    path: string;
    locale: string;
  };
}

export interface SidebarList {
  title: string;
  items: SidebarItems[];
}

export interface SideBar {
  list: SidebarList[];
}
