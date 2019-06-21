import { configure } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBars, faUsers, faBook, faFileDownload, faSearch, faPhone, faEnvelope,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);
library.add(faBars);
library.add(faUsers);
library.add(faBook);
library.add(faFileDownload);
library.add(faSearch);
library.add(faPhone);
library.add(faEnvelope);
library.add(faMapMarkerAlt);

// automatically import all files ending in *.stories.js
const req = require.context('../client', true, /.stories.js$/);
function loadStories() {

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
