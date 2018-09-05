import React from 'react';
import glamorous from 'glamorous';

import HorizontalList from './HorizontalList';
import StoryCard from './StoryCard';
import { isLoaded, getVal } from 'react-redux-firebase';

import { greyBorder2 } from '../../colors';

const TrendingStories = ({featured, authors, tags, firebase}) => {
	if (!isLoaded(featured, authors, tags)) {
    return null;
  }

  return(
		<Col>
			<Row>
				<H2>Trending Stories</H2> 
				<Select>
					<Option>Most Viewed</Option>
				</Select>
			</Row>
			<Div>
    		<HorizontalList slideWidth={0.8} cellSpacing={0}>
      		{ 
        		Object.keys(featured.scripts).map(key => {
          		const story = featured.scripts[key];
          		const author = authors[story.author];
          		return (
            		<Container key={key}>
              		<StoryCard
                		firebase={firebase}
                		story={story}
                		author={author}
                		small={true}
                		tags={!story.tags ? [] : Object.keys(story.tags).map(tag => ({id: tag, label: tags[tag]}))}
              		/>
            		</Container>
          		);
        		})
      		}
    		</HorizontalList>
			</Div>
		</Col>
	)
}

export default TrendingStories;

const Container = glamorous.div({
  width: 280,
  marginRight: 20,
})

const Div = glamorous.div({
	height: `100%`,
	width: `100%`,
	maxWidth: 1400
})

const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `flex-start`,
	width: `100%`,
	maxWidth: 1400,
	marginTop: 32,
	marginBottom: 19
})

const Col = glamorous.div({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`
})

const H2 = glamorous.h2({
	fontFamily: `Stolzl-Reg`,
  fontSize: 14,
  fontWeight: 500,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: `normal`,
  letterSpacing: 0.5,
  marginRight: 66,
  marginTop: 0,
  marginBottom: 0
})

const Option = glamorous.option({
	fontFamily: `Menlo-Bold`,
  fontSize: 11,
  fontWeight: `bold`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: 3.91,
  letterSpacing: 0.1
})

const Select = glamorous.select({
	fontFamily: `Menlo-Bold`,
  fontSize: 11,
  fontWeight: `bold`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: 3.91,	
  borderRadius: 8,
  border: `1px solid ${greyBorder2}`,
  height: 29,
  width: 144
})