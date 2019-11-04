import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../src/components/App'
import './styles/table.scss'

<<<<<<< HEAD
render(<Router><App /></Router>, document.getElementById('app'));
=======
render(<Router>
    <App />
</Router>,
    document.getElementById('app'));
>>>>>>> ft(get-all-engineers): as an LF I should be able to get all enginee
