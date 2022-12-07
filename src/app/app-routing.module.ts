import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFreezbeComponent } from './Freezbe/add-freezbe/add-freezbe.component';
import { EditFreezbeComponent } from './Freezbe/edit-freezbe/edit-freezbe.component';
import { HomeComponent } from './home/home.component';
import { AddIngredientsComponent } from './Ingredients/add-ingredients/add-ingredients.component';
import { EditIngredientsComponent } from './Ingredients/edit-ingredients/edit-ingredients.component';
import { LoginComponent } from './login/login.component';
import { AddProcessComponent } from './Process/add-process/add-process.component';
import { EditProcessComponent } from './Process/edit-process/edit-process.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  
  { path: 'AddFreezbe', component: AddFreezbeComponent },
  { path: 'AddIngredients', component: AddIngredientsComponent},
  { path: "AddProcess", component: AddProcessComponent},
  
  { path: 'EditFreezbe/:id', component: EditFreezbeComponent },
  { path: 'EditIngredients/:id', component: EditIngredientsComponent},
  { path: "EditProcess/:id", component: EditProcessComponent},

  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
