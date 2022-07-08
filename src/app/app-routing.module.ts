import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import my components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
