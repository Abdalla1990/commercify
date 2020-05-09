import { Router, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import loadAppDefaultState from '../components/tools/loadAppDefaultState';
import Menu from '../components/Menu';
import MenuMob from '../components/MenuMob';
import Footer from '../components/Footer';
import Injector from '../components/Injector';
import PdpHeader from '../components/product-details-page/PdpHeader';
import history from '../components/tools/history';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';

const AppRouter = (props) => {
	useEffect(() => {
		loadAppDefaultState(props.dispatch, '/');
	}, []);

	return (
		<Router history={history}>
			<div className='app-container'>
				<Header />
				<Menu />
				<MenuMob />
				<Cart />
				<PdpHeader />
				<div id='component-container' className='component-container'>
					<Switch>
						<Route path='/checkout' component={Checkout} exact={true} />
						<Route
							path='/collections/:artist'
							component={({ location }) => {
								return <Injector type='plp' path={location.pathname} />;
							}}
							exact={true}
						/>
						<Route
							path='/collections/:artist/:productId'
							component={({ location }) => {
								return <Injector type='pdp' path={location.pathname} />;
							}}
							exact={true}
						/>
						<Route
							path='/support/:routeId'
							component={({ location }) => {
								return <Injector type='support' path={location.pathname} />;
							}}
						/>
						<Route
							path='/'
							component={({ location }) => {
								return <Injector type='dynamic' path={location.pathname} />;
							}}
						/>
					</Switch>
				</div>
				<Footer />
				<div className='c-header black'>
					{' '}
					CopyRight - Bari Gallery | All Right Reserved{' '}
				</div>
			</div>
		</Router>
	);
};

export default connect()(AppRouter);
