import './sign-in-header.scss';


export const SignInHeader = ({title='Sign In'}) => {
    return (
        <header className='sign-in-header'>
            <h1>{title}</h1>
        </header>
    )
}
