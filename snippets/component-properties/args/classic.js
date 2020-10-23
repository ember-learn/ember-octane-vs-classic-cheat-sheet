import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  prefix: 'ISO',

  displayName: computed('prefix,isoStandardNumber', function() {
    /*
      There are two issues with this code:

      1. `prefix` may or may not be overriden from outside
      2. We can't tell if `isoStandardNumber` is a property or an argument
    */
    return `${this.prefix} ${this.isoStandardNumber}`;
  }),

  /* Rest of the code omitted */
});
