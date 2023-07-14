/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { HiSearch } from "react-icons/hi";
import { FaRegHandPointUp, FaCheck } from "react-icons/fa";
import './Places.css';


export default function Places(props) {
    return (
        <div className='placesDiv'>
            <div className='container'>
                <h3 className='placesDiv__heading'>Discover places in ismalia city</h3>

                {props.content === '1' && <div className='placesDiv__imgs'>
                    <div className="placesDiv__imgs_firstgroup">
                        <div className='placesDiv__imgBox'>
                            <img src="/imgs/pic1.svg" alt="museum" />
                            <div className='placesDiv__info'>
                                <h4>ismailia museum</h4>
                                <p>This museum offers a vast collection......</p>
                            </div>
                        </div>
                        <div className='placesDiv__imgBox'>
                            <img src="/imgs/pic2.svg" alt="hotel" />
                            <div className='placesDiv__info'>
                                <h4>Tolip EL Forsan</h4>
                                <p>Tolip El Forsan Hotel has a restaurant, fitness centre.......</p>
                            </div>
                        </div>
                        <div className='placesDiv__imgBox'>
                            <img src="/imgs/pic3.svg" alt="restaurant" />
                            <div className='placesDiv__info'>
                                <h4>El Sala Ala ElNaby</h4>
                                <p>Fine dining is an all-encompassing experience that includes elegant......</p>
                            </div>
                        </div>
                    </div>
                    <div className="placesDiv__imgs_secondgroup">
                        <div className='placesDiv__imgBox'>
                            <img src="/imgs/pic4.svg" alt="hotel" />
                            <div className='placesDiv__info'>
                                <h4>Mercure Ismailia</h4>
                                <p>mercure El Forsan Hotel has a restaurant, fitness centre.......</p>
                            </div>
                        </div>
                        <div className='placesDiv__imgBox'>
                            <img src="/imgs/pic5.svg" alt="restaurant" />
                            <div className='placesDiv__info'>
                                <h4>Darb Shakamba Ismailia</h4>
                                <p>Fine dining is an all-encompassing experience that includes elegant......</p>
                            </div>
                        </div>
                    </div>
                </div>}

                {props.content === '2' && 
                <div className="secondContent">
                    <div className='placesDiv__imgCards'>
                        <div>
                            <img src="/imgs/cafe.svg" alt="cafe" />
                            <h3>Cafes</h3>
                            <p>200 Cafe</p>
                        </div>
                        <div>
                            <img src="/imgs/restaurant.svg" alt="restaurant" />
                            <h3>Restaurants</h3>
                            <p>50 Restaurant</p>
                        </div>
                        <div>
                            <img src="/imgs/museum.svg" alt="museum" />
                            <h3>Museums</h3>
                            <p>2 Museum</p>
                        </div>
                        <div>
                            <img src="/imgs/hotel.svg" alt="hotel" />
                            <h3>Hotels</h3>
                            <p>5 Hotel</p>
                        </div>
                    </div>
                    <div className="secondContent__icons">
                        <div>
                            <div className="iconBox">
                                <HiSearch className="icon" />
                            </div>
                            <h4>Search</h4>
                            <p>Let us know where you'd like to go.</p>
                        </div>
                        <div>
                            <div className="iconBox">
                                <FaRegHandPointUp className="icon" />
                            </div>
                            <h4>Choose</h4>
                            <p>We'll show you options,<br /> choose the right one for you.</p>
                        </div>
                        <div>
                            <div className="iconBox">
                                <FaCheck className="icon" />
                            </div>
                            <h4>Go</h4>
                            <p>Let’s go and explore more places</p>
                        </div>
                    </div>
                </div>}

            </div>
        </div>
    );
}