import {ConfigMapService} from '../service/configmap.service';
import {NamespacedResourceStore} from './namespaced.resource.store';
import {NamespaceScope} from '../service/namespace.scope';
import {Injectable} from "@angular/core";
import {ConfigMap, ConfigMaps} from "../model/configmap.model";

@Injectable()
export class ConfigMapStore extends NamespacedResourceStore<ConfigMap, ConfigMaps, ConfigMapService> {
  constructor(deploymentService: ConfigMapService, namespaceScope: NamespaceScope) {
    super(deploymentService, [], <ConfigMap>{}, namespaceScope);
  }

  protected get kind() {
    return 'ConfigMap';
  }
}
