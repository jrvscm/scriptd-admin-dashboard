import React from 'react';
import glamorous from 'glamorous';

import TopBar from '../TopBar';
import TrendingStories from './containers/TrendingStories';
import StoriesByGenre from './containers/StoriesByGenre';
import FeaturedAuthors from './containers/FeaturedAuthors';
import { grey } from '../../colors';

const Dashboard = () => (
	<Container>
		<TopBar title={'Analytics Dashboard'}/>
		<TrendingStories />
		<StoriesByGenre />
		<FeaturedAuthors />
	</Container>
)

export default Dashboard;

const Container = glamorous.div({
	height: `100%`,
	width: `100vw`,
	backgroundColor: grey
})