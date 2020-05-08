
import {Router, Route,Switch,BrowserRouter } from 'react-router-dom'
import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import loadAppDefaultState from '../components/tools/loadAppDefaultState';
import Menu from '../components/Menu';
import MenuMob from '../components/MenuMob';
import Footer from '../components/Footer';
import Injector from '../components/Injector';
import dispatcher from '../components/tools/dispatcher';
import { changeRoute, changePageType } from '../actions/router';
import PdpHeader from '../components/product-details-page/PdpHeader';
import history from '../components/tools/history';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';

class AppRouter extends React.Component {
    
    constructor(props){
			super(props)
    }

    componentWillMount = () => loadAppDefaultState(this.props.dispatch, '/');
    
    render(){
        return (
        <Router history={history} >
          <div className="app-container" >
            <Header />
            <Menu />
            <MenuMob />
            <Cart />
            <PdpHeader />
            <div id="component-container" className="component-container" >
            <Switch>
              <Route  path="/checkout" component={Checkout} exact={true}/>
              <Route  path="/collections/:artist" render={({location})=>{
                dispatcher(this.props.dispatch, changeRoute, location.pathname);
                dispatcher(this.props.dispatch, changePageType, 'plp');
                return <Injector type='plp' path={location.pathname} />
              }} exact={true}/>
              <Route  path="/collections/:artist/:productId" render={({location})=>{
                dispatcher(this.props.dispatch, changeRoute, location.pathname);
                dispatcher(this.props.dispatch, changePageType, 'pdp');
                return <Injector type='pdp' path={location.pathname} />
              }} exact={true}/>
              <Route  path="/support/:routeId" render={({location})=>{
                dispatcher(this.props.dispatch, changeRoute, location.pathname);
                dispatcher(this.props.dispatch, changePageType, 'support');
                return <Injector type='support' path={location.pathname} />
              }} />
              <Route  path="/" render={({location})=>{
                dispatcher(this.props.dispatch, changeRoute, location.pathname);
                dispatcher(this.props.dispatch, changePageType, 'dynamic');
                return <Injector type='dynamic' path={location.pathname} />
              }} />
            </Switch>
            </div>
            <Footer />
            <div className="c-header black"> CopyRight - Bari Gallery | All Right Reserved </div>
          </div>
        </Router>
        
        )
    }
} ;


export default connect()(AppRouter);
