import { Component, OnInit } from '@angular/core';
import { PeoplesListService } from './peoples-list.service';

@Component({
  selector: 'app-peoples-list',
  templateUrl: './peoples-list.component.html'
})
export class PeoplesListComponent implements OnInit {

  people = [];
  constructor(private peopleService: PeoplesListService) { }

  ngOnInit() {
    this.peopleService.getPeoples().subscribe((data) => {
      this.people = data;
    });
  }

}
