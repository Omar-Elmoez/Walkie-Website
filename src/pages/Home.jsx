/* eslint-disable react/no-unescaped-entities */
import LandingElement from '../components/landingComp/Landing';
import Places from '../components/placesComp/Places';
import CafeCard from '../components/cafeCardComp/Card';
import CafeAndRest from '../components/cafeAndRestComp/CafeAndRest';
import TestimonailsCard from '../components/testimonialsComp/TestimonailsCard';
import Footer from '../components/footerComp/Footer';
import './Home.css';

export default function Home() {
    return (
        <>
            <LandingElement />
            <div className='welcomeDiv'>
                <div className='welcomeDiv__content'>
                    <h2 className='welcomeDiv__heading'>welcome to <span>Ismalia</span> mahmoud....</h2>
                    <p className='welcomeDiv__para'><span>Welcome</span> to our beautiful city! We're excited to have you here. Explore our local attractions, taste our delicious cuisine, and immerse yourself in our unique culture. Enjoy your visit and make unforgettable memories !</p>
                </div>
            </div>
            <Places content='1' />
            <CafeCard />
            <Places content='2' />
            <CafeAndRest heading='top cafes in ismalia' group='1' />
            <div className='discount'>
                <div className='discount__content'>
                    <img src="/imgs/family.svg" alt="group of people" />
                    <div className='discount__text'>
                        <h3>Save <span>15%</span> or more</h3>
                        <p>Plan your dream trip with a Getaway Deal</p>
                    </div>
                    <div className='discount__info'>
                        <img src="/imgs/discount.svg" alt="dicount value" />
                        <button>Details</button>
                    </div>
                </div>
            </div>
            <CafeAndRest heading='top restaurants in ismalia' group='1' />
            <CafeAndRest heading='events will coming soon ' group='2' />
            <div className='container worldDiv'>
                <h3>Global coverage in over 200 cafe, resturants and other places in ismalia</h3>
                <div className='world__imgbx'>
                    <img src="/imgs/world.svg" alt="world" />
                </div>
            </div>
            <TestimonailsCard />
            <Footer />
        </>
    );
}