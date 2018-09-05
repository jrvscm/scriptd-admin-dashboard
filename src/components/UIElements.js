import React from 'react';
import glamorous from 'glamorous';
import { white, black, brandRed, brandBlue, beige } from '../colors';

export const SectionTitle = glamorous.h2({
  fontFamily: 'Stolzl-Medium',
  fontSize: '11px',
  fontWeight: '500',
  letterSpacing: '0.4px',
  color: black,
  textTransform: 'uppercase',
  marginLeft: '25px',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const ComingSoon = glamorous.div({
  fontFamily: 'Stolzl-Medium',
  fontSize: '11px',
  fontWeight: '500',
  letterSpacing: '0.4px',
  color: white,
  backgroundColor: beige,
  textTransform: 'uppercase',
  borderRadius: 5,
  padding: 5,
  marginLeft: 5,
});

export const Card = glamorous.div({
  width: '100%',
  maxWidth: 350,
  height: '100%',
  borderRadius: '15px',
  boxShadow: '0 4px 4px 1px rgba(0, 0, 0, 0.07)',
  background: '#FFF',
  overflow: 'hidden',
});

export const SmallCard = glamorous.div({
  width: '24vw',
  height: '24vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 4px 1px rgba(0, 0, 0, 0.07)',
  marginRight: 10,
  paddingLeft: 16,
  paddingTop: 16,
});

export const Section = glamorous.section({
  marginBottom: '25px',
});

export const Avatar = glamorous.img({
  borderRadius: '50%',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
  border: 'solid 1px #ffffff',
}, ({ small = false, medium = false, large = true, huge = false }) => {
  let dim;
  switch (true) {
    case small:
      dim = 31;
      break;
    case medium:
      dim = 47;
      break;
    case large:
      dim = 60;
      break;
    case huge:
    default:
      dim = 116;
  }

  return {
    width: `${dim}px`,
    height: `${dim}px`
  };
});

export const SmallPill = glamorous.span({
  borderRadius: '14px',
  backgroundColor: '#ffffff',
  border: 'solid 0.5px #cac9c9',
  fontSize: '8px',
  marginRight: '6px',
  padding: '3px 6px',
  ':last-child': {
    marginRight: '0'
  }
});

const _BackButton = glamorous.div({
  width: '40px',
  height: '26px',
  borderRadius: '21px',
  border: 'none',
  paddingHorizontal: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px 0 rgba(197, 197, 197, 0.5)'
});

const LargeButton = glamorous.button({
  height: '34px',
  borderRadius: '18px',
  border: 'solid 1px #9b9b9b',
  boxShadow: '0 2px 4px 0 rgba(197, 197, 197, 0.5)',
  backgroundColor: '#ffffff',
  fontFamily: 'Stolzl',
  fontSize: '13px',
  fontWeight: 500,
  letterSpacing: '0.8px',
  textAlign: 'center',
  color: '#9b9b9b',
  textTransform: 'uppercase',
  padding: '0 20px'
}, ({ active }) => active && ({
  backgroundColor: brandRed,
  border: 'none',
  color: '#fff'
}));

export const FollowButton = ({ following }) => (
  <LargeButton active={following}>
    { following ? 'Following' : 'Follow' }
  </LargeButton>
);

export const TextHorizontalRule = glamorous.hr({
  fontFamily: 'Stolzl-Book, sans-serif',
  fontSize: '13px',
  lineHeight: '1em',
  position: 'relative',
  outline: 0,
  border: 0,
  color: 'black',
  textAlign: 'center',
  height: '1.5em',
  opacity: .5,
  '&:before': {
    content: `''`,
    // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar
    background: 'linear-gradient(to right, transparent, #818078, transparent)',
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '100%',
    height: '1px'
  },
  '&:after': {
    position: 'relative',
    display: 'inline-block',
    color: 'black',
    padding: '0 .5em',
    lineHeight: '1.5em',
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: 'black',
    backgroundColor: 'white'
  }
}, ({ label }) => ({
  '&:after': {
    content: `'${label}'`
  }
}));

const BlueButton = glamorous.button({
  background: brandBlue,
  fontFamily: 'Stolzl-Book',
  border: 'none',
  color: 'white',
  padding: '15px 4px',
  borderRadius: '25px',
  fontWeight: '600',
  display: 'block',
  width: '55%',
  margin: '0 auto 10px auto',
  outline: 0,
  boxShadow: '2px 2px 4px 0px rgba(138,134,163,1)',
  ':active': {
    'transform': 'translate(1px, 1px)',
    background: brandBlue,
    boxShadow: '1px 1px 3px 0px rgba(138,134,163,1)',
  }
});
