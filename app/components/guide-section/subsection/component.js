import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';


export default class SubsectionComponent extends Component {
  @service intl;
}
