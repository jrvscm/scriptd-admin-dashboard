import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { firebaseConnect, populate, getVal, isLoaded } from 'react-redux-firebase';
import StoryView from '../StoryView';

const mapStateToProps = (state, {match}) => ({
	story: getVal(state.firebase, `data/stories/scripts/${match.params.id}`),
	author: getVal(state.firebase, `data/stories/scripts/${match.params.id}.author`),
	authors: getVal(state.firebase, `data/authors`),
	allTags: getVal(state.firebase, `data/stories/tags`),
	storyTags: getVal(state.firebase, `data/stories/scripts/${match.params.id}/tags`)
})
export default compose(
  firebaseConnect(({match}) => [
  	{ path: `stories/scripts/${match.params.id}` },
  	{ path: `authors` },
  	{ path: `stories/tags` }
  ]
),
  connect(mapStateToProps)
)(withRouter(StoryView));