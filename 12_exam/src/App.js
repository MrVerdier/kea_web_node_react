import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from "react-router-dom"
import useSocket from 'use-socket.io-client';
import { FaCocktail, FaSearch, FaUser, FaUserMinus } from 'react-icons/fa';

// CSS
import './App.css'

// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import CustomDrink from './components/Profile/CustomDrink'
import Search from './components/Search/Search'
import DrinkSingleview from './components/SingleView/DrinkSingleview'
import CustomDrinkSingleview from './components/SingleView/CustomDrinkSingleview'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'

function App() {
  const [socket] = useSocket('http://localhost:8080');
  socket.connect()
  
  const [user, setUser] = useState("");
  const [online, setOnline] = useState("")
  const [userInfo, setUserInfo] = useState("");
  // const [headerHeight, setHeaderHight] = useState(0)
  // const [top, setTop] = useState(0)

  // useEffect(() => {
  //   document.addEventListener('scroll', () => {
  //       setTop(window.scrollY)
  //   })
  //   if (top > 0) {
  //     setHeaderHight(-80)
  //   } else {
  //     setHeaderHight(0)
  //   }
  // },[top])

  
  useEffect(()=> {
      const getUserInfo = async ()=> {
        const result = await fetch(`/api/users/getuser`);
        const body = await result.json();
        
        if (result.ok) {
          setUserInfo(body)
        }
      }
      getUserInfo();
  }, []);
  
  useEffect(()=> {
      const loggedIn = async ()=> {
        const result = await fetch(`/api/getsession`);
        const body = await result.json();
        if (result.status === 200) {
            setUser( body.user_id )
        //     socket.emit('add-person', user);
            socket.on('total-online', function(userCounter){
              setOnline(userCounter)
            });
        }
      }
      loggedIn();
  }, [user, socket]);

  return (
    <div className="App">
      <Header online={online} />
      <Router>
      { user === undefined || user === "" ? (
        <nav>
            <div className="nav-link"><Link to="/login">Login</Link></div>
            <div className="nav-link"><Link to="/signup">Signup</Link></div>
        </nav>
        ) : 
        (
          <nav>
              <div className="nav-link"><Link to="/"><FaCocktail /></Link></div>
              <div className="nav-link"><Link to="/search"><FaSearch /></Link></div>
              <div className="nav-link"><Link to="/profile"><FaUser /></Link></div>
              <div className="nav-link"><Link to="/logout"><FaUserMinus /></Link></div>
          </nav>
        ) }
        <div className="page">
          <Switch>
            <Route exact path="/drinksingleview/:drinkid" component={DrinkSingleview}></Route>
            <Route exact path="/customdrinksingleview/:drinkid" component={CustomDrinkSingleview}></Route>
            <Route path="/signup">
              { user === undefined || user === "" ? <Signup /> : <Redirect to="/" /> }
            </Route>
            <Route path="/login">
              { user === undefined || user === "" ? <Login /> :  <Redirect to="/" /> }
            </Route>
            <Route path="/logout">
              { user === undefined || user === "" ? <Login /> : <Logout user={userInfo} /> } 
            </Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/customdrink" component={CustomDrink}></Route>
            <Route path="/profile">
            { user === undefined || user === "" ? <Login /> : <Profile user={userInfo} /> }
            </Route>
            <Route path="/">
              { user === undefined || user === "" ? <Login /> : <Home user={userInfo} /> }
            </Route>
  
          </Switch>
        </div>
      </Router>
  
    </div>
  );
}

export default App
