// child-component.js

import Component from '@ember/component';

export default Component.extend({
  count: 0,
  actions: {
    minusOne() {
      this.set("count", this.count - 1)
    }
  }
});