import { Routes } from '@angular/router';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreMimComponent },
];
