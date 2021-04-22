import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {Route1} from './auth-routes/route-1/route-1';
import {Route2} from './auth-routes/route-2/route-2';
import { SignIn } from './guest-routes/sign-in/sign-in';
import { StudentMarks } from './auth-routes/student-marks/student-marks';
import { Teacher } from './auth-routes/teacher/teacher';
import { Student } from './auth-routes/student/student';
import { Class } from './auth-routes/classes/class';
import { Timetable } from './auth-routes/timetable/timetable';
import { Subject } from './auth-routes/subjects/subject';

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
        <Route exact path='/' component={SignIn} />
        <Route exact path='/route-1' component={Route1}/>
        <Route exact path='/route-2' component={Route2}/>
        <Route exact path='/sign-in' component={SignIn}/>
        <Route exact path='/student-marks' component={StudentMarks}/>
        <Route exact path='/teacher' component={Teacher}/>      
        <Route exact path='/student' component={Student}/>
        <Route exact path='/class' component={Class}/>
        <Route exact path='/timetable' component={Timetable}/>
        <Route exact path='/subject' component={Subject}/>
      </Switch>
    </Router>
  )
};