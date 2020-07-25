import { Component, OnInit, Input } from '@angular/core';
import { PeoplesListService } from '../peoples-list.service';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html'
})
export class PersonItemComponent implements OnInit {
  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
    console.log('PersonItemComponent#ngOnInit');
  }

}
