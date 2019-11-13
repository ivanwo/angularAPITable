import { Component, OnInit } from "@angular/core";
import { ListService } from "../services/list.service";

@Component({
  selector: "app-list-display",
  templateUrl: "./list-display.component.html",
  styleUrls: ["./list-display.component.css"]
})
export class ListDisplayComponent implements OnInit {
  constructor(private listService: ListService) {}

  content: any;

  ngOnInit() {
    this.content = this.listService
      .getListContent()
      .subscribe(data => (this.content = data));
  }
}
