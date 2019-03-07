import { Component, ViewEncapsulation, NgModule, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Options } from './options/Options';
import { Felicitacio } from './felicitacio.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
    config.interval = 0;
  }

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

  openFoto(modalFoto, selection: string) {
    this.selected = selection;
    this.modalService.open(modalFoto, { size: 'lg' });
  }

  checkName(typed: string, felicitacio: Felicitacio) {
    if (felicitacio.validNames.some(x => x == typed.toLowerCase())) {
      felicitacio.valid = true;
      console.log(typed);
    }
  }

  felicitacions: Felicitacio[] = [
    { fotos: ['josep.jpeg'], video: 'josep.mp4', validNames: ['josep'], valid: false },
    { fotos: ['merce.jpeg'], video: 'merce.mp4', validNames: ['merce'], valid: false },
    { fotos: ['babu.jpg'], video: 'babu.mp4', validNames: ['babu'], valid: false },
    { fotos: ['jordi.jpeg', 'yolo.jpeg'], video: 'jordi.mp4', validNames: ['jordi', 'chark', 'yolo'], valid: false },
    { fotos: ['thais.jpeg'], video: 'thais.mp4', validNames: ['thais'], valid: false },
    { fotos: ['vane.jpeg', 'oscar.jpeg'], video: 'vane.mp4', validNames: ['vane', 'vanesa', 'oscar'], valid: false },
    { fotos: ['pilar.jpeg'], video: 'pilar.mp4', validNames: ['pilar', 'iaia', 'yaya'], valid: false },
    { fotos: ['juan.jpeg', 'francisca.jpeg'], video: 'juan.mp4', validNames: ['juan', 'francisca', 'tita', 'tito'], valid: false },
  ];

}
