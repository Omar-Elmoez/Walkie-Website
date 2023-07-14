import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import './Footer.css';

export default function Footer() {

    const date = new Date();


    return (
        <footer className='footer'>
            <div className='container footer__content'>
                <div className="footer__basicInfo">
                    <h4 className='logo'>wa<span>l</span>k<span>i</span>e</h4>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className='footer__text'>visita.com's brand is ranked #588 in the list of Global Top 1000 Brands, as rated by customers of visita.com</p>
                </div>
                <div className="footer__explore">
                    <h4>Explore</h4>
                    <div className="footer__explore_lists">
                        <ul>
                            <li>Home</li>
                            <li>Reels</li>
                            <li>Community</li>
                            <li>More</li>
                        </ul>
                        <ul>
                            <li>Help</li>
                            <li>Terms And Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__followUs">
                    <h4>Follow Us</h4>
                    <div className="footer__followUs_icons">
                        <FaInstagram />
                        <FaWhatsapp />
                        <FaTwitter />
                        <FaFacebookF />
                        <FaYoutube />
                        <FaTiktok />
                    </div>
                </div>
            </div>
            <p className="footer__copyright">© All Right Reserved {date.getFullYear()}</p>
        </footer>
    );
}