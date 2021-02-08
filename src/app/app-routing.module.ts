import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: 'homepage',
  component: HomepageComponent
},
{
  path:'contact',
  component: ContactComponent
},
{
  path: '',
  redirectTo: '/homepage',
  pathMatch: 'full'
},
{
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
