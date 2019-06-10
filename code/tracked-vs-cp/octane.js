import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class someComponent extends Component {
    @tracked item = 1
    get plusOne() {
        return this.item + 1;
    }
}