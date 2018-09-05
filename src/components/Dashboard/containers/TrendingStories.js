import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, populate, getVal } from 'react-redux-firebase';
import TrendingStories from '../TrendingStories';

const populates = [
  { child: 'scripts', root: 'stories/scripts' }
];
const mapStateToProps = ({ firebase }) => ({
  featured: populate(firebase, 'featured', populates),
  tags: getVal(firebase, 'data/stories/tags'),
  authors: getVal(firebase, 'data/authors')
});
export default compose(
  firebaseConnect([
    { path: 'featured', populates: populates },
    { path: 'stories/tags' },
    { path: 'authors'}
  ]),
  connect(mapStateToProps)
)(TrendingStories);
