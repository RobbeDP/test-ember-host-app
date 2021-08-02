import Controller from '@ember/controller';
import {action} from '@ember/object';

export default class EditorNewDocumentController extends Controller {
  editor = null

  @action
  handleRdfaEditorInit(editor){
    if (editor) {
      this.editor = editor;
    }
  }
}
