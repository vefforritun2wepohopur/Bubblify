import { bubbles } from '../../resources/bubbles.json';

const getBubbles = (filter = { name: '', category: '' }) =>
    bubbles.filter(n =>
        (n.category === filter.category
        || filter.category === '')
        && (n.name.toLowerCase().includes(filter.name.toLowerCase())
        || filter.name === '')
    );

export {
    getBubbles
};