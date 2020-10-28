import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import CollectionOverview from './collection-overview';
import WithSpinner from '../with-spinner/with-spinner';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});


const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionOverview);

//const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))

export default CollectionsOverviewContainer;