import React from 'react';
import './App.css';
import ProfilePage from './components/profile/ProfilePage'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ButtonPage from './components/button/ButtonPage';
import ThemePage from './components/theme/ThemePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "#a4a4a4"
    };
  }

  handleColorChange = (color) => {
    this.setState({backgroundColor: color});
  }

  render() {
    const { backgroundColor } = this.state;

    return (
      <Router>
        <div style={{backgroundColor: backgroundColor}}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/theme">Theme</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <div>This is the home page</div>
            </Route>
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/buttons" component={ButtonPage} />
            <Route exact path="/theme" >
              <ThemePage onColorChange={this.handleColorChange} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
