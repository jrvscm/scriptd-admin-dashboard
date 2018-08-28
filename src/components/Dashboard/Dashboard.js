import React from 'react';
import glamorous from 'glamorous';

import TopBar from './TopBar';
import { grey } from '../../colors';

const Dashboard = () => (
	<Container>
		<TopBar />
	</Container>
)

export default Dashboard;

const Container = glamorous.div({
	height: `100vh`,
	width: `100vw`,
	backgroundColor: grey
})