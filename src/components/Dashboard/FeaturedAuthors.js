import React from 'react';
import glamorous from 'glamorous';
import HorizontalList from './HorizontalList';
import { Section, SectionTitle, Avatar } from '../UIElements';
import { isLoaded } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

const FeaturedAuthors = ({authors}) => {
  if (!isLoaded(authors)) {
    return null;
  }

  return(
    <Col>
      <Row>
        <H2>Top Writers</H2> 
      </Row>
      <Div>
        <HorizontalList slidesToShow={1} cellSpacing={0}>
          { 
            Object.keys(authors).map(author => {
              return (
                <Container>
                  <Avatar key={author} large src={authors[author].avatar} />
                  <H3>{authors[author].name}</H3>
                </Container>
              )
            }) 
          }
        </HorizontalList>
      </Div>
    </Col>
  )
}

export default FeaturedAuthors;

const Container = glamorous.div({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  marginRight: 16,
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

const H3 = glamorous.h3({
  fontFamily: `Stolzl-Reg`,
  fontSize: 10,
  fontWeight: 500,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: `normal`,
  letterSpacing: `normal`, 
  textAlign: `center`
})