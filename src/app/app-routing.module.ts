import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/_page-not-found/page-not-found.component';
import { HomeComponent } from './features/tabs/home/home.component';
import { ClassworkComponent } from './features/tabs/classwork/classwork.component';
import { Exercise1Component } from './features/tabs/exercise1/exercise1.component';
import { Exercise2Component } from './features/tabs/exercise2/exercise2.component';
import { Exercise3Component } from './features/tabs/exercise3/exercise3.component';
import { Exercise4Component } from './features/tabs/exercise4/exercise4.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'classwork', component: ClassworkComponent },
  { path: 'exercise1', component: Exercise1Component },
  { path: 'exercise2', component: Exercise2Component },
  { path: 'exercise3', component: Exercise3Component },
  { path: 'exercise4', component: Exercise4Component },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
