import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {Route1} from './auth-routes/route-1/route-1';
import {Route2} from './auth-routes/route-2/route-2';

function App({}) {
  return (
    <div className='teacher-app'>
      {Routes()}
    </div>
  )
}
export default App

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Route1} />
        <Route exact path='/route-1' component={Route1}/>
        <Route exact path='/route-2' component={Route2}/>
      </Switch>
    </Router>
  )
};