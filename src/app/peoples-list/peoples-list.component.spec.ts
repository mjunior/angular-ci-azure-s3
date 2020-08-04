import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { Observable } from "rxjs";
import { PeoplesListComponent } from "./peoples-list.component";
import { PeoplesListService } from "./peoples-list.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { By } from "@angular/platform-browser";
import { PersonItemComponent } from "./person-item/person-item.component";
import { MatCardModule } from "@angular/material/card";
import { MockComponent } from "ng-mocks";

export class DataStub {
  public getPeoples(): Observable<any> {
    return new Observable((observer) => {
      observer.next([{ name: "Joao 1" }, { name: "Jose 2" }]);
    });
  }
}

describe("PeoplesListComponent", () => {
  let component: PeoplesListComponent;
  let fixture: ComponentFixture<PeoplesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplesListComponent, MockComponent(PersonItemComponent)],
      providers: [{ provide: PeoplesListService, useClass: DataStub }],
    });

    fixture = TestBed.createComponent(PeoplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should list people names", () => {
    const li = fixture.debugElement.queryAll(By.css("app-person-item"));
    expect(li.length).toEqual(3);
  });
});
