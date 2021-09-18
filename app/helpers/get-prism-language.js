import { helper } from '@ember/component/helper';

const mapLangugage = {
  shell: 'bash',
  text: 'markup',
};

// Convert the Ember Code Snippet language if needed
export default helper(function getPrismLanguage(params) {
  const emberCodeSnippetLanguage = params[0];

  if (Object.prototype.hasOwnProperty.call(mapLangugage, emberCodeSnippetLanguage)) {
    return mapLangugage[emberCodeSnippetLanguage];
  }

  return emberCodeSnippetLanguage;
});
