import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from "../shared-material.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedDirectivesModule } from "../directives/shared-directives.module";

// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
import { HeaderSideComponent } from "./header-side/header-side.component";
import { SidebarSideComponent } from "./sidebar-side/sidebar-side.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";

// ALWAYS REQUIRED
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

const components = [
  SidenavComponent,
  NotificationsComponent,
  SidebarSideComponent,
  HeaderSideComponent,
  AdminLayoutComponent,
  BreadcrumbComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    SharedDirectivesModule,
    SharedMaterialModule,
  ],
  declarations: components,
  exports: components,
})
export class SharedComponentsModule {}
