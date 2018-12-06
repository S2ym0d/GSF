import { Component, OnInit } from '@angular/core';
import { Strona } from '../strona';
import { STRONY } from '../lista-stron';

@Component({
  selector: 'app-strony-facebookowe',
  templateUrl: './strony-facebookowe.component.html',
  styleUrls: ['./strony-facebookowe.component.css']
})
export class StronyFacebookoweComponent implements OnInit {
  lewy: number;
  prawy: number;
  listaStron: Strona[];
  selectedPage: Strona;

  constructor() { }

  ngOnInit() {
    this.lewy = 0;
    this.prawy = 3;
    if (STRONY.length < 3) { this.prawy = STRONY.length; }

    this.listaStron = STRONY.slice(this.lewy, this.prawy);
  }

  WPrawo(): void {
    if (this.prawy === STRONY.length) {return; }
    this.lewy += 3;
    this.prawy += 3;
    if (STRONY.length < this.prawy) { this.prawy = STRONY.length; }
    this.listaStron = STRONY.slice(this.lewy, this.prawy);
  }

  WLewo(): void {
    if (this.lewy === 0) {return; }
    this.lewy -= 3;
    this.prawy = this.lewy + 3;
    if (STRONY.length < this.prawy) { this.prawy = STRONY.length; }
    this.listaStron = STRONY.slice(this.lewy, this.prawy);
  }

  onClick(selected: Strona): void {
    this.selectedPage = selected;
  }

}
