import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { APP_ROUTES } from "./app.routes";
import { MainComponent } from './main/main.component';
import { ByeComponent } from './bye/bye.component';

@NgModule({
  imports: [BrowserModule, FormsModule, APP_ROUTES],
  declarations: [AppComponent, HelloComponent, MainComponent, ByeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
