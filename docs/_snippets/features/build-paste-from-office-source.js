/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals window */

import ClassicEditor from '@ckeditor/ckeditor5-build-classic/src/ckeditor';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';

ClassicEditor.builtinPlugins.push(
	PasteFromOffice,
	Alignment,
	Code,
	Strikethrough,
	Subscript,
	Superscript,
	Underline,
	Font,
	Indent,
	IndentBlock,
	ImageResize,
);

window.ClassicEditor = ClassicEditor;
