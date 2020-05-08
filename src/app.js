import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './Router/AppRouter';
import 'normalize.css/normalize.css'; // this module resets the css browser configurations to the default settings.
import './styles/styles.scss'; // loades the styles file which we configured webpack to read in bwepack config file.
import configureStore from './store/configureStore';

const store = configureStore() ;



const jsx = ( 

	<Provider store={store}> 
		<AppRouter />
	</Provider>

)


ReactDOM.render(jsx,document.getElementById('app'));