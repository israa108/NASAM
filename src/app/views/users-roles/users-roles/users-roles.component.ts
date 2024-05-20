import { Component, OnInit } from "@angular/core";

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
@Component({
  selector: "app-users-roles",
  templateUrl: "./users-roles.component.html",
  styleUrls: ["./users-roles.component.scss"],
})
export class UsersRolesComponent implements OnInit {
  checked: boolean = false;

  constructor() {}
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
    {
      key: `1`,
      name: "Ansary’s Objects",
      children: [
        {
          key: `1-1`,
          name: "Car name 01",
          speed: "10 km/h",
          lastUpdate: "New York No. 2 Lake Park",
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

  ngOnInit(): void {
    this.listOfMapData.forEach((item) => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
  }
}
