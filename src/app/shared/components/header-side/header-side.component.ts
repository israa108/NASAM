import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LayoutService } from "../../services/layout.service";

@Component({
  selector: "app-header-side",
  templateUrl: "./header-side.template.html",
})
export class HeaderSideComponent implements OnInit {
  @Input() notificPanel;
  value: string | undefined;
  isFullscreen: boolean = false;

  // public props
  @Input() navCollapsed: boolean;
  @Output() NavCollapse = new EventEmitter();
  @Output() NavCollapsedMob = new EventEmitter();
  windowWidth = window.innerWidth;

  public Themes;
  public layoutConf: any;
  constructor(
    // private themeService: ThemeService,
    private layout: LayoutService
  ) {}
  ngOnInit() {
    this.layoutConf = this.layout.layoutConf;
  }
  navCollapse() {
    this.NavCollapse.emit();
  }

  toggleNotific() {
    this.notificPanel.toggle();
  }
  toggleSidenav() {
    if (this.layoutConf.sidebarStyle === "closed") {
      return this.layout.publishLayoutChange({
        sidebarStyle: "full",
      });
    }
    this.layout.publishLayoutChange({
      sidebarStyle: "closed",
    });
  }

  toggleFullscreen() {
    // if (screenfull.enabled) {
    //   screenfull.toggle();
    //   this.isFullscreen = !this.isFullscreen;
    // }
    var elem: any = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  toggleCollapse() {
    // compact --> full
    if (this.layoutConf.sidebarStyle === "compact") {
      return this.layout.publishLayoutChange(
        {
          sidebarStyle: "full",
          sidebarCompactToggle: false,
        },
        { transitionClass: true }
      );
    }

    // * --> compact
    this.layout.publishLayoutChange(
      {
        sidebarStyle: "compact",
        sidebarCompactToggle: true,
      },
      { transitionClass: true }
    );
  }
}
