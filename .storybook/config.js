import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'storybook-chromatic';
import 'bulma/css/bulma.css';

import '../src/index.css';

const req = requireContext('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
