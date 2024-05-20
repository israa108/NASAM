import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// SERVICES
import { ThemeService } from "./services/theme.service";
import { NavigationService } from "./services/navigation.service";
import { RoutePartsService } from "./services/route-parts.service";

import { SharedComponentsModule } from "./components/shared-components.module";
import { SharedDirectivesModule } from "./directives/shared-directives.module";

@NgModule({
  imports: [CommonModule, SharedComponentsModule, SharedDirectivesModule],
  providers: [ThemeService, NavigationService, RoutePartsService],
  exports: [SharedComponentsModule, SharedDirectivesModule],
})
export class SharedModule {}
