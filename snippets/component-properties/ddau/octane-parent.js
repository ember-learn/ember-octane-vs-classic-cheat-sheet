// parent-component.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ParentComponent extends Component {
  @tracked count = 0;

  @action plusOne() {
    this.count++;
  }
}