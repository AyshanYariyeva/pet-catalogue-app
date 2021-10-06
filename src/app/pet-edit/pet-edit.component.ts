import { PetService } from './../pet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css'],
})
export class PetEditComponent implements OnInit {
  petId!: number;
  selectedPet!: Pet;
  constructor(private route: ActivatedRoute, private PetService: PetService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.petId = +params['id'];
      this.PetService.getPet(this.petId).subscribe(
        (petData: Pet) => (this.selectedPet = petData)
      );
    });
  }
}
