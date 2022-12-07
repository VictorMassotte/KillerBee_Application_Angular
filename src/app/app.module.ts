import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeViewFreezbeeComponent } from './home/home-view-freezbee/home-view-freezbee.component';
import { HomeViewIngredientsComponent } from './home/home-view-ingredients/home-view-ingredients.component';
import { HomeViewProcessComponent } from './home/home-view-process/home-view-process.component';
import { AddIngredientsComponent } from './Ingredients/add-ingredients/add-ingredients.component';
import { AddFreezbeComponent } from './Freezbe/add-freezbe/add-freezbe.component';
import { AddProcessComponent } from './Process/add-process/add-process.component';
import { EditProcessComponent } from './Process/edit-process/edit-process.component';
import { EditIngredientsComponent } from './Ingredients/edit-ingredients/edit-ingredients.component';
import { EditFreezbeComponent } from './Freezbe/edit-freezbe/edit-freezbe.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeViewFreezbeeComponent,
    HomeViewIngredientsComponent,
    HomeViewProcessComponent,
    AddIngredientsComponent,
    AddFreezbeComponent,
    AddProcessComponent,
    EditProcessComponent,
    EditIngredientsComponent,
    EditFreezbeComponent,
    LoginComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
