import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Options } from './options/Options';
import { Felicitacio } from './felicitacio.model';

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

  felicitacions: Felicitacio[] = [
    { fotos: ['josep.jpeg'], video: 'josep.mp4', vist: false },
    { fotos: ['merce.jpeg'], video: 'merce.mp4', vist: false },
    { fotos: ['babu.jpg'], video: 'babu.mp4', vist: false },
    { fotos: ['jordi.jpeg', 'yolo.jpeg'], video: 'jordi.mp4', vist: false },
    { fotos: ['thais.jpeg'], video: 'thais.mp4', vist: false },
  ];

}
