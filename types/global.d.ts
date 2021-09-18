// Types for compiled templates
declare module 'ember-octane-vs-classic-cheat-sheet/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
