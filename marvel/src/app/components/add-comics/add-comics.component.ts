import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
}
