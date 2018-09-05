import React, { Component } from 'react';
import glamorous from 'glamorous';
import Carousel from 'nuka-carousel';

const noop = () => {};

class HorizontalList extends Component {
  render() {
    const { children, slideWidth, slidesToShow, cellSpacing } = this.props;
    
    return (
      <OverflowHidden>
        <Wrapper>
          {
            children.map( (child, key) => {
              return (
                <Container cellSpacing={cellSpacing} key={key}>
                  {child}
                </Container>
              )
            })
          }
        </Wrapper>
      </OverflowHidden>
    )
    
  }
}///

export default HorizontalList;

const Container = glamorous.div({}, ({slideWidth, cellSpacing}) => ({
  // marginRight: cellSpacing ? cellSpacing : '0',
}))

const OverflowHidden = glamorous.div({
  // overflow: 'hidden',
  // paddingBottom: '10px',
  // overflowY: 'hidden'
});

const Wrapper = glamorous.div({
  padding: '0',
  paddingBottom: 10,
  display: 'flex',
  flexDirection: 'row',

  overflowX: 'scroll',

  //'&::-webkit-scrollbar':{
    //display: 'none',
    //width: '0 !important',
  //},

  WebkitOverflowScrolling: 'touch',
});

// <Carousel
//             cellAlign='left' cellSpacing={cellSpacing || 10}
//             dragging={true} slideWidth={slideWidth}
//             frameOverflow='visible' slidesToShow={slidesToShow || 1}
//             renderCenterLeftControls={noop} renderCenterRightControls={noop}
//             renderBottomCenterControls={noop}>
//             { children }
//           </Carousel>