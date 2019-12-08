// child-component.js

import Component from '@ember/component';

export default Component.extend({
  actions: {
    plusOne() {
      let count = this.get("count");
      this.set("count", count)
    }
  }
});