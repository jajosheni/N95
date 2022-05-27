import {writable} from 'svelte/store';
import subpages from '../../resources/subpages';

const items = subpages.map(
  page => ({
    active: page.name === 'about',
    ...page
  })
);

const TabStore = writable([...items]);

export default TabStore;
