import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, populate, getVal } from 'react-redux-firebase';
import StoryTrends from '../StoryTrends';

const mapStateToProps = ({ firebase }) => ({
});
export default compose(
  firebaseConnect([
  ]),
  connect(mapStateToProps)
)(StoryTrends;