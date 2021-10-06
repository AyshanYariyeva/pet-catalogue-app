import { PetService } from './../pet.service';
import { Component, OnInit } from '@angular/core';
import { LivingStatus, Pet } from '../pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  filteredStatus = 'ALL';
  filteredPets = this.pets;
  selectedPet!: Pet;
  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.listPets().subscribe((petData) => {
      this.pets = petData;
      this.filterPets();
    });
  }
  filterPets(): void {
    this.filteredPets =
      this.filteredStatus === 'ALL'
        ? this.pets
        : this.pets.filter((pet) => pet.status === this.filteredStatus);
  }
  handleFilteredStatusChange(newStatus: string): void {
    this.filteredStatus = newStatus;
    this.filterPets();
  }
}
