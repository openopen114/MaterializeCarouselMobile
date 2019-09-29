import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import * as M from "materialize-css";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("carousel") carousel: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
    M.Carousel.init(this.carousel.nativeElement, {});
  }

  next() {
    M.Carousel.getInstance(this.carousel.nativeElement).next();
  }

  prev() {
    M.Carousel.getInstance(this.carousel.nativeElement).prev();
  }

  /*
   * resize event
   *
   */
  onResize(event) {
    // init again as screen resice. ie let image fit whole screen;
    M.Carousel.init(this.carousel.nativeElement, {});
  }
}
