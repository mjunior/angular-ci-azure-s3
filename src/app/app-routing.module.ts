import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PeoplesListComponent } from "./peoples-list/peoples-list.component";

const routes: Routes = [
  { path: "peoples", component: PeoplesListComponent },
  {
    path: "",
    redirectTo: "peoples",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
