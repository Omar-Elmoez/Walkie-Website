import { useState } from 'react';
import UserComment from '../userCommentComp/comment';
import { HiOutlineChevronRight, HiOutlineDotsVertical } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import "./Card.css";

export default function CafeCard() {
    const [isLess, setIsLess] = useState(false);
    function handleLess() {
        setIsLess(prevState => !prevState);
    }
    // =================== Active Follow Button ===================
    const [isClicked, setIsClicked] = useState(false);
    function handlefollow () {
        setIsClicked(prevState => !prevState);
    }
    const btnStyle = {
        backgroundColor: isClicked ? '#214E8A': 'transparent',
        width: isClicked ? '150px' : '100px',
        color: isClicked ? 'white' : '#214E8A'
    }
    // ===================

    // =================== Active Mini Menu ===================
    const [show, setShow] = useState(false);
    function handleShow() {
        setShow(prevState => !prevState);
    }
    // ===================

    // =================== Active reactions ===================
    const [heartCount, setHeartCount] = useState(0);
    const [shareCount, setShareCount] = useState(0);
    const [saveCount, setSaveCount] = useState(0);

    function handleHeart() {
        setHeartCount(prevState => prevState + 1);
    }
    function handleShare() {
        setShareCount(prevState => prevState + 1);
    }
    function handleSave() {
        setSaveCount(prevState => prevState + 1);
    }
    // ===================

    // =================== Add Comments To the page ===================
    const [comments, setComments] = useState([]);
    function handleInput() {
        let comment = document.getElementById('comment').value;
        setComments(prevState => [...prevState, comment]);
        document.getElementById('comment').value = "";
    }
    const userComments = comments.map((item, index) => {
        return <UserComment content={item} key={index} />
    })
    function clickEnter(e) {
        if(e.key === 'Enter') handleInput();
    }
    // ===================

    return (
        <div className="cafeCard">
            <div className="container cafeCard__contentBx">
                <div className="container cafeCard__info">
                    <div className="cafeCard__info_header">
                        <img src="/imgs/cardmale.svg" alt="person" />
                        <h2>usama</h2>
                        <h3>
                            <span>frio cafe</span>
                            <HiOutlineChevronRight className="icon" />
                        </h3>
                        <HiOutlineDotsVertical className="cardCafe__dots" onClick={handleShow} />
                        {show && <div className='cafeCard__miniMenu'>
                            <div>
                                <img src="/imgs/save.svg" alt="save" />
                                <div className="cafeCard__miniMenu_text">
                                    <h2>save post</h2>
                                    <p>add this to your saved items</p>
                                </div>
                            </div>
                            <div>
                                <img src="/imgs/hide.svg" alt="hide" />
                                <div className="cafeCard__miniMenu_text">
                                    <h2>hide post</h2>
                                    <p>see fewer posts like this</p>
                                </div>
                            </div>
                            <div>
                                <img src="/imgs/report.svg" alt="report" />
                                <div className="cafeCard__miniMenu_text">
                                    <h2>report post</h2>
                                    <p>i’m concerned about this post</p>
                                </div>
                            </div>
                            <div>
                                <img src="/imgs/link.svg" alt="copy" />
                                <h2>Copy Link</h2>
                            </div>
                        </div>}
                    </div>
                    <div className="cardCafe__img">
                        <img src="/imgs/cardCafeImg.svg" alt="mug" />
                    </div>
                    <div className="cardCafe__reaction">
                        <div className='cardCafe__reaction__firstBx'>
                            <div className="cardCafe__reactionIcons">
                                <div>
                                    <img src="/imgs/heart.svg" alt="heart" onClick={handleHeart} />
                                    <span>{heartCount}</span>
                                </div>
                                <div>
                                    <img src="/imgs/chat.svg" alt="talk" />
                                    <span>{userComments.length}</span>
                                </div>
                                <div>
                                    <img src="/imgs/forward.svg" alt="share" onClick={handleShare} />
                                    <span>{shareCount}</span>
                                </div>
                                <div>
                                    <img src="/imgs/save.svg" alt="save" onClick={handleSave} />
                                    <span>{saveCount}</span>
                                </div>
                            </div>
                            <div className="cardCafe__reactionComment">
                                <img src="/imgs/commentImg.svg" alt="female" />
                                <input type="text" placeholder="Add A Comment...." id='comment' onKeyDown={clickEnter} />
                                <button onClick={handleInput}><MdSend className='commentIcon' /></button>
                            </div>
                        </div>
                        <IoLocationOutline className="cafeCard__location" />
                        <div>
                            {userComments}
                        </div>
                    </div>
                    <div className="cafeCard__userInfo">
                        <div className="cafeCard__userInfo_header">
                            <h3>Usama_74</h3>
                            <button onClick={handlefollow} style={btnStyle}>{isClicked ? 'Following' : 'Follow'}</button>
                        </div>
                        <p>The Social Grind is a cafe that aims to provide a warm and welcoming environment for people to socialize, work, and relax.{isLess && 'The cafe features comfortable seating, a relaxed atmosphere, and high-quality coffee and food....' }<a href="#8" onClick={handleLess}>see {isLess ? 'less' : 'more'}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}