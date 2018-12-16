import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { OfferedPagesComponent } from './offered-pages/offered-pages.component';
import { LoggingInComponent } from './logging-in/logging-in.component';

const routes: Routes = [
  {path: '', redirectTo: 'strona-glowna', pathMatch: 'full'},
  {path: 'strona-glowna', component: MainPageComponent},
  {path: 'oferty/:pageNumber', component: OfferedPagesComponent},
  {path: 'logowanie', component: LoggingInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
