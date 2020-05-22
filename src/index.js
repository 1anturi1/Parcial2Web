import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from 'react-intl';
import localeEs from "./locales/es";
import localeEn from "./locales/en"
import MoviesList from "./components/moviesList";

var lang = function() {
	if( navigator.language.includes("es")){
		return "es";
	} 
	else{
		return "en";
	}	
  }
  
var messages = function(){	
	if( lang().includes("es")){
		return localeEs ;
	}
	else{
		return localeEn;
	}
} 
ReactDOM.render(
  <IntlProvider locale={lang()} messages= {messages()}>
		<MoviesList/>
	</IntlProvider>, document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
