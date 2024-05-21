import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "signup",
        component: SignupComponent,
        data: { title: "Signup" },
      },
      {
        path: "signin",
        component: SigninComponent,
        data: { title: "Signin" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsRoutingModule {}
