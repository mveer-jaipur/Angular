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
export class AddComicsComponent {
  name = new FormControl('');

  updateNameControl() {
    console.warn(this.name?.value);

    //Compile Error
    // console.warn(this.name?.value.test);
  }

  //FormGroup Type safety
  comicsFormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  updateComicsFormGroup() {
    console.warn(this.comicsFormGroup.controls);

    //compile error
    //console.warn(this.comicsFormGroup.controls.domain)
  }
}
