import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// SERVICES
import { ThemeService } from "./services/theme.service";
import { NavigationService } from "./services/navigation.service";
import { RoutePartsService } from "./services/route-parts.service";

import { SharedComponentsModule } from "./components/shared-components.module";
import { SharedDirectivesModule } from "./directives/shared-directives.module";
import { AppLoaderService } from "./services/app-loader/app-loader.service";

@NgModule({
  imports: [CommonModule, SharedComponentsModule, SharedDirectivesModule],
  providers: [
    ThemeService,
    NavigationService,
    RoutePartsService,
    AppLoaderService,
  ],
  exports: [SharedComponentsModule, SharedDirectivesModule],
})
export class SharedModule {}
