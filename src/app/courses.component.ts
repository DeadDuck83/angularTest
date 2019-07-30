import { CoursesService } from "./courses.service";
import { Component } from "@angular/core";

@Component({
  selector: "courses", //<courses>
  template: `
    <h2>{{ title }}</h2>
    <h2 [textContent]="title">dfdf</h2>
    <img src="{{ imageUrl }} " alt="" />
  `
})
export class CoursesComponent {
  title = "List of courses";
  imageUrl = "http://lorempixel.com/400/200";
}
