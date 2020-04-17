// child-component.js

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ChildComponent extends Component {
  @action
  addOne() {
    console.log('1+1=2');
    // call the function passed in by the parent component
    this.args.plusOne();
  }
}
