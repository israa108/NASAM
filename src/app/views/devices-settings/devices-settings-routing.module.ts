import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DevicesSettingsComponent } from "./devices-settings/devices-settings.component";

const routes: Routes = [
  {
    path: "devicesettings",
    component: DevicesSettingsComponent,
    data: { title: "devicesettings", breadcrumb: "Device Settings" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesSettingsRoutingModule {}
