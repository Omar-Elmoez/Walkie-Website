import './Hero.css'

export default function Hero() {
    return (
        <div className="container heroDiv">
            <div className="heroDiv__info">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2 className="heroDiv__info_heading">"Discover the Rich Culture and Vibrant Communities of <span>Egypt with Us"</span></h2>
                <p className="heroDiv__info_text">Welcome to our website, where we are dedicated to promoting local businesses and tourism in Egypt. Egypt is a land of ancient history and modern charm, with a rich culture and vibrant communities waiting to be explored. We offer a unique perspective on Egypt, showcasing the best of what this beautiful country has to offer. From the bustling streets of Cairo to the tranquil shores of the Red Sea, we invite you to discover the hidden gems and experience the warmth and hospitality of the Egyptian people. Join us on a journey of discovery and adventure in Egypt!</p>
            </div>
            <div className='heroDiv__imgBx'>
                <img src="/imgs/heroImg.svg" alt="nice Building" />
            </div>
        </div>
    );
}