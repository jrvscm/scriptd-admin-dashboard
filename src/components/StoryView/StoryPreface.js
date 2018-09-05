import React from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';

import { Avatar, SmallPill } from '../UIElements';
import { greyFive } from '../../colors';

const StoryPreface = ({story, authors, author, allTags, storyTags}) => {
	if(!isLoaded(authors, story, author, allTags, storyTags)) {
		return (<div>...Loading</div>)
	} 

  return(
  	<Container>
  		<Col>
    		<Title>{story.title}</Title>
    		<LogLine>{story.logline}</LogLine>
    		<Tags>
          { !allTags ? null : Object.keys(storyTags).map(tag => <SmallPill key={tag}>{ allTags[tag] }</SmallPill>) }
        </Tags>
    		<Row>
    			<Avatar large src={authors[author].avatar} / >
       		<Name>
       			{ authors[author].name }
       		</Name>
     		</Row>
    	</Col>
		</Container>
	)
}

export default StoryPreface;

const Container = glamorous.div({
	maxWidth: 478
})

const Col = glamorous.div({
	width: `100%`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `flex-start`,
	justifyContent: `center`
})

const Row = glamorous.div({
	width: `100%`,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `flex-start`,
	marginTop: 20,
	marginBottom: 26
})

const Title = glamorous.h1({
  fontFamily: `Stolzl-Bold`,
  fontSize: 25,
  fontWeight: `bold`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  marginTop: 37,
  lineHeight: 1.72,
  letterSpacing: `normal`
})

const LogLine = glamorous.p({
  fontFamily: `Stolzl-Reg`,
  fontSize: 14,
  fontWeight: `normal`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: 1.71,
  marginTop: 0,
  marginBottom: 20,
  letterSpacing: -0.2
})

const Name = glamorous.p({
  fontFamily: `Stolzl-Reg`,
  fontSize: 13,
  fontWeight: `normal`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: 1.08,
  letterSpacing: 0.2,
  color: `#000000`,
  marginLeft: 13,
  textShadow: `0 0 0 rgba(0, 0, 0, 0.5)`
})

const Tags = glamorous.div({
  margin: '10px 0',
  fontFamily: 'Stolzl-Book',
});
