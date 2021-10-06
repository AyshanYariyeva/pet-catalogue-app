import { PetService } from './../pet.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { LivingStatus, Pet } from '../pet';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
})
export class PetFormComponent implements OnInit, OnChanges {
  @Input() pet!: Pet;
  @Input() petId: number = 0;
  @Input() formType: string = 'new';

  isPetAlive: boolean = true;
  constructor(private fb: FormBuilder, private petService: PetService, private router: Router) {}
  petForm = this.fb.group({
    the_species: ['', [Validators.required]],
    pet_name: ['', [Validators.required]],
    note: ['', [Validators.required]],
    date_of_birth: ['', [Validators.required]],
    status: ['', [Validators.required]],
    id: [null]
  });

  get pet_id() {
    return this.petForm.get('id');
  }
  get the_species() {
    return this.petForm.get('the_species');
  }
  get pet_name() {
    return this.petForm.get('pet_name');
  }
  get note() {
    return this.petForm.get('note');
  }
  get date_of_birth() {
    return this.petForm.get('date_of_birth');
  }
  get status() {
    return this.petForm.get('status');
  }

  ngOnInit(): void {
    if (this.pet) {
      console.log(this.pet);
      this.the_species?.setValue(this.pet.the_species);
      this.pet_name?.setValue(this.pet.pet_name);
      this.note?.setValue(this.pet.note);
      this.date_of_birth?.setValue(new Date(this.pet.date_of_birth));
      this.status?.setValue(this.pet.status);
      this.petForm.addControl('id', new FormControl(this.petId, Validators.required));
      if (this.pet.status === LivingStatus.DEAD) {
        this.isPetAlive = false;
        this.petForm.addControl(
          'date_of_death',
          new FormControl(this.pet.date_of_death, Validators.required)
        );
      }
    }
  }

  onStatusChange(event: any) {
    console.log(event.target.value);
    if (event.target.value === LivingStatus.DEAD) {
      this.isPetAlive = false;
      this.petForm.addControl(
        'date_of_death',
        new FormControl('', Validators.required)
      );
      this.petForm.get('date_of_death')?.enable();
    } else {
      this.petForm.removeControl('date_of_death');
      this.isPetAlive = true;
    }
  }
  ngOnChanges(): void {
    this.petForm.patchValue(this.pet);
  }
  onSubmit(): void {
    console.log('button clicked');
    if (this.petForm.valid) {
      console.log('valid');
      if (this.formType === 'edit') {
        console.log('button edit');
        this.petService.editPet(this.petForm.value).subscribe(_ => this.router.navigate(['/pets']));
      } else {
        console.log('button new');
        this.petService.addPet(this.petForm.value).subscribe(_ => this.router.navigate(['/pets']));
      }
    }
  }
}
