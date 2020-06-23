import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyComponent extends Component {
  @action sayHello() {
    console.log('Hello, world!');
  }

  @action saySomethingElse(message) {
    console.log(message);
  }
}