import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class SomeComponent extends Component {
  item = 1;

  @computed('item')
  get plusOne() {
    return this.item + 1;
  }
}
