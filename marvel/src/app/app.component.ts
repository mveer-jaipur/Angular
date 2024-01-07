import { Component, OnInit } from '@angular/core';
import { BaseService } from './services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly baseService: BaseService) {}

  title = 'marvel';
  baseDetails: any;

  ngOnInit(): void {
    this.baseDetails = this.baseService.baseDetails;
  }
}
