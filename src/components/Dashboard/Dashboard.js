import React from 'react';
import glamorous from 'glamorous';

import TopBar from './TopBar';
import TrendingStories from './containers/TrendingStories';
import StoriesByGenre from './containers/StoriesByGenre';
import { grey } from '../../colors';

const Dashboard = () => (
	<Container>
		<TopBar />
		<TrendingStories />
		<StoriesByGenre />
	</Container>
)

export default Dashboard;

const Container = glamorous.div({
	height: `100vh`,
	width: `100vw`,
	backgroundColor: grey
})