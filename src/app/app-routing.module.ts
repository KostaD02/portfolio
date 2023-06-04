import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent, HomepageComponent, NotfoundComponent, QrProjectComponent } from './views';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'qr_project',
    component: QrProjectComponent
  },
  {
    path: 'archive',
    component: ArchiveComponent
  },
  {
    path: '404',
    component: NotfoundComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
