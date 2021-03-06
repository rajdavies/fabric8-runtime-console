/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ServicesListToolbarComponent} from "./list-toolbar.service";
import {IPaaSCommonModule} from "../../../../common/common.module";

describe('ServicesListToolbarComponent', () => {
  let component: ServicesListToolbarComponent;
  let fixture: ComponentFixture<ServicesListToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        IPaaSCommonModule,
      ],
      declarations: [ServicesListToolbarComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
