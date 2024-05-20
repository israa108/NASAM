import { MatDividerModule } from "@angular/material/divider";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertsRoutingModule } from "./alerts-routing.module";
import { AlertsComponent } from "./alerts/alerts.component";
import { MatButtonModule } from "@angular/material/button";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { SplitButtonModule } from "primeng/splitbutton";
import { TableModule } from "primeng/table";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    AlertsRoutingModule,
    MatButtonModule,
    DialogModule,
    ButtonModule,
    TagModule,
    MatDividerModule,
    MatDialogModule,
    MatMenuModule,
    SplitButtonModule,
    TableModule,
    MatTableModule,
    MatCardModule,
    NzDatePickerModule,
  ],
})
export class AlertsModule {}
