import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { CardComponent } from './card/card.component';
import { Error404Component } from './error404/error404.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailtootedComponent } from './user-detailtooted/user-detailtooted.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'pokemons', component: CardComponent},
  {path: 'pokemons/:id', component: PokemonDetailComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserDetailtootedComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
