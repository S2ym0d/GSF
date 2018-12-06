import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import { StronyFacebookoweComponent } from './strony-facebookowe/strony-facebookowe.component';
import { PageDetailsComponent } from './page-details/page-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'strona-glowna', pathMatch: 'full'},
  {path: 'strona-glowna', component: StronaGlownaComponent},
  {path: 'lista-stron', component: StronyFacebookoweComponent},
  {path: 'strona/:id', component: PageDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
