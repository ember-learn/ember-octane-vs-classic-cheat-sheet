import Component from '@glimmer/component';

export default class MyComponent extends Component {
  get answer() {
    return this.args.answer || 42;
  }
}
