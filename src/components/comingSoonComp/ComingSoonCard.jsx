/* eslint-disable react/prop-types */
import './ComingSoonCard.css';

export default function ComingSoonCard(props) {
    return (
        <div className='comingCard'>
            <img src={`/imgs/place${props.img}.svg`} alt="cairo tower" />
            <div className='comingCard__text'>
                <h3>cairo tower <span>sat, jan18 at 8pm</span></h3>
                <p>zmalek, cairo</p>
            </div>
            <button>Details</button>
        </div>
    );
}