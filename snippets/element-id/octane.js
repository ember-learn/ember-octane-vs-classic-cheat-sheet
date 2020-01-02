import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class InputTextComponent extends Component {
  inputId = 'textInput-' + guidFor(this); 
}