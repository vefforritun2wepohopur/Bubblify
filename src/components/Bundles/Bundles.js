import React from 'react';
import BundleItem from '../BundleItem/BundleItem';
import BundleService from '../../services/bundleService';

class Bundles extends React.Component {
    componentDidMount() {
        this.setState({ bundles: BundleService.getBundles() });
    }
    constructor() {
        super();
        this.state = { bundles: [] };
    }
    render() {
        const { bundles } = this.state;
        return bundles.map(g => <BundleItem key={g.place} {...g} />)
    }
}

export default Bundles;
