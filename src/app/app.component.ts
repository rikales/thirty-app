import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Options } from './options/Options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  title = 'thirty-app';
  selected: String;
  options: Options = new Options();
  
  ngOnInit(): void {
    console.log("init");
  }

  openLg(content, selection: string) {
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
