import { Pet, LivingStatus } from './pet';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  // pets: Pet[] = [
  //   {
  //     id: 1,
  //     pet_name: 'kitty',
  //     the_species: 'wild',
  //     date_of_birth: '2018-05-14',
  //     date_of_death: '2018-11-14',
  //     note: 'cat',
  //     status: LivingStatus.DEAD,
  //   },
  //   {
  //     id: 2,
  //     pet_name: 'ayuk',
  //     the_species: 'home',
  //     date_of_birth: '2017-07-14',
  //     note: 'dog',
  //     status: LivingStatus.LIVING,
  //   },
  //   {
  //     id: 3,
  //     pet_name: 'tiktok',
  //     the_species: 'wfdfdlfdd',
  //     date_of_birth: '2020-04-24',
  //     date_of_death: '2021-11-14',
  //     note: 'cat',
  //     status: LivingStatus.DEAD,
  //   },
  //   {
  //     id: 4,
  //     pet_name: 'jira',
  //     the_species: 'wfdfdfilvcdfd',
  //     date_of_birth: '2021-05-04',
  //     note: 'dog',
  //     status: LivingStatus.LIVING,
  //   },
  //   {
  //     id: 5,
  //     pet_name: 'wayu',
  //     the_species: 'wdfdfdfilfddfd',
  //     date_of_birth: '2021-05-12',
  //     note: 'dog',
  //     status: LivingStatus.LIVING,
  //   },
  // ];
  constructor(private http: HttpClient) {}

  listPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>('/api/view');
  }

  getPet(id: number) {
    return this.http.get<Pet>(`/api/find/${id}`);
  }

  editPet(data: Pet) {
    return this.http.put('/api/update/', data);
  }

  addPet(data: Pet) {
    return this.http.post('/api/add', data);
  }
}
