import {writable} from 'svelte/store'
import subpages from '../../resources/subpages';

const items = subpages.map(page => ({
  active: page.name === 'about',
  name: page.name,
}));

const TabStore = writable([...items]);

export default TabStore;
