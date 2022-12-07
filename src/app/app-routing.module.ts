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
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  
  { path: 'AddFreezbe', component: AddFreezbeComponent, canActivate:[AuthGuard] },
  { path: 'AddIngredients', component: AddIngredientsComponent, canActivate:[AuthGuard]},
  { path: "AddProcess", component: AddProcessComponent, canActivate:[AuthGuard]},
  
  { path: 'EditFreezbe/:id', component: EditFreezbeComponent, canActivate:[AuthGuard] },
  { path: 'EditIngredients/:id', component: EditIngredientsComponent,canActivate:[AuthGuard]},
  { path: "EditProcess/:id", component: EditProcessComponent, canActivate:[AuthGuard]},

  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
