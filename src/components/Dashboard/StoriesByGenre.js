import React, {Component} from 'react';
import glamorous from 'glamorous';

import HorizontalList from './HorizontalList';
import StoryCard from './StoryCard';
import { isLoaded, getVal } from 'react-redux-firebase';

import SmallStoryCard from './SmallStoryCard';
import { greyBorder2 } from '../../colors';

class StoriesByGenre extends Component {
  constructor(props) {
    super(props);

    this.state={
      value: 'action'
    }
  }

  updateGenre(e){
    this.setState({
      value: e.target.value
    })
  }

	render() {
    const {stories, genreMetaData, scriptsByGenre, authors} = this.props;
    const { value } = this.state;

  if (!isLoaded(genreMetaData, scriptsByGenre, stories, authors)) {
    return null;
  }

    const exists = value.toLowerCase().replace("-", "_");

  return(
		<Col>
			<Row>
				<H2>Stories By Genre</H2> 
				<Select value={value} onChange={(e) => this.updateGenre(e)}>
					{
            Object.keys(genreMetaData.names).map(key => 
              <Option key={key}>{genreMetaData.names[key]}</Option>
            ) 
          }
				</Select>
			</Row>
			<Div>
        <HorizontalList slideWidth={.27} cellSpacing={0}>
          {///
            Object.keys(stories).map(key => {
            if(stories[key].genres) {
              if(stories[key].genres[exists]){
                return(
                  <Container key={key}>
                    <SmallStoryCard 
                      key={key} 
                      storyId={key}
                      story={stories[key]}
                      author={stories[key].author}
                      authors={authors}
                    />
                  </Container>
                )
              }
            }
            })
          }
        </HorizontalList>
			</Div>
		</Col>
  )}
}

export default StoriesByGenre;

const Container = glamorous.div({
  width: 95,
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