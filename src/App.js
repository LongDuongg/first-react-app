// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Header} from './components/header';
import {SignUp} from './components/sign-up/sign-up';
import {SignIn} from './components/sign-in/sign-in';

function App({}) {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/'>
           <Header/>
          </Route>
        </Switch>

        <Switch>
          <Route path='/sign up'>
            <SignUp/>
          </Route>
        </Switch>
         
        <Switch>
          <Route path='/sign in'>
            <SignIn/>
          </Route>
        </Switch>     
      </div>
    </Router>
  )
}

export default App