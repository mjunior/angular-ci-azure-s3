import { ComponentFixture, TestBed} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { PersonItemComponent } from './person-item.component';

describe('PersonItemComponent', () => {
  let component: PersonItemComponent;
  let fixture: ComponentFixture<PersonItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonItemComponent],
    });

    fixture = TestBed.createComponent(PersonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show item name', () => {
    component.name = 'João';
    fixture.detectChanges();
    const li = fixture.debugElement.query(By.css('.item-name'));
    expect(li.nativeElement.textContent.trim()).toEqual('Nome: João');
  });
});
