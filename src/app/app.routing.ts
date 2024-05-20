import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";

export const rootRouterConfig: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "overview",
        loadChildren: () =>
          import("./views/over-view/over-view.module").then(
            (m) => m.OverViewModule
          ),
        // data: { title: "overview", breadcrumb: "Dashboard" },
      },
      {
        path: "livetracking",
        loadChildren: () =>
          import("./views/live-tracking/live-tracking.module").then(
            (m) => m.LiveTrackingModule
          ),
        // data: { title: "livetracking", breadcrumb: "Dashboard" },
      },
      {
        path: "fleet-management",
        loadChildren: () =>
          import("./views/fleet-management/fleet-management.module").then(
            (m) => m.FleetManagementModule
          ),
        data: { title: "fleet-management", breadcrumb: "Fleet Manangement" },
      },
      {
        path: "reports",
        loadChildren: () =>
          import("./views/reports/reports.module").then((m) => m.ReportsModule),
        // data: { title: "reports", breadcrumb: "Dashboard" },
      },
      {
        path: "usersroles",
        loadChildren: () =>
          import("./views/users-roles/users-roles.module").then(
            (m) => m.UsersRolesModule
          ),
        data: { title: "usersroles", breadcrumb: "Dashboard" },
      },
      {
        path: "generalmanagement",
        loadChildren: () =>
          import("./views/general-management/general-management.module").then(
            (m) => m.GeneralManagementModule
          ),
        data: { title: "generalmanagement", breadcrumb: "Dashboard" },
      },
      {
        path: "alerts",
        loadChildren: () =>
          import("./views/alerts/alerts.module").then((m) => m.AlertsModule),
        data: { title: "alerts", breadcrumb: "Additional" },
      },
      {
        path: "activation",
        loadChildren: () =>
          import("./views/device-activation/device-activation.module").then(
            (m) => m.DeviceActivationModule
          ),
        data: { title: "activation", breadcrumb: "Additional" },
      },
      {
        path: "devicesettings",
        loadChildren: () =>
          import("./views/devices-settings/devices-settings.module").then(
            (m) => m.DevicesSettingsModule
          ),
        data: { title: "devicesettings", breadcrumb: "Additional" },
      },
    ],
  },
];
