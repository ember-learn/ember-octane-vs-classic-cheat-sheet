// Before
import Component from '@ember/component';

export default Component.extend({
  actions: {
    helloWorld() {
      console.log('Hello, world!');
    },
    saySomethingElse(message) {
      console.log(message)
    }
  },
});