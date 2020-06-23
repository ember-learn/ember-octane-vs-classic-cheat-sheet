// child-component.js
import Component from '@ember/component';

export default Component.extend({
  actions: {
    plusOne() {
      this.set('count', this.get('count') + 1);
    }
  }
});