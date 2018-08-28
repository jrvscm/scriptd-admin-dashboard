import React from 'react';
import glamorous from 'glamorous';

import { white, greyBorder, lightGray3, greyEight, blue } from '../../colors';
import { Avatar } from '.././UIElements';
import Logo from '../../assets/images/scriptd-full-logo.svg';
import MagnifyingGlass from '../../assets/images/magnifying-glass.svg';
import Denise from '../../assets/images/denise.png';

const TopBar = () => (
	<Container>
		<Row>
			<LogoImage src={Logo} />
			<Wrapper>
				<InputContainer>
					<label htmlFor="search" />
					<Image src={MagnifyingGlass} />
					<Input type="text" name="search" placeholder="Search Scriptd" />
				</InputContainer>
				<AccountContainer>
					<A href="#">My Account</A>
					<Avatar medium={true} src={Denise}/>
				</AccountContainer>
			</Wrapper>
		</Row>
		<Row>
			<H1>Analytics Dashboard</H1>
			<nav>
				<List>
					<Li><A href="#">SAVE REPORT</A></Li>
					<Li><A href="#">EXPORT DATA</A></Li>
					<Li><A href="#">SHARE REPORT</A></Li>
				</List>
			</nav>								
		</Row>
	</Container>
)

export default TopBar;

const Container = glamorous.div({
	height: 160,
	width: `100%`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	backgroundColor: white
})

const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `space-between`,
	height: `100%`,
	width: `100%`,
	maxWidth: 1400
})

const LogoImage = glamorous.img({
	height: 49,
	width: 206
})

const Image = glamorous.img({
	height: `100%`
})

const Input = glamorous.input({
	height: 26,
	width: 292,
	border: `solid 1px ${greyBorder}`,
	borderTopRightRadius: 13,
	borderTopLeftRadius: 13,
	borderBottomRightRadius: 13,
	borderBottomLeftRadius: 13,
	fontFamily: `Menlo`,
  fontSize: `12px`,
  fontWeight: `normal`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: `normal`,
  letterSpacing: `-0.3px`,
  color: lightGray3,
  transition: `all .2s ease`,
  paddingLeft: 35,
  '::placeholder':{
  	color: lightGray3, 	
  }
})

const InputContainer = glamorous.div({
	position: `relative`,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`,
	marginRight: 51,
	'& img':{
		position: `absolute`,
		left: 13,
		height: `50%`
	}
})

const AccountContainer = glamorous.div({
	display: `flex`,
	flexDirection: `center`,
	alignItems: `center`,
	justifyContent: `center`,
	'& a':{
		marginRight: 19
	}
})

const A = glamorous.a({
	fontFamily: `Menlo`,
  fontSize: 10,
  fontWeight: `normal`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: `normal`,
  letterSpacing: -0.3,
  color: greyEight,
  '&:focus':{
  	color: greyEight
  },
  '&:visited':{
  	color: greyEight
  }
})

const Wrapper = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `flex-end`
})

const H1 = glamorous.h1({
	color: blue,
	fontFamily: `Stolzl-Bold`,
  fontSize: 28,
})

const List = glamorous.ul({
	margin:0,
	padding: 0
})

const Li = glamorous.li({
	display: `inline`,
	cursor: `pointer`,
	'&:nth-child(2)':{
		borderRight: `1px solid ${greyEight}`,
		borderLeft: `1px solid ${greyEight}`,
		margin: `0 10px`,
		padding: `0 10px`
	},
})