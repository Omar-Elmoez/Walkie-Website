import Header from '../headerComp/Header';
import { FaSearch, FaRegBell, FaHome, FaUsers } from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";
import { HiArrowUpTray } from "react-icons/hi2";
import { HiArrowSmRight } from "react-icons/hi";
import './Landing.css';

export default function Landing() {
    return (
        <div className="landingDiv">
            <Header page='signin' />
            <aside className='landingDiv__aside'>
                <div className='landingDiv__imgBx'>
                    <img src="/imgs/maleImg.svg" alt="user-photo" />
                </div>
                <ul className='landingDiv__list'>
                    <li><FaSearch /></li>
                    <li><FaRegBell /></li>
                    <li><FaHome /></li>
                    <li><BsCollectionPlayFill /></li>
                    <li><FaUsers /></li>
                    <li><HiArrowUpTray className='icon' /></li>
                </ul>
            </aside>
            <div className='container landingDiv__heroTxt'>
                <div>
                    <div className='landingDiv__greeting'>
                        <h2 className='landingDiv__greeting_heading'><span>Hi</span> Mahmoud</h2>
                        <img src="/imgs/waveHand.svg" alt="hand waving" />
                    </div>
                    <p className='landingDiv__greeting_para'><span>Welcome to our website,</span> where Egypt comes alive Explore the beauty of our country, rich in history and thrive Discover hidden gems</p>
                    <h3>Find The<br />Best <span>cafe</span><br />and <span>restaurants</span><br />now</h3>
                </div>
                <div className='landingDiv__heroTxt_cafes'>
                    <h2 className='landingDiv__heroTxt_cafes_heading'>Fantastic cafes</h2>
                    <p className='landingDiv__heroTxt_cafes_para'>The Social Grind is a cafe that aims to provide a warm and welcoming environment for people to socialize, work, and relax. The cafe features comfortable seating, a relaxed atmosphere, and high-quality coffee and food.</p>
                    <a href='#cafes'><button className='landingDiv__heroTxt_cafes_btn'>let’s go</button></a>
                    <div className='landingDiv__heroTxt_cafes_imgBx'>
                        <div>
                            <img src="/imgs/frioCafe.svg" alt="Cafe" />
                            <div className='landingDiv__heroTxt_cafes_name'>
                                <div>
                                    <p>frio cafe</p>
                                    <HiArrowSmRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='landingDiv__extraInfo'>
                <h4>One percentage cafe</h4>
                <p>The cafe has a cozy and inviting atmosphere with warm lighting, comfortable seating, and a mix of communal and individual tables. There are also several cozy corners with comfortable chairs and sofas,</p>
                <HiArrowSmRight className='icon' />
            </div>
        </div>
    );
}