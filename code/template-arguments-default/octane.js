import Component from '@glimmer/component';

export default class MyComponent extends Component {
  get avatar() {
    return this.args.avatar || 'default';
  }
}
