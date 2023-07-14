import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import './Contact.css'

export default function ContactUs() {
    return (
        <main className='contact'>
            <div className='container'>
                <h2 className='contact__heading'>Contact Us</h2>
                <p className='contact__txt'>Any question or remarks? Just write us a message!</p>
            </div>
            <div className='container contact__box'>
                <div className='container contact__detailsBox'>
                    <div className='contact__info'>
                        <h3 className='container contact__info_heading'>Contact Information</h3>
                        <p className='container contact__info_text'>Say something to start a live chat!</p>
                        <div className="container contact__infoBox">
                            <div className='contact__info_way'>
                                <MdPhoneInTalk className="icon" />
                                <span>+1012 3456 789</span>
                            </div>
                            <div className='contact__info_way'>
                                <MdEmail className="icon" />
                                <span>demo@gmail.com</span>
                            </div>
                        </div>
                        <div className="container contact__socialBox">
                            <FaTwitter className="icon" />
                            <FaInstagram className="icon" />
                            <FaDiscord className="icon" />
                        </div>
                    </div>
                    <div className='contact__formBox'>
                        <form className="contact__form">
                            <div className="contact__form_inputBox">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" name="firstName" id="first-name" />
                            </div>
                            <div className="contact__form_inputBox">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" name="lastName" id="last-name" />
                            </div>
                            <div className="contact__form_inputBox">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="contact__form_inputBox">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" name="phone" id="phone" />
                            </div>
                            <div className="contact__form_selectBox">
                                <h3>Select Subject?</h3>
                                <div className="contact__form_selectOptionsBx">
                                    <div className="contact__form_selectOption">
                                        <input type="radio" name="subject" value='general-inquiry' id="option1" />
                                        <label htmlFor="option1">General<br />Inquiry</label>
                                    </div>
                                    <div className="contact__form_selectOption">
                                        <input type="radio" name="subject" value='general-inquiry' id="option2" />
                                        <label htmlFor="option2">General<br />Inquiry</label>
                                    </div>
                                    <div className="contact__form_selectOption">
                                        <input type="radio" name="subject" value='general-inquiry' id="option3" />
                                        <label htmlFor="option3">General<br />Inquiry</label>
                                    </div>
                                    <div className="contact__form_selectOption">
                                        <input type="radio" name="subject" value='general-inquiry' id="option4" />
                                        <label htmlFor="option4">General<br />Inquiry</label>
                                    </div>
                                </div>
                            </div>
                            <div className="contact__form_inputBox form__message">
                                <label htmlFor="message">Message</label>
                                <input type="text" name="message" id="message" placeholder="Write Your Message"/>
                            </div>
                            <button className="contact__form_btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}