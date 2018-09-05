import React from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';

import TopBar from '../TopBar';
import StoryPreface from './StoryPreface';
import { grey } from '../../colors';

const StoryView = ({story, author, authors, allTags, storyTags}) => {
	if(!isLoaded(story)){
		return null
	}

	return (
		<Container>
			<TopBar title={'Story Detail Analytics'} />
			<Row>
				<StoryPreface 
					story={story} 
					author={author} 
					authors={authors} 
					allTags={allTags}
					storyTags={storyTags}
				/>
			</Row>
		</Container>
	)
}

export default StoryView;
///
const Container = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	height: `100%`,
	width: `100vw`,
	backgroundColor: grey
})

const Row = glamorous.div({
	width: `100%`,
	maxWidth: 1400,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `flex-start`
})
