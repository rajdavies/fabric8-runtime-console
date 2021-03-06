import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {BuildStore} from "../../../store/build.store";

@Component({
  selector: 'ipaas-build-edit-page',
  templateUrl: './edit-page.build.html',
  styleUrls: ['./edit-page.build.scss'],
})
export class BuildEditPage implements OnDestroy {
  private idSubscription: Subscription;

  constructor(store: BuildStore, route: ActivatedRoute) {
    this.idSubscription = route.params.pluck<Params, string>('id')
      .map((id) => store.load(id))
      .subscribe();
  }

  ngOnDestroy() { this.idSubscription.unsubscribe(); }
}
