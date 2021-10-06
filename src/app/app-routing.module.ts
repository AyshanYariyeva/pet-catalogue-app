import { AddPetComponent } from './add-pet/add-pet.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'pets',
    component: PetListComponent,
  },
  {
    path: 'pets/new',
    component: AddPetComponent,
  },
  {
    path: 'pets/edit/:id',
    component: PetEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
