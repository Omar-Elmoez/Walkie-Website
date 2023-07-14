/* eslint-disable react/no-unescaped-entities */
import './OurData.css';

export default function OurData() {
    return (
        <div className='container ourDataDiv'>
            <div className='dataBox'>
                <div className='container dataBox__content'>
                    <h2 className='dataBox__heading'>Our Story</h2>
                    <div className='dataBox__textBx'>
                        <p className='dataBox__firstPara'>In our story section, we share our passion for Egypt and our desire to showcase the beauty of its local businesses and tourism. Our founders have a deep connection to Egypt and its people, and they wanted to create a platform that would support and promote the country's unique culture and heritage.</p>
                        <p className='dataBox__secondPara'>Through our website, we aim to encourage visitors to explore Egypt's hidden gems and experience its warm hospitality firsthand. We believe that by supporting local businesses and tourism, we can help to create a brighter future for Egypt and its people. Join us on this journey of discovery and adventure in Egypt !</p>
                    </div>
                </div>
            </div>

            <div className='dataBox'>
                <div className='container dataBox__content'>
                    <h2 className='dataBox__heading'>Our Value</h2>
                    <div className='dataBox__textBx'>
                        <p className='dataBox__firstPara'>Our values are at the core of everything we do. We are committed to sustainability and believe in preserving Egypt's natural beauty for future generations. We also prioritize supporting local communities and businesses, as we believe that they are the heart and soul of Egypt's economy and culture. We are passionate about showcasing the best of Egypt's culture and heritage, and we believe in representing the country in an authentic and respectful way. Finally, we are dedicated to providing our visitors with the best possible experience, from the moment they arrive on our website to the time they spend exploring Egypt's many treasures.</p>
                    </div>
                </div>
            </div>

            <div className='dataBox'>
                <div className='container dataBox__content'>
                    <h2 className='dataBox__heading'>Our Team</h2>
                    <div className='dataBox__teamBx'>
                        <div>
                            <img src="/imgs/maleImg.svg" alt="team memeber" />
                            <span>mahmoud ali</span>
                        </div>
                        <div>
                            <img src="/imgs/maleImg.svg" alt="team memeber" />
                            <span>khalid ibrahim</span>
                        </div>
                        <div>
                            <img src="/imgs/femaleImg.svg" alt="team memeber" />
                            <span>nada maged</span>
                        </div>
                        <div>
                            <img src="/imgs/maleImg.svg" alt="team memeber" />
                            <span>mohamed mossad</span>
                        </div>
                        <div>
                            <img src="/imgs/maleImg.svg" alt="team memeber" />
                            <span>ahmed silem</span>
                        </div>
                        <div>
                            <img src="/imgs/maleImg.svg" alt="team memeber" />
                            <span>mustafa mahmoud</span>
                        </div>
                        <div>
                            <img src="/imgs/maleImg.svg" alt="team memeber" />
                            <span>isalm mohamed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}