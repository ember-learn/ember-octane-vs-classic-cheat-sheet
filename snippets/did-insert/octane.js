import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SomeComponent extends Component {
  @action
  createGraph(element) {
    // you already have the canvas element,
    // now make the graph!
  }
}
