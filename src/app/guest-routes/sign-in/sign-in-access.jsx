import './sign-in-access.scss';


export const SignInAccess = ({}) => {
    return (
        <form>
            <div className='form-control'>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
            </div>
        </form>
    )
}
