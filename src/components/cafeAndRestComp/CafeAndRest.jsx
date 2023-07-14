/* eslint-disable react/prop-types */
import CoffeCard from '../coffeCardComp/Coffe';
import ComingSoonCard from '../comingSoonComp/ComingSoonCard';
import './CafeAndRest.css';

export default function CafeAndRest(props) {
    return (
        <div className='cafeAndRest' id='cafes'>
            <div className="container">
                <h3 className='placesDiv__heading'>{props.heading}</h3>
                {props.group === '1' && <div className='cards'>
                    <CoffeCard title = 'Karam El-Sham'/>
                    <CoffeCard title = 'Coffee Cauldron'/>
                    <CoffeCard title = 'Coffee Bloom'/>
                    <CoffeCard title = 'frio cafe'/>
                </div>}
                {props.group === '2' && <div className='cards'>
                    <ComingSoonCard img='One' />
                    <ComingSoonCard img='Two' />
                    <ComingSoonCard img='Three' />
                </div>}
                <button className='cafeAndRest__btn'>View All</button>
            </div>
        </div>
    );
}
