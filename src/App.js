import React from 'react';
import './App.css';
import data from "./movies";
import './index';
import MoviesList from './components/Movies/List';

const App = props => <MoviesList data={data} />;

export default App;
