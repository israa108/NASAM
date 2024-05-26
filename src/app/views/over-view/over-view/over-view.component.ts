import { Component, OnInit } from "@angular/core";
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: "assets/images/profile/user-1.jpg",
    uname: "Sunil Joshi",
    position: "Web Designer",
    productName: "Elite Admin",
    budget: 3.9,
    priority: "low",
  },
  {
    id: 2,
    imagePath: "assets/images/profile/user-2.jpg",
    uname: "Andrew McDownland",
    position: "Project Manager",
    productName: "Real Homes Theme",
    budget: 24.5,
    priority: "medium",
  },
  {
    id: 3,
    imagePath: "assets/images/profile/user-3.jpg",
    uname: "Christopher Jamil",
    position: "Project Manager",
    productName: "MedicalPro Theme",
    budget: 12.8,
    priority: "high",
  },
  {
    id: 4,
    imagePath: "assets/images/profile/user-4.jpg",
    uname: "Nirav Joshi",
    position: "Frontend Engineer",
    productName: "Hosting Press HTML",
    budget: 2.4,
    priority: "critical",
  },
];

@Component({
  selector: "app-over-view",
  templateUrl: "./over-view.component.html",
  styleUrls: ["./over-view.component.scss"],
})
export class OverViewComponent implements OnInit {
  data: any;
  data2: any;
  date = null;
  date1: Date;

  options: any;
  displayedColumns: string[] = ["assigned", "name", "priority", "budget"];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    // chart 1
    this.data = {
      labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"],
      datasets: [
        {
          label: "Fuel Consumption",
          // backgroundColor: documentStyle.getPropertyValue("--green-600"),
          backgroundColor: "#3B82F6",
          borderColor: "#3B82F6",
          data: [75, 50, 45, 50, 50, 45, 40],
        },
        {
          label: "Average Mileage",
          backgroundColor: "#a424b4",
          borderColor: "#a424b4",
          data: [10, 12, 18, 20, 18, 21, 24],
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 200,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    // chart 2
    this.data2 = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Vehicles In Use",
          // backgroundColor: documentStyle.getPropertyValue("--green-600"),
          backgroundColor: "#a424b4",
          borderColor: "#a424b4",

          data: [20, 49, 30, 24, 28, 10, 48, 10, 26, 26, 48, 10],
        },
        {
          label: "Vehicles In Maintenance",
          backgroundColor: "#10B981",
          borderColor: "#10B981",

          data: [20, 26, 26, 24, 26, 10, 26, 10, 26, 26, 26, 10],
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 200,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  onChange(result: Date[]): void {
    console.log("onChange: ", result);
  }
}
