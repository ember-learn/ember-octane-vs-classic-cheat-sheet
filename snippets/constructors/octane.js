import Component from '@glimmer/component';

export default class MyComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    this.answer = 42;
  }
}