import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics/comics.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'comics' },
  {
    path: 'comics',
    component: ComicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
