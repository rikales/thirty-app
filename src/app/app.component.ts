import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: NgbModal) { }
  title = 'thirty-app';
  selected: String;

  openLg(content, selection) {
    this.selected = selection;
    this.modalService.open(content, { size: 'lg' });
  }

  names = [
    "juan",
    "merce",
    "antonio",
    "juan",
    "merce",
    "antonio",
    "juan",
    "merce",
    "antonio",
    "juan",
    "merce",
    "antonio",
    "juan",
    "merce",
    "antonio",
    "juan",
    "merce",
    "antonio",
    "juan",
    "merce",
    "antonio",
  ];
}
