import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportsRoutingModule } from "./reports-routing.module";
import { ReportsComponent } from "./reports/reports.component";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { VehiclesReportComponent } from "./psges-reports/vehicles-report/vehicles-report.component";
import { MileageReportComponent } from "./psges-reports/mileage-report/mileage-report.component";
import { InputTextModule } from "primeng/inputtext";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { CardModule } from "primeng/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from "@angular/material/table";
import { TableModule } from "primeng/table";
import { FormsModule } from "@angular/forms";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { ButtonModule } from "primeng/button";
import { NzTableModule } from "ng-zorro-antd/table";
import { TagModule } from "primeng/tag";
@NgModule({
  declarations: [
    ReportsComponent,
    VehiclesReportComponent,
    MileageReportComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    NzBadgeModule,
    TagModule,
    InputTextModule,
    MatToolbarModule,
    MatCardModule,
    NzTableModule,
    MatSidenavModule,
    NzMenuModule,
    CardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    TableModule,
    FormsModule,
    OverlayPanelModule,
    ButtonModule,
  ],
})
export class ReportsModule {}
