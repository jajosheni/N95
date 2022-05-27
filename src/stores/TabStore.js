import {writable} from 'svelte/store';
import subpages from '../../resources/subpages';
import {landingPage} from '../../resources/miscellaneous';

const items = subpages.map(
  page => ({
    active: page.name === landingPage,
    ...page
  })
);

const TabStore = writable([...items]);

export default TabStore;
