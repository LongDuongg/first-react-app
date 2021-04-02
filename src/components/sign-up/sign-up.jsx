import './sign-up.scss';
import {SignUpHeader} from './sign-up-header';
import {SignUpAdd} from './sign-up-add';
import {SignUpButton} from './sign-up-button';

export const SignUp = ({}) => {
    return (
        <div className='sign-up-container'>
            <SignUpHeader/>
            <SignUpAdd/>
            <SignUpButton/>
        </div>
    )
}
 