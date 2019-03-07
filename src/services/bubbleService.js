import { bubbles } from '../../resources/bubbles.json';
import { bundles } from '../../resources/bundles.json';

const getBubbles = (filter = { name: '', category: '' }) =>
    bubbles.filter(n =>
        (n.category === filter.category
        || filter.category === '')
        && (n.name.toLowerCase().includes(filter.name.toLowerCase())
        || filter.name === '')
    );
const getBundles = () => bundles.sort((a, b) => a.place > b.place);

export default {getBundles};
export {getBubbles};