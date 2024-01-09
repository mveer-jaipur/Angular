import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComicsComponent } from './components/add-comics/add-comics.component';

const routes: Routes = [
  {
    path: 'add-comics',
    component: AddComicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
