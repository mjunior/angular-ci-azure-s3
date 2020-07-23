import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { PeoplesListComponent } from './peoples-list.component';
import { PeoplesListService } from './peoples-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

export class DataStub {
  public getPeoples(): Observable<any> {
    return new Observable((observer) => {
      observer.next([{ name: 'Joao 1' }, { name: 'Jose 2' }]);
    });
  }
}

describe('PeoplesListComponent', () => {
  let component: PeoplesListComponent;
  let fixture: ComponentFixture<PeoplesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplesListComponent],
      providers: [{ provide: PeoplesListService, useClass: DataStub }]
    });
    // src/app/vehicle/vehicle-bulk/vehicle-bulk-list/vehicle-bulk-list.component.spec.ts:109

    fixture = TestBed.createComponent(PeoplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should list people names', () => {
    const li = fixture.debugElement.queryAll(By.css('#people-list li'));
    expect(li[0].nativeElement.textContent.trim()).toEqual('Joao 1');
    expect(li[1].nativeElement.textContent.trim()).toEqual('Jose 2');
  });

  // Spy - clickButton callThrought
});
