import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
function Teastimonial2() {
  const testimonialSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    roundLengths: true,
    navigation: false,
    pagination: {
      el: ".swiper-pagination2",
      clickable: "true",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <>
      <div className="testimonial-section2 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title2 primary3">
                <span>-Testimonial-</span>
                <div>
                  <h3>Our Client Feedback</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center position-relative">
            <Swiper
              {...testimonialSlider}
              className="swiper testimonial-slider2 swiper-fix"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single2 hover-border2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <div className="quote">
                      <img
                        alt="image"
                        src="assets/images/icons/quote-white.svg"
                        className="quote-icon"
                      />
                    </div>
                    <img
                      src="assets/images/bg/testi2-bg.svg"
                      alt="image"
                      className="testi2-bg"
                    />
                    <div className="author">
                      <div className="author-img">
                        <img  src="assets/images/bg/testi1.png" alt="image" />
                      </div>
                      <div className="author-desig">
                        <h5>James C.</h5>
                        <p>Chief Operating Officer (COO)</p>
                      </div>
                    </div>
                    <p className="para">
                      Working with Tovuti was an absolute pleasure.
                      They completely revamped our website, making it more user-friendly and visually appealing.
                      Their e-commerce solutions helped increase our online sales significantly.
                      The digital marketing strategies they implemented drove a lot of traffic to our site,
                      resulting in a noticeable boost in conversions. Highly recommended!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single2 hover-border2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <div className="quote">
                      <img
                        alt="image"
                        src="assets/images/icons/quote-white.svg"
                        className="quote-icon"
                      />
                    </div>
                    <img
                      src="assets/images/bg/testi2-bg.svg"
                      alt="image"
                      className="testi2-bg"
                    />
                    <div className="author">
                      <div className="author-img">
                        <img  src="assets/images/bg/testi2.png" alt="image" />
                      </div>
                      <div className="author-desig">
                        <h5>Sarah M.</h5>
                        <p>Marketing Director</p>
                      </div>
                    </div>
                    <p className="para">
                      I worked with Henri, he provided exceptional service from start to finish.
                      He listened to our needs, proposed solutions and together with the team at Tovuti,
                      they delivered a website that exceeded our expectations.
                      Their expertise in e-commerce and digital marketing is evident in the results we've seen.
                      Our online presence has never been stronger, and our sales have soared. Thank you for your outstanding work!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single2 hover-border2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <div className="quote">
                      <img
                        alt="image"
                        src="assets/images/icons/quote-white.svg"
                        className="quote-icon"
                      />
                    </div>
                    <img
                      src="assets/images/bg/testi2-bg.svg"
                      alt="image"
                      className="testi2-bg"
                    />
                    <div className="author">
                      <div className="author-img">
                        <img  src="assets/images/bg/testi3.png" alt="image" />
                      </div>
                      <div className="author-desig">
                        <h5>Michael B</h5>
                        <p>Brand Manager</p>
                      </div>
                    </div>
                    <p className="para">
                      I can't say enough good things about Tovuti. Their team is professional, knowledgeable,
                      and always ready to help. They created a stunning website for our business and optimized it for search engines,
                      which has greatly improved our visibility online.
                      Their digital marketing campaigns are top-notch and have brought in a steady stream of new customers.
                      We couldn't be happier!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single2 hover-border2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <div className="quote">
                      <img
                        alt="image"
                        src="assets/images/icons/quote-white.svg"
                        className="quote-icon"
                      />
                    </div>
                    <img
                      src="assets/images/bg/testi2-bg.svg"
                      alt="image"
                      className="testi2-bg"
                    />
                    <div className="author">
                      <div className="author-img">
                        <img  src="assets/images/bg/testi4.png" alt="image" />
                      </div>
                      <div className="author-desig">
                        <h5>Emma T.</h5>
                        <p>E-Commerce Strategist</p>
                      </div>
                    </div>
                    <p className="para">
                      Choosing Tovuti was one of the best decisions we've made for our business.
                      They built a beautiful, functional e-commerce website that has transformed the way we do business online.
                      Anais was knew exactly what problem I had and proposed functional digital marketing plan for our business.
                      Their digital marketing expertise has been invaluable, driving targeted traffic and increasing our sales.
                      The team is responsive, creative, and truly cares about their clients' success.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                      className="testimonial-single2 hover-border2 wow fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                  >
                    <div className="quote">
                      <img
                          alt="image"
                          src="assets/images/icons/quote-white.svg"
                          className="quote-icon"
                      />
                    </div>
                    <img
                        src="assets/images/bg/testi2-bg.svg"
                        alt="image"
                        className="testi2-bg"
                    />
                    <div className="author">
                      <div className="author-img">
                        <img  src="assets/images/bg/testi5.png" alt="image" />
                      </div>
                      <div className="author-desig">
                        <h5>David L.</h5>
                        <p>Chief Technology Officer (CTO)</p>
                      </div>
                    </div>
                    <p className="para">
                      Tovuti is a game-changer! They designed a sleek, professional website that perfectly represents our brand.
                      Their e-commerce solutions are robust and user-friendly, making it easy for our customers to shop online.
                      The digital marketing strategies they implemented have significantly increased our online visibility and sales.
                      I highly recommend them to anyone looking to elevate their online presence.
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-bottom d-flex justify-content-center align-items-center">
              <div className="swiper-pagination2 style-2 text-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teastimonial2;
