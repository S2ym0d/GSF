import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FacebookPage } from '../FacebookPage';
import { MockOfPages } from '../mocks/mock-of-pages';
import { FacebookpageService } from '../facebookpage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offered-pages',
  templateUrl: './offered-pages.component.html',
  styleUrls: ['./offered-pages.component.css']
})
export class OfferedPagesComponent implements OnInit {

  pagesOnSale: FacebookPage[] = [];

  pageNumber: number;

  constructor(private FacebookPageService: FacebookpageService, private route: ActivatedRoute) { }

   getPages(pageNumber: string): void {
    this.FacebookPageService.getPagesFromDataBase(pageNumber)
      .subscribe((pages: FacebookPage[]) => { this.pagesOnSale = pages; });
   }

  ngOnInit() {
    this.pageNumber = +this.route.snapshot.paramMap.get('pageNumber');
    this.getPages(this.pageNumber.toString());
  }

  goLastPage(): void {
    this.pageNumber -= 1;
    this.getPages(this.pageNumber.toString());
  }

  goNextPage(): void {
    this.pageNumber += 1;
    this.getPages(this.pageNumber.toString());
  }
}
