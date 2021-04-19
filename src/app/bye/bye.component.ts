import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-bye",
  templateUrl: "./bye.component.html",
  styleUrls: ["./bye.component.css"]
})
export class ByeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToHello() {
    this.router.navigate(["/hello"]);
  }
}
