import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Namespaces} from "../../../model/namespace.model";
import {NamespaceStore} from "../../../store/namespace.store";

@Component({
  selector: 'ipaas-namespaces-list-page',
  templateUrl: './list-page.namespace.html',
  styleUrls: ['./list-page.namespace.scss'],
})
export class NamespacesListPage implements OnInit {
  private readonly namespaces: Observable<Namespaces>;
  private readonly loading: Observable<boolean>;

  constructor(private namespacesStore: NamespaceStore) {
    this.namespaces = this.namespacesStore.list;
    this.loading = this.namespacesStore.loading;
  }

  ngOnInit() {
    this.namespacesStore.loadAll();
  }

}
