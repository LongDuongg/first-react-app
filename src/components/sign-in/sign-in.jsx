import './sign-in.scss';
import {SignInHeader} from './sign-in-header';
import {SignInAccess} from './sign-in-access';
import {SignInButton} from './sign-in-button';

export const SignIn = ({}) => {
    return (
        <div className='sign-in-container'>
            <SignInHeader/>
            <SignInAccess/>
            <SignInButton/>
        </div>
    )
}
  



