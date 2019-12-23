import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    console.log("Element id ", this.elementId)
  }
});