import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFreezbeComponent } from './Freezbe/add-freezbe/add-freezbe.component';
import { HomeComponent } from './home/home.component';
import { AddIngredientsComponent } from './Ingredients/add-ingredients/add-ingredients.component';
import { AddProcessComponent } from './Process/add-process/add-process.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'AddFreezbe', component: AddFreezbeComponent },
  { path: 'AddIngredients', component: AddIngredientsComponent},
  { path: "AddProcess", component: AddProcessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
