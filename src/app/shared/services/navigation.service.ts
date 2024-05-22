import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: "link" | "dropDown" | "icon" | "separator" | "extLink";
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  tooltip?: string;
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
}

// interface IBadge {
//   color: string; // primary/accent/warn/hex color codes(#fff000)
//   value: string; // Display text
// }

@Injectable()
export class NavigationService {
  iconMenu: IMenuItem[] = [
    {
      name: "DASHBOARD",
      type: "separator",
    },
    {
      name: "Overview",
      state: "/overview",
      type: "link",
      icon: "home",
    },
    {
      name: "Live Tracking",
      state: "/livetracking",
      type: "link",
      icon: "gps_fixed",
    },
    {
      name: "Fleet Management",
      type: "dropDown",
      icon: "local_shipping",
      sub: [
        { name: "Vehicles", state: "fleet-management/vehicles" },
        { name: "Drivers", state: "fleet-management/drivers" },
        { name: "Driver journal", state: "fleet-management/driver-journal" },
        { name: "Eco driving", state: "fleet-management/eco-driving" },
        { name: "Maintenance", state: "fleet-management/maintenance" },
      ],
    },
    {
      name: "Reports",
      state: "/reports",
      type: "link",
      icon: "library_books",
    },
    {
      name: "Users & Roles",
      state: "/usersroles",
      type: "link",
      icon: "people_outline",
    },
    {
      name: "General Management",
      state: "/generalmanagement",
      type: "link",
      icon: "storage",
    },
    {
      name: "Additional",
      type: "separator",
    },
    {
      name: "Alerts",
      state: "alerts/alerts",
      type: "link",
      icon: "notifications_none",
    },
    {
      name: "Device activation",
      state: "/activation",
      type: "link",
      icon: "smartphone",
    },
    {
      name: "Devices and settings",
      state: "/devicesettings",
      type: "link",
      icon: "settings",
    },
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = "Frequently Accessed";
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
  constructor() {}
}
