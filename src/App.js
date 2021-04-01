// import logo from './logo.svg';
import './App.scss';
import {SignUp} from './components/sign-up/sign-up';
import {SignIn} from './components/sign-in/sign-in';

function App({}) {
  return (
    <div className='container'>
      <SignUp/>
      <SignIn/>  
    </div>
  )
}

export default App