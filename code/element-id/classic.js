import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    console.log("Elememt id ", this.elementId)
  }
});