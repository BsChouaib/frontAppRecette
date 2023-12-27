import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { DetailsRecipeComponent } from './details-recipe/details-recipe.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'myrecipes', component:MyrecipesComponent},
  {path:'details', component:DetailsRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
