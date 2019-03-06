import { bundles } from '../../resources/bundles.json';

const getBundles = () => bundles.sort((a, b) => a.place > b.place);

export default { getBundles };
