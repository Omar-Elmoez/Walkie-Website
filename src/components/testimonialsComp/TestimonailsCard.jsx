import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import "./TestimonailsCard.css";

export default function TestimonailsCard() {
  // Get the Slider elements in array.
  React.useEffect(() => {
    let current_element = 0;

    const slider_elements = Array.from(
      document.querySelectorAll(".cards__container .testimonials__card")
    );
    
    const dots_array = Array.from(
      document.querySelectorAll('.testimonials__dots span')
    );

    slider_elements[current_element].classList.add('active');
    dots_array[current_element].classList.add('active');
    
    for(let i = 0; i < dots_array.length; i++) {
      dots_array[i].onclick = (e) => {
        current_element = +e.target.dataset.index;
        updateSlider();
      }
    }

    let next_btn = document.getElementById('right_arrow');
    let prev_btn = document.getElementById('left_arrow');

    next_btn.onclick = nextSlide;
    prev_btn.onclick = prevSlide;

    function nextSlide() {
      current_element++;
      if(current_element >= slider_elements.length) {
        current_element = slider_elements.length - 1
      }
      updateSlider();
    }
    function prevSlide() {
      current_element--;
      if(current_element < 0) {
        current_element = 0;
      }
      updateSlider();
    }
    function updateSlider() {
      slider_elements.forEach(item => item.classList.remove('active'));
      slider_elements[current_element].classList.add('active');
      dots_array.forEach(item => item.classList.remove('active'));
      dots_array[current_element].classList.add('active');
    }
  });


  return (
    <div className="container testimonials">
      <h3>Testimonials</h3>
      <div className="cards-slider">
        <div className="cards__container">
          <div className="testimonials__card">
            <div className="container testimonials__card__info">
              <div className="testimonials__card__header">
                <img src="/imgs/testimonialsImg.svg" alt="person" />
                <h4>Lolo</h4>
                <div className="testimonails__stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaRegStar className="star" />
                </div>
              </div>
              <p>
                The cab was waiting at our apartment as requested for 4:45am
                Morning. Driver was professional and ride was smooth.
                Reservation was simple and quick. Highly recommend without a
                doubt.
              </p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="container testimonials__card__info">
              <div className="testimonials__card__header">
                <img
                  src="/imgs/maleImg.svg"
                  alt="person"
                  className="testimonials__card_maleImg"
                />
                <h4>John Doe</h4>
                <div className="testimonails__stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaRegStar className="star" />
                </div>
              </div>
              <p>
                The cab was waiting at our apartment as requested for 4:45am
                Morning. Driver was professional and ride was smooth.
                Reservation was simple and quick. Highly recommend without a
                doubt.
              </p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="container testimonials__card__info">
              <div className="testimonials__card__header">
                <img src="/imgs/testimonialsImg.svg" alt="person" />
                <h4>Sara</h4>
                <div className="testimonails__stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaRegStar className="star" />
                </div>
              </div>
              <p>
                The cab was waiting at our apartment as requested for 4:45am
                Morning. Driver was professional and ride was smooth.
                Reservation was simple and quick. Highly recommend without a
                doubt.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonials__dots" id="testimonials__dots">
          <span data-index='0'></span>
          <span data-index='1'></span>
          <span data-index='2'></span>
        </div>
        <div
          className="arrowBx rightArrow"
          id="right_arrow"
        >
          <HiArrowSmRight className="icon" />
        </div>
        <div className="arrowBx leftArrow" id="left_arrow">
          <HiArrowSmLeft className="icon" />
        </div>
      </div>
    </div>
  );
}
