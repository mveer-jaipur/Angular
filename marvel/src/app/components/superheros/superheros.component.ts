import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-superheros',
  templateUrl: './superheros.component.html',
  styleUrls: ['./superheros.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SuperherosComponent {
  superherosFormArray = new FormArray([new FormControl('Batman')]);

  // 1. FormArray type safety
  AddSuperhero() {
    this.superherosFormArray.push(new FormControl('Superman'));
    console.warn(typeof this.superherosFormArray.controls[0].value);

    // compile error, form control type is string | null while newly added formControl is number | null
    // this.superherosFormArray.push(new FormControl(4));
  }

  //2. FormGroup
  superheroFormGroup = new FormGroup({
    title: new FormControl('Superman'),
    power: new FormControl('Fly'),
  });

  logSuperhero() {
    console.warn(typeof this.superheroFormGroup.value);
    this.superheroFormGroup.controls.power.disable();

    // form group does not show disabled controls
    console.warn(this.superheroFormGroup.value);

    // Bypass disabled controls
    console.warn(this.superheroFormGroup.getRawValue());
  }
}
