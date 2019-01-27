import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { ShowblogComponent } from './showblog/showblog.component';
import { AboutComponent } from './about/about.component';
import { NewblogComponent } from './newblog/newblog.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bloglist', component: BloglistComponent },
  { path: 'showblog/:id', component: ShowblogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'newblog', component: NewblogComponent }

  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}