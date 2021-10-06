export interface Pet {
  id: number;
  the_species: string;
  pet_name: string;
  note: string;
  date_of_birth: Date;
  date_of_death?: Date;
  status: LivingStatus;
}

export enum LivingStatus {
  LIVING = 'LIVING',
  DEAD = 'DEAD',
}
