import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Card } from '../UIElements';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { isLoaded } from 'react-redux-firebase';
import {
  white,
  greyTwo,
  greyFive,
  brandRed
} from '../../colors';
import { withRouter } from 'react-router-dom';

const generateCover = id => {
  const index = (parseInt(id) || 0) % 34;
  return `https://s3.amazonaws.com/scriptd-assets/covers/${index}.png`
}

const Container = glamorous.div({
  position: `relative`,
  transition: `all .2s ease-in-out`,
  cursor: `pointer`
})

const Cover = glamorous.div({
  height: '135px',
  borderRadius: '15px',
}, (props) => ({
  background: `url(${props.src}) center/cover no-repeat`
}));

const Content = glamorous.div({
  position: 'relative',
  padding: '10px 0px',
  textAlign: 'center',
  height: 30
});

const Title = glamorous.h4({
  fontSize: '9px',
  fontWeight: 'bold',
  margin: 0
});

const Author = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection:'column'
});

const Name = glamorous.p({
  fontSize: '9px',
  letterSpacing: '0.2px',
  color: greyFive,
  textShadow: '0 0 0 rgba(0, 0, 0, 0.5)',
  position: 'absolute',
  bottom: 0
});


const SmallStoryCard = withRouter(({story, storyId,  author, authors, history}) => {
  return(
    <Container onClick={() => history.push(`/story/${storyId}`)}>
      <Card>
        <Cover src={generateCover(storyId)} />
      </Card>
      <Content>
        <Title>{ story.title }</Title>
        <Author>
          <Name>
            { authors ? authors[author].name : ''}
          </Name>
        </Author>
      </Content>
    </Container>
  )
})

export default SmallStoryCard;