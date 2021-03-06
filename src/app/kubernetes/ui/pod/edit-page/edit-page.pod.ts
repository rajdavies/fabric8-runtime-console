import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {PodStore} from "../../../store/pod.store";

@Component({
  selector: 'ipaas-pod-edit-page',
  templateUrl: './edit-page.pod.html',
  styleUrls: ['./edit-page.pod.scss'],
})
export class PodEditPage implements OnDestroy {
  private idSubscription: Subscription;

  constructor(store: PodStore, route: ActivatedRoute) {
    this.idSubscription = route.params.pluck<Params, string>('id')
      .map((id) => store.load(id))
      .subscribe();
  }

  ngOnDestroy() { this.idSubscription.unsubscribe(); }
}
