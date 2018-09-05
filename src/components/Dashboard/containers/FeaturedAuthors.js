import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, populate, getVal } from 'react-redux-firebase';
import FeaturedAuthors from '../FeaturedAuthors';

//TODO: decide how to segment top authors, for now its all authors
// coming in from the trendingStories container
//const populates = [
  //{ child: 'authors', root: 'authors' },
//];
const mapStateToProps = (state) => ({
  //featured: populate(state.firebase, 'featured', populates),
  authors: getVal(state.firebase, 'data/authors')
});
export default compose(
  firebaseConnect([
    //{ path: 'featured', populates: populates }
  ]),
  connect(mapStateToProps)
)(FeaturedAuthors);
