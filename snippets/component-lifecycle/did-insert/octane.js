import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyComponent extends Component {
  @action createGraph(element) {
    // You have the canvas element. Now make the graph!
  }
}