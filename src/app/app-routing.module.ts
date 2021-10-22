import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/_page-not-found/page-not-found.component';
import { HomeComponent } from './features/tabs/home/home.component';
import { TabComponent } from './features/tabs/tab/tab.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tab', component: TabComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
