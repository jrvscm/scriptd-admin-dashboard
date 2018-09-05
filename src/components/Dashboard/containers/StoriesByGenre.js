import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, getVal } from 'react-redux-firebase';
import StoriesByGenre from '../StoriesByGenre';

//TODO: find a way to not request so much freaking data at once
const mapStateToProps = (state) => ({
  scriptsByGenre: getVal(state.firebase, 'data/scriptsByGenre'),
  genreMetaData: getVal(state.firebase, 'data/genreMetaData'),
  stories: getVal(state.firebase, 'data/stories/scripts'),
  authors: getVal(state.firebase, 'data/authors')
});
const mapDispatchToProps = {

};
export default compose(
  firebaseConnect([
    'genreMetaData',
    'scriptsByGenre',
    'stories/scripts'
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(StoriesByGenre);
