// import './header.scss';
import {Link} from 'react-router-dom';

export const Header = ({title='Acme Web Design', subTitle1='Home', subTitle2='Sign In', subTitle3='Sign Up'}) => {
    return (
        <header>
            <div class="container">
                <h1>{title}</h1>
                <ul>
                    <li class="current"><Link to="/">{subTitle1}</Link></li>
                    <li><Link to="sign in">{subTitle2}</Link></li>
                    <li><Link to="sign up">{subTitle3}</Link></li>
                </ul>
            </div> 
        </header>
    )
}
