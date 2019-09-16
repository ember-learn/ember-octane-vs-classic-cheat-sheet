import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SomeComponent extends Component {
  @action
  helloWorld() {
    console.log('Hello, world!');
  }

  @action
  saySomethingElse(message) {
    console.log(message);
  }
}