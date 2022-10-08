import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BlogCardComponent } from './component/blog-card/blog-card.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginComponent } from './component/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { HomePageEditComponent } from './component/home-page/home-page-edit/home-page-edit.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog'
import { Overlay } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomePageTextEditComponent } from './component/home-page/home-page-text-edit/home-page-text-edit.component';
import { BlogEditComponent } from './component/blog-card/blog-edit/blog-edit.component';
import { ContactEditComponent } from './component/contact/contact-edit/contact-edit.component';
import { NewLinePipe } from './pipe/new-line.pipe';
import { AboutMeEditComponent } from './component/about-me/about-me-edit/about-me-edit.component';
import { BlogComponent } from './component/blog/blog.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogCardComponent,
    AboutMeComponent,
    ContactComponent,
    HomePageComponent,
    LoginComponent,
    HomePageEditComponent,
    HomePageTextEditComponent,
    BlogEditComponent,
    ContactEditComponent,
    NewLinePipe,
    AboutMeEditComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    
  ],
  providers: [MatDialog, Overlay, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
