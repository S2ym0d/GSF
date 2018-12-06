import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Strona } from '../strona';
import { STRONY } from '../lista-stron';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {

  page: Strona;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.page = STRONY[id - 1];
  }

  goBack(): void {
    this.location.back();
  }

}
