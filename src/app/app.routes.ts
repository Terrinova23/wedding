import { RouterModule, Routes } from '@angular/router';
import { WeddingpageComponent } from './weddingpage/weddingpage.component';
import { LovestoryComponent } from './lovestory/lovestory.component';
import { NgModule } from '@angular/core';
import { GroomlovestoryComponent } from './groomlovestory/groomlovestory.component';
import { HeaderComponent } from './header/header.component';
import { CollageComponent } from './collage/collage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WeddingpageComponent },
  { path: 'lovestory', component: HeaderComponent },
  { path: 'groomstory', component: GroomlovestoryComponent },
  { path: 'collage', component: CollageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
