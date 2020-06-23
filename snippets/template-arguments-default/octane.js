// child-component.js
import Component from '@glimmer/component';

export default class ChildComponent extends Component {
  get answer() {
    return this.args.answer ?? 42;
  }
}