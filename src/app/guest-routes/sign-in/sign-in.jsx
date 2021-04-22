import {useState} from "react";
import './sign-in.scss';
import {SignInHeader} from './sign-in-header';
import {SignInAccess} from './sign-in-access';
import {SignInButton} from './sign-in-button';
import {cx} from "@emotion/css";

export const SignIn = (props) => {
    const [rightPanelActive, setRightPanelActive] = useState();
    return (
        <div 
            className={cx("sign-in-route-1b2", {'right-panel-active': rightPanelActive})} 
            id="container"
        >
            <div className="form-container sign-up-container">
                <form>
                    <h1>Tạo Tài Khoản</h1>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Đăng ký</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form>
                    <h1>Đăng Nhập</h1>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button
                        onClick={() => props.history.push("/route-1")}
                    >Đăng nhập</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Chào Mừng Quay Trở Lại</h1>
                        <p>
                            Để tiếp tục kết nối với chúng tôi,
                            xin hãy đăng nhập bằng thông tin cá
                            nhân của bạn
                        </p>
                        <button 
                            className="ghost" 
                            id="signIn"
                            onClick={() => setRightPanelActive(false)}
                        >Đăng Nhập</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Xin chào các bạn</h1>
                        <p>
                            Nhập thông tin cá nhân của bạn và
                            bắt đầu cuộc hành trình với chúng
                            tôi
                        </p>
                        <button 
                            className="ghost" 
                            id="signUp"
                            onClick={() => setRightPanelActive(true)}
                        >Đăng Ký</button>
                    </div>
                </div>
            </div>
       </div>
    )
}
   



