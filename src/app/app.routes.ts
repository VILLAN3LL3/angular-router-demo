import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppModule } from "./app.module";
import { ByeComponent } from "./bye/bye.component";
import { HelloComponent } from "./hello.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        redirectTo: "hello",
        pathMatch: "full"
      },
      {
        path: "hello",
        component: HelloComponent
      },
      {
        path: "bye",
        component: ByeComponent
      }
    ]
  }
];

export const APP_ROUTES: ModuleWithProviders<AppModule> = RouterModule.forRoot(
  routes
);
