import { Component, OnInit } from '@angular/core';
import { FacebookPage } from '../FacebookPage';
import { MockOfPages } from '../mocks/mock-of-pages';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  TopPages: FacebookPage[] = MockOfPages.slice(0, 3);

  constructor() { }

  ngOnInit() {
  }

}
