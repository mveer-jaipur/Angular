import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-comics',
  templateUrl: './add-comics.component.html',
  styleUrls: ['./add-comics.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})

//NOTE: Uncomment the console error statement and check the error
export class AddComicsComponent {
  //1. FormControl type safety
  name = new FormControl('');

  updateNameControl() {
    console.warn(this.name.value);

    //Compile Error
    // console.warn(this.name?.value.test);
  }

  //2. FormGroup Type safety
  comicsFormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  updateComicsFormGroup() {
    console.warn(this.comicsFormGroup.controls);
    console.warn(this.comicsFormGroup.controls.title.value);

    //Compile error
    //console.warn(this.comicsFormGroup.controls.domain)
    //console.warn(this.comicsFormGroup.controls.title.domain);
  }

  //3. Nullability
  title = new FormControl('Batman');
  reset() {
    console.warn('Before Reset', this.title.value);
    this.title.reset();

    //After reset function call, the value will be set to null
    console.warn('After Reset', this.title.value);
    console.warn(
      'Property access on form control value is type safe by the API',
      this.title.value?.length
    );
    console.warn(
      'Method access on form control value is type safe by the API',
      this.title.value?.toString()
    );
  }

  //4. To make values non-nullable in form
  superheroName = new FormControl('Batman', { nonNullable: true });
  resetNonNullable() {
    this.superheroName.patchValue('Superman');
    console.warn('Before Reset', this.superheroName.value);
    this.superheroName.reset();

    //After reset function call, the value will be set to null
    console.warn('After Reset', this.superheroName.value);
  }

  //5. Implicit type for form control based on initial value
  superheroPower = new FormControl(null);
  setSuperheroPower() {
    // Console error as initial value is assigned to null so typescript inferred type is FormControl<null>
    // this.superheroPower.setValue('Fly');
  }

  //6. To make Explicit type for form control
  superheroPower2 = new FormControl<string | null>(null);
  setSuperheroPower2() {
    this.superheroPower2.setValue('Fly');
  }
}
