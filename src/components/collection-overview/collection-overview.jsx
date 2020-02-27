import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector  } from 'reselect';

import './collection-overview.scss';
import { CollectionPreview } from '../collection-preview/collection-preview';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherStateProps }) => (
            <CollectionPreview key={id} {...otherStateProps} />
        ))}
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)