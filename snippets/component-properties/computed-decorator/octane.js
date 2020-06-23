import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class MyComponent extends Component {
  index = 0;

  @computed('index')
  get nextIndex() {
    return this.index + 1;
  }
}