import './sign-up-add.scss';


export const SignUpAdd = ({}) => {
    return (
        <form>
            <div className='form-control'>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
            </div>
        </form>
    )
}
  