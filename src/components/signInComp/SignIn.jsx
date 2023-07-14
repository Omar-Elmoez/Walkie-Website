import { FaEye } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import './signInStyle.css';

export default function SignIn() {

        
    return (
        <main className='main'>
            <h2 className='main__heading'>Sign Up</h2>
            <div className="main__content">
                <div className='signInBox'>
                    <h3 className='signInBox__heading'>Sign In</h3>
                    <form className='signInBox__form'>
                        <input type="email" name="user-email" placeholder="Email" />
                        <div className="signInBox__passwordInfo">
                            <input type="password" name="user-password" placeholder="Password" />
                            <span className='singInBox__forgetPass'>Forget Password</span>
                            <FaEye className="signInBox__icon" />
                        </div>
                        <button className='signInBox__btn'>Sign In</button>
                        <div className="signInBox__Or">Or</div>
                        <div className="signInBox__social">
                            <span>Login With</span>
                            <FaFacebookSquare className="icon signInBox__social_facebook" />
                            <FaGooglePlusG className="icon signInBox__social_google" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}