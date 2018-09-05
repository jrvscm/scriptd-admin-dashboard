import React, {Component} from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import * as routes from '../../constants/routes';
import glamorous from 'glamorous';
import Truncate from 'react-truncate';
import { isLoaded } from 'react-redux-firebase';

import { Card, Avatar, SmallPill } from '../UIElements';
import SvgIcon from '../SvgIcon'

import { lightGray3 } from '../../colors';

const generateCover = id => {
  const index = (parseInt(id) || 0) % 34;
  return `https://s3.amazonaws.com/scriptd-assets/covers/${index}.png`
}

class StoryCard extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      expanded: false
    };
  }

  render() {
    const { expanded } = this.state;
    const { history, story, author, tags, small } = this.props;

    //const authorLink = story.author ? AUTHOR_PROFILE.replace(':id', story.author) : DISCOVER;

    return (
      <Card>
        <Cover src={generateCover(story.id)} />
        <Content>
          <Title>{ story.title }</Title>
          <Logline small={small} onClick={ () => this.setState({expanded:!expanded}) }>
            {
              expanded
              ?
              story.logline
              :
              <Truncate lines={1}>{ story.logline }</Truncate>
            }
          </Logline>
          {
            !author
            ?
            null
            :
            <Author to={'#'}>
              <Avatar small src={author.avatar} />
              <Name>{ author.name }</Name>
            </Author>
          }
          
          <Tags>
            { !tags ? null : tags.map(tag => <SmallPill key={tag.id}>{ tag.label }</SmallPill>) }
          </Tags>
        </Content>
        <Actions>
          <div>
            <Label>{ story.likes }</Label>
          </div>
          <div>
            <Label>{ story.views }</Label>
          </div>
          <Row>
            <SvgIcon name="save" height={20}/>
            <Label>Save</Label>
          </Row>
        </Actions>
      </Card>
    )
  }
}///

StoryCard = withRouter(StoryCard);

export default StoryCard;

const Row = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
})

const Cover = glamorous.div({
  height: '129px',
  borderTopLeftRadius: '15px',
  borderTopRightRadius: '15px'
}, (props) => ({
  background: `url(${props.src}) center/cover no-repeat`
}));

const Content = glamorous.div({
  padding: '10px 20px'
});

const Title = glamorous.h4({
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '10px 0'
});

const Author = glamorous(Link)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  textDecoration: 'none !important',
});

const Name = glamorous.div({
  fontFamily: 'Stolzl-Book',
  fontSize: '11px',
  letterSpacing: '0.2px',
  color: lightGray3,
  textShadow: '0 0 0 rgba(0, 0, 0, 0.5)',
  marginLeft: '10px',
});

const Tags = glamorous.div({
  margin: '10px 0',
  fontFamily: 'Stolzl-Book',
});

const Actions = glamorous.div({
  borderTop: 'solid 0.5px #cac9c9',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '40px'
});

const Label = glamorous.div({
  fontFamily: 'Stolzl-Medium',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 500,
  color: '#979797',
  marginLeft: 5,
});

const Logline = glamorous.p({
  fontFamily: 'Stolzl-Book, sans-serif',
  lineHeight: '1.38',
  letterSpacing: '-0.3px',
  color: 'black',
  margin: '0 0 10px 0'
}, ({small})=>({
  fontSize: small ? 10 : 16,
}))