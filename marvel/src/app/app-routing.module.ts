import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsWithNgModuleComponent } from './components/comics-with-ng-module/comics-with-ng-module.component';
import { ComicsComponent } from './components/comics/comics.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'comics' },
  {
    path: 'comics',
    component: ComicsComponent,
  },
  {
    path: 'comics-with-ng-module',
    component: ComicsWithNgModuleComponent,
  },
  {
    path: 'comic-details-lazy-loading',
    loadComponent: () =>
      import(
        './components/comic-details-lazy-loading/comic-details-lazy-loading.component'
      ).then((m) => m.ComicDetailsLazyLoadingComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
