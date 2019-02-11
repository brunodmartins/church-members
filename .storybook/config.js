import { configure } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBars, faUsers, faBook, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faUser);
library.add(faBars);
library.add(faUsers);
library.add(faBook);
library.add(faSearch);

// automatically import all files ending in *.stories.js
const req = require.context('../client', true, /.stories.js$/);
function loadStories() {

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
