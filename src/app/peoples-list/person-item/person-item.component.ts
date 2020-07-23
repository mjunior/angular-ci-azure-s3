import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html'
})
export class PersonItemComponent implements OnInit {
  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
