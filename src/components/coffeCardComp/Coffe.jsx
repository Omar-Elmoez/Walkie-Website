/* eslint-disable react/prop-types */
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";

import './Coffe.css';

export default function CoffeCard(props) {

    const heading = props.title.split(' ');

    return (
        <div className='coffeCard'>
            <img src="/imgs/coffe.svg" alt="coffe" />
            <div className='coffeCard__text'>
                <h3><span>{heading[0]}</span> {heading[1]}</h3>
                <p>Coffee combining espresso with steamed , frothy Milk</p>
                <FaRegHeart className="coffeCard__heart" />
            </div>
            <div className="coffeCard__stars">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaRegStar className="star" />
                <span>4.5</span>
            </div>
        </div>
    );
}