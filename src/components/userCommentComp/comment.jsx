/* eslint-disable react/prop-types */
import './comment.css';

export default function Comment(props) {
    return (
        <div className='userComment'>
            <img src="/imgs/commentImg.svg" alt="female" />
            <p>{props.content}</p>
        </div>
    );
}