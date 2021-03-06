import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path: '', component: LoginComponent},
  {path:'logout', component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'todos', component:ListTodosComponent,canActivate:[RouteGuardService]},
  {path:'todos/:id', component:TodosComponent,canActivate:[RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
