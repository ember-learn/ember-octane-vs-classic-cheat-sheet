import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MyComponent extends Component {
  @tracked index = 0;

  get nextIndex() {
    return this.index + 1;
  }
}