import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
})