/* tslint:disable:no-unused-variable */
import {async, TestBed, ComponentFixture} from "@angular/core/testing";
import {NamespaceViewComponent} from "./view.namespace";
import {MomentModule} from "angular2-moment";
import {NamespaceDeleteDialog} from "../delete-dialog/delete-dialog.namespace";
import {ModalModule} from "ng2-modal";
import {FormsModule} from "@angular/forms";
import {KubernetesStoreModule} from "../../../kubernetes.store.module";
import {RequestOptions, BaseRequestOptions, Http} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {RestangularModule} from "ng2-restangular";
import {RouterTestingModule} from "@angular/router/testing";
import {IPaaSCommonModule} from "../../../../common/common.module";

describe('NamespaceViewComponent', () => {
  let namespace: NamespaceViewComponent;
  let fixture: ComponentFixture<NamespaceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes([]),
          IPaaSCommonModule,
          FormsModule,
          MomentModule,
          ModalModule,
          RestangularModule.forRoot(),
          KubernetesStoreModule,
        ],
        declarations: [
          NamespaceViewComponent,
          NamespaceDeleteDialog,
        ],
      providers: [
        MockBackend,
        { provide: RequestOptions, useClass: BaseRequestOptions },
        {
          provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
          }, deps: [MockBackend, RequestOptions],
        },
      ],
      },
    )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamespaceViewComponent);
    namespace = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(namespace).toBeTruthy();
  });
});
