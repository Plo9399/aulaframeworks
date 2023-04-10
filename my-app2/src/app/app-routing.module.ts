import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroComponent } from './componets/hero/hero.component';

const routes: Routes = [
  {path: 'heroes', componet: HeroComponent},
  {path: 'create', component: CreateUserComponent}, 
  {path: 'login', componet: LoginComponent},
  {path: '', redirecTo: '/login', pathMath: 'full'},
  {path: '**', componet: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
