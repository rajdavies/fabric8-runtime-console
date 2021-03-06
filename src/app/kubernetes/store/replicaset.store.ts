import {Injectable} from '@angular/core';
import {ReplicaSetService} from '../service/replicaset.service';
import {ReplicaSet, ReplicaSets} from '../model/replicaset.model';
import {NamespacedResourceStore} from './namespaced.resource.store';
import {NamespaceScope} from '../service/namespace.scope';

@Injectable()
export class ReplicaSetStore extends NamespacedResourceStore<ReplicaSet, ReplicaSets, ReplicaSetService> {
  constructor(replicaSetReplicaSet: ReplicaSetService, namespaceScope: NamespaceScope) {
    super(replicaSetReplicaSet, [], <ReplicaSet>{}, namespaceScope);
  }

  protected get kind() {
    return 'ReplicaSet';
  }
}
