import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  index: 0,

  nextIndex: computed('index', function() {
    return this.index + 1;
  })
});