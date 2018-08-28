import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
//import mixpanel from 'mixpanel-browser';
//import ReactGA from 'react-ga';

class RouteListener extends Component {
	
	componentDidMount() {
		this.routeChanged();
	}

	componentDidUpdate(prevProps) {
    let { location: { pathname } } = this.props

    if (prevProps.location.pathname === pathname) return
    this.routeChanged()		
	}

	routeChanged () {
    let { location, push, replace, actions } = this.props
		const properties = {location: location.pathname}
    console.log({location: location.pathname})
   	//mixpanel.track('Page_Viewed', properties)
   	//ReactGA.initialize('UA-000000-01');
    //ReactGA.pageview(location.pathname)
  }

	render() {
		return null
	}
}

export default compose(
	withRouter,
	connect()
)(RouteListener)