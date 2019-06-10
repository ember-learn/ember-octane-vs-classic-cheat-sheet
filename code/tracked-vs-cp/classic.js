import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    item: 1,
    plusOne: computed('item', function() {
        return this.item + 1;
    })
});