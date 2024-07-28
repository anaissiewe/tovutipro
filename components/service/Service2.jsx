import React from "react";
import Link from "next/link";
function Service2() {
  return (
    <>
      <div className="service2-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title2 primary4">
                <span>-What We Offer-</span>
                <div>
                  <h3>Our Services</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img
                  src="assets/images/icons/service21.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>01</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Website Devolopment</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Creating responsive, user-friendly websites that deliver a seamless online experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img
                  src="assets/images/icons/service22.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>02</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Ui/Ux Creative Design</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Crafting visually stunning and user-centric designs that captivate and retain your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img
                  src="assets/images/icons/service23.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>03</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Mobile Apps Development</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Developing intuitive and engaging mobile apps for iOS and Android platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.8s"
              >
                <img
                  src="assets/images/icons/service24.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>04</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Custom Programming</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Providing tailored software solutions to meet the unique needs of your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="1s"
              >
                <img
                  src="assets/images/icons/service25.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>05</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Digital Marketing</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Implementing data-driven strategies to boost your online presence and engage your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="1.2s"
              >
                <img
                  src="assets/images/icons/service26.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>06</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Consultancy</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Offering expert guidance and strategic insights to help you navigate the complexities
                    of the digital world and achieve your business objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service2;
