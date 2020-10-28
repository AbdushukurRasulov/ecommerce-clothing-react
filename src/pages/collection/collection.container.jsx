import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selector';
import CollectionPage from '../collection/collection.component.';
import WithSpinner from '../../components/with-spinner/with-spinner';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer;