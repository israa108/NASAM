import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DevicesSettingsRoutingModule } from "./devices-settings-routing.module";
import { DevicesSettingsComponent } from "./devices-settings/devices-settings.component";
import { MatButtonModule } from "@angular/material/button";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzUploadModule } from "ng-zorro-antd/upload";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzInputModule } from "ng-zorro-antd/input";
import { FormsModule } from "@angular/forms";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { TagModule } from "primeng/tag";

@NgModule({
  declarations: [DevicesSettingsComponent],
  imports: [
    CommonModule,
    DevicesSettingsRoutingModule,
    MatButtonModule,
    NzTabsModule,
    NzUploadModule,
    NzIconModule,
    NzAvatarModule,
    NzInputModule,
    FormsModule,
    NzSelectModule,
    NzButtonModule,
    NzTableModule,
    NzTagModule,
    NzBreadCrumbModule,
    NzCheckboxModule,
    TagModule,
  ],
})
export class DevicesSettingsModule {}
