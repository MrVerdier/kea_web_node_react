import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css'
import EmailPage from './components/Emails/EmailPage'
// import HomePage from './components/Home/HomePage'
import LoginPage from './components/Login/LoginPage'
import withAuth from './withAuth'

function App(props) {
  console.log(props)
  return (
    <>
      <Router>  
          <div>
            <nav className="main-nav">
              <div>
                  <Link to="/login">Login</Link>
                </div>
                {/* <div>
                  <Link to="/">Home</Link>
                </div> */}
                <div>                
                  <Link to="/emails">Emails</Link>
                </div>
            </nav>
          </div>
        <Switch>
          <Route path="/login" component={LoginPage} exact />
          {/* <Route path="/" component={HomePage} exact /> */}
          <Route path="/emails" component={withAuth(EmailPage)} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App
