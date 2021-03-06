import {Input, Component} from "@angular/core";
import {ReplicaSet} from "../../../model/replicaset.model";
import {YamlEditor} from "../../../view/yaml.editor";

@Component({
  selector: 'ipaas-replicaset-edit',
  templateUrl: './edit.replicaset.html',
  styleUrls: ['./edit.replicaset.scss'],
})
export class ReplicaSetEditComponent {

  @Input() replicaset: ReplicaSet;

  @Input() yamlEditor: YamlEditor;

}

