import Controller from '@ember/controller';
import {action} from '@ember/object';

export default class NewDocumentController extends Controller {
  editor = null

  @action
  handleRdfaEditorInit(editor){
    if (editor)
      this.set('editor', editor);
  }
}
