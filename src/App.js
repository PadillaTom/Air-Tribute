import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Main:
function App() {
  // Return:
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          {/* Search Page */}
          <Route path='/search'>
            <SearchPage></SearchPage>
          </Route>
          {/* End Search Page */}
          {/* Home Page */}
          <Route path='/' exact>
            <Home></Home>
          </Route>
          {/* End Home */}
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
