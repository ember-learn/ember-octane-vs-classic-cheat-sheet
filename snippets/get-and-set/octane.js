import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MyComponent extends Component {
  @tracked count = 0;

  @action minusOne() {
    this.count = this.count - 1;
  }
}