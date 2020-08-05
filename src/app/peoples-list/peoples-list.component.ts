import { Component, OnInit } from '@angular/core';
import { PeoplesListService } from './peoples-list.service';
import { ConfigsLoaderService } from 'src/config/config-loader.service';

@Component({
  selector: 'app-peoples-list',
  templateUrl: './people-list.component.html'
})
export class PeoplesListComponent implements OnInit {

  people = [];
  env: string;
  constructor(private peopleService: PeoplesListService, private config: ConfigsLoaderService) { }

  ngOnInit() {
    try {
      this.env = this.config.environment.apiUrl;
    } catch (error) {
      this.env = 'FAIL';
    }

    this.peopleService.getPeoples().subscribe((data) => {
      this.people = data;
    });
  }

  buttonClicked() {
    console.log('Clicou');
  }

}
