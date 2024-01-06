import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-comics-with-ng-module',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './comics-with-ng-module.component.html',
  styleUrls: ['./comics-with-ng-module.component.scss'],
})
export class ComicsWithNgModuleComponent {}
