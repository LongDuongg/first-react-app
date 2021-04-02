import './sign-up.scss';
import {SignUpHeader} from './sign-up-header';
import {SignUpAdd} from './sign-up-add';
import {SignUpButton} from './sign-up-button';

export const SignUp = ({}) => {
    return (
        <div className='form-container sign-up-container'>
            <form action="#">
                <SignUpHeader/>
                <SignUpAdd/>
                <SignUpButton/>
            </form>
        </div>
    )
}
