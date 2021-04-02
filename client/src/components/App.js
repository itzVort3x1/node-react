import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const Survey = () => <h2>Survey</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return(
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/' exact component={Landing}/>
                    <Route path='/dashboard' exact component={Dashboard}/>
                    <Route path='/Survey' exact component={Survey}/>
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;