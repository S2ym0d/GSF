import { Component, OnInit } from '@angular/core';
import { Strona } from '../strona';
import { STRONY } from '../lista-stron';

@Component({
  selector: 'app-strona-glowna',
  templateUrl: './strona-glowna.component.html',
  styleUrls: ['./strona-glowna.component.css']
})
export class StronaGlownaComponent implements OnInit {

  strony: Strona[] = STRONY.slice(0, 4);

  constructor() { }

  ngOnInit() {
  }

}
