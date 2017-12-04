import { GlobalComponent } from './components/global/global.component';
import { DetailComponent } from './components/detail/detail.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: DetailComponent
  },
  {
    path: 'global',
    component: GlobalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
