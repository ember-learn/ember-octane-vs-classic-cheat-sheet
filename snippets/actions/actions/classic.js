import Component from '@ember/component';

export default Component.extend({
  actions: {
    sayHello() {
      console.log('Hello, world!');
    },

    saySomethingElse(message) {
      console.log(message)
    }
  }
});