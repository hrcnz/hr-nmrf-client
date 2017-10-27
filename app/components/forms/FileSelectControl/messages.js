/*
 * FileSelectControl Messages
 *
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  import: {
    single: {
      id: 'app.components.FileSelectControl.import.single',
      defaultMessage: 'Import {total} row',
    },
    plural: {
      id: 'app.components.FileSelectControl.import.plural',
      defaultMessage: 'Import {total} rows',
    },
  },
  selectFile: {
    id: 'app.components.FileSelectControl.selectFile',
    defaultMessage: 'Select File',
  },
});