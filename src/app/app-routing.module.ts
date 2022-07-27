import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import my components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'pokemon/:id', component: PokemonDetailComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
