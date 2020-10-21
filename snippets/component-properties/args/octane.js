
import Component from '@glimmer/component';

export default class MyComponent extends Component {
  prefix = 'ISO';

  get displayName() {
    return `${this.prefix} ${this.args.isoStandardNumber}`;
  }

  /* Rest of the code omitted */
}
