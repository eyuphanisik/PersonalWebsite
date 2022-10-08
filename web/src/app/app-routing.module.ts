import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCardComponent } from './component/blog-card/blog-card.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { LoginComponent } from './component/login/login.component';
import { BlogComponent } from './component/blog/blog.component';

const routes: Routes = [{ path: "", component: HomePageComponent },
{ path: "blog", component: BlogCardComponent },
{ path: "iletisim", component: ContactComponent },
{ path: "hakkımda", component: AboutMeComponent },
{ path: "admin", component: LoginComponent },
{ path: "blog/:item.title", component: BlogComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
