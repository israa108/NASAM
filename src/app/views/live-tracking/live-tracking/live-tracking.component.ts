import { Router } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
// import * as L from "leaflet";
import { MatAccordion } from "@angular/material/expansion";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Customer } from "./services/object";
import { ObjectService } from "./services/object.service";
export interface TreeNodeInterface {
  key: string;
  name: string;
  speed?: string;
  level?: number;
  expand?: boolean;
  lastUpdate?: string;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}
export interface PeriodicElement {
  ObjectName: string;
}

@Component({
  selector: "app-live-tracking",
  templateUrl: "./live-tracking.component.html",
  styleUrls: ["./live-tracking.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed,void", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class LiveTrackingComponent implements OnInit {
  value: string;
  map: any;
  ingredient!: string;
  checked: boolean = false;
  date = null;
  cardVisible: boolean = false;
  cardShow: boolean = false;
  ShowMap: boolean = false;
  ShowMeasuring: boolean = false;
  showObject: boolean = false;
  customers: Customer[];
  ShowGeofence: boolean = false;

  markerOptions: google.maps.MarkerOptions = {
    icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless.png",
  };

  spots: { id: number; lat: number; lng: number }[] = [
    { id: 1, lat: 21.5073488, lng: 39.1935546 },
  ];

  myLatLng = { lat: 48.829677, lng: 2.239609 }; // Map Options
  mapOptions: google.maps.MapOptions = {
    center: this.myLatLng,
    zoom: 10,
  };

  selectMarker(spot: { id: number; lat: number; lng: number }) {
    alert(`hey! the spot with ID ${spot.id} was seleted !`);
  }

  ngOnInit(): void {
    this.objectService.getCustomersMedium().then((data) => {
      this.customers = data;
    });
    this.listOfMapData.forEach((item) => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
  }

  listOfMapData: TreeNodeInterface[] = [
    {
      key: `1`,
      name: "Ansary’s Objects",
      children: [
        {
          key: `1-1`,
          name: "Car name 01",
          speed: "10 km/h",
          lastUpdate: "20/11/2023",
        },
      ],
    },
  ];

  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

  collapse(
    array: TreeNodeInterface[],
    data: TreeNodeInterface,
    $event: boolean
  ): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach((d) => {
          const target = array.find((a) => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({
            ...node.children[i],
            level: node.level! + 1,
            expand: false,
            parent: node,
          });
        }
      }
    }

    return array;
  }

  visitNode(
    node: TreeNodeInterface,
    hashMap: { [key: string]: boolean },
    array: TreeNodeInterface[]
  ): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

  toggleCard() {
    this.cardVisible = !this.cardVisible;
  }
  openCard() {
    this.cardShow = !this.cardShow;
  }
  openObject() {
    this.showObject = !this.showObject;
  }
  toggleMap() {
    this.ShowMap = !this.ShowMap;
  }
  toggleMeasuring() {
    this.ShowMeasuring = !this.ShowMeasuring;
  }
  toggleGeofence() {
    this.ShowGeofence = !this.ShowGeofence;
  }
  items = [
    { name: "Item 1", selected: false, expanded: false },
    { name: "Item 2", selected: false, expanded: false },
    { name: "Item 3", selected: false, expanded: false },
    // Add more items as needed
  ];

  toggleCheckbox(item: any) {
    item.selected = !item.selected;
    // Handle checkbox selection logic
  }

  toggleAccordion(item: any) {
    item.expanded = !item.expanded;
    // Handle accordion toggle logic
  }
  accordionItems = [
    { header: "Item 1", content: "Content for Item 1", checked: false },
    { header: "Item 2", content: "Content for Item 2", checked: false },
    { header: "Item 3", content: "Content for Item 3", checked: false },
  ];
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private router: Router, private objectService: ObjectService) {}

  getSeverity(status) {
    switch (status) {
      case "qualified":
        return "success";
    }
  }

  onChange(result: Date[]): void {
    console.log("onChange: ", result);
  }
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 21.5073488,
    lng: 39.1935546,
  };
  zoom = 14;

  // moveMap()
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  // move()
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  // public ngAfterViewInit(): void {
  //   this.loadMap();
  // }

  // private getCurrentPosition(): any {
  //   return new Observable((observer: Subscriber<any>) => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position: any) => {
  //         observer.next({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         });
  //         observer.complete();
  //       });
  //     } else {
  //       observer.error();
  //     }
  //   });
  // }

  // private loadMap(): void {
  //   this.map = L.map("map").setView([0, 0], 1);
  //   L.tileLayer(
  //     "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  //     {
  //       attribution:
  //         'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //       maxZoom: 18,
  //       id: "mapbox/streets-v11",
  //       tileSize: 512,
  //       zoomOffset: -1,
  //       accessToken: environment.mapbox.accessToken,
  //     }
  //   ).addTo(this.map);

  //   this.getCurrentPosition().subscribe((position: any) => {
  //     this.map.flyTo([position.latitude, position.longitude], 13);

  //     const icon = L.icon({
  //       iconUrl: "assets/images/logos/marker-icon.png",
  //       shadowUrl: "assets/images/logos/marker-shadow.png",
  //       popupAnchor: [13, 0],
  //     });

  //     const marker = L.marker([position.latitude, position.longitude], {
  //       icon,
  //     }).bindPopup("Angular Leaflet");
  //     marker.addTo(this.map);
  //   });
  // }

  expandIconPosition: "left" | "right" = "left";

  panels = [
    {
      active: true,
      name: "Car name 01(20)",
      disabled: false,
    },
    {
      active: true,
      name: "Car name 02(10)",
      disabled: false,
    },
  ];
}
