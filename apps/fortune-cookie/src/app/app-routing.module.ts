import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'admin-feature',
    loadChildren: () =>
      import('@fortune-cookie/admin-feature').then((m) => m.adminFeatureRoutes),
  },
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
