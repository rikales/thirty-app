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
    var currentIndex = this.felicitacions.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.felicitacions[currentIndex];
      this.felicitacions[currentIndex] = this.felicitacions[randomIndex];
      this.felicitacions[randomIndex] = temporaryValue;
    }
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
    { fotos: ['jordi.jpeg', 'yolo.jpeg'], video: 'yolo.mp4', validNames: ['jordi', 'chark', 'yolo'], valid: false },
    { fotos: ['thais.jpeg'], video: 'thais.mp4', validNames: ['thais'], valid: false },
    { fotos: ['vane.jpeg', 'oscar.jpeg'], video: 'vane.mp4', validNames: ['vane', 'vanesa', 'oscar'], valid: false },
    { fotos: ['pilar.jpeg'], video: 'pilar.mp4', validNames: ['pilar', 'iaia', 'yaya'], valid: false },
    { fotos: ['juan.jpg'], video: 'juan.mp4', validNames: ['juan', 'francisca', 'tita', 'tito'], valid: false },
    { fotos: ['cris.jpeg', 'dominik.jpeg'], video: 'dominik.mp4', validNames: ['cris', 'cristina', 'dominik'], valid: false },
    { fotos: ['antonio.jpeg'], video: 'antonio.mov', validNames: ['papa', 'antonio'], valid: false },
    { fotos: ['sixta.jpeg'], video: 'sixta.mov', validNames: ['mama', 'sixta'], valid: false },
    { fotos: ['toni.jpg'], video: 'toni.mov', validNames: ['toni', 'antonio'], valid: false },
    { fotos: ['danic.jpeg'], video: 'dani.mp4', validNames: ['dani'], valid: false },
    { fotos: ['davidc.jpeg'], video: 'david.mp4', validNames: ['david'], valid: false },
    { fotos: ['asuncion.jpeg'], video: 'asuncion.mp4', validNames: ['asuncion', 'titi'], valid: false },
    { fotos: ['julian.jpeg'], video: 'julian.mp4', validNames: ['julian'], valid: false },
    { fotos: ['santi.jpg','yas.jpg'], video: 'yas.mp4', validNames: ['yas', 'santi'], valid: false },
    { fotos: ['adria.png'], video: 'adria.mov', validNames: ['adria', 'gordo'], valid: false },
    { fotos: ['roger.jpg','gemma.jpg','gats.jpg'], video: 'gemma.mp4', validNames: ['gemma', 'roger'], valid: false },
    { fotos: ['fernando.jpg','marta.jpg'], video: 'fernando.mp4', validNames: ['fernando', 'carmen', 'marta'], valid: false },
    { fotos: ['cristina.jpg','oscar.jpg','xenia.jpeg'], video: 'cristina.mp4', validNames: ['oscar', 'cristina', 'xenia'], valid: false },
    { fotos: ['saray.jpg'], video: 'saray.mp4', validNames: ['saray', 'david'], valid: false },
    { fotos: ['belen.jpg', 'arnau.jpg', 'abel.jpeg', 'biel.jpeg', 'josep.jpg'], video: 'belen.mp4', validNames: ['belen', 'arnau', 'abel', 'biel', 'josep'], valid: false },
    { fotos: ['irune.jpeg', 'nerea.jpg', 'isa.jpg', 'paco.jpg'], video: 'isa.mov', validNames: ['irune', 'nerea', 'isa', 'paco'], valid: false },
    { fotos: ['ricardo.jpg'], video: 'ricardo.mp4', validNames: ['avi', 'ricardo'], valid: false },
    { fotos: ['eric.jpg','maria.jpg'], video: 'eric.mp4', validNames: ['eric', 'maria'], valid: false },
  ];

}
